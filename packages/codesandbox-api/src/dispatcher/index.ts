// import * as debug from 'debug';
import host from './host';

const bundlers: Map<Window, string> = new Map();

function checkIsStandalone() {
  if (typeof window === 'undefined') {
    return true;
  }

  if (window.location && window.location.href.indexOf('?standalone') > -1) {
    return true;
  }

  if (window.opener || window.parent !== window) {
    // Only apply when host is an absolute URL — otherwise self-host sub-paths false-match.
    if (
      window.location &&
      /^https?:\/\//.test(host) &&
      window.location.href.indexOf(host) > -1
    ) {
      return true;
    }

    return false;
  }

  return true;
}

// Whether the tab has a connection with the editor
export const isStandalone = checkIsStandalone();

let resolveIframeHandshake: () => void;

let iframeHandshakeDone = false;
/**
 * Resolves when the handshake between the frame and the editor has succeeded
 */
export const iframeHandshake = new Promise(resolve => {
  resolveIframeHandshake = resolve as () => void;
});

// Track every parent that ever registered with us — sandpack remounts (StrictMode,
// theme key change) create fresh clients with new channelIds. We dispatch to all
// known ids so messages reach whichever listener is currently live.
let parentOrigin: string | null = null;
let parentId: number | null = null;
const parentIds = new Set<number>();

const parentOriginListener = (e: MessageEvent) => {
  if (e.data.type === 'register-frame') {
    parentOrigin = e.data.origin;
    parentId = e.data.id ?? null;
    if (parentId !== null) parentIds.add(parentId);

    if (!iframeHandshakeDone) {
      resolveIframeHandshake();
      iframeHandshakeDone = true;
    }
  }
};

if (typeof window !== 'undefined') {
  self.addEventListener('message', parentOriginListener);
}

export function resetState() {
  parentOrigin = null;
  bundlers.clear();
}

/**
 * Send a message to the editor, this is most probably an action you generated
 *
 * @export
 * @param {*} message
 * @returns
 */
export function dispatch(message: any) {
  if (!message) return;

  const baseMessage = { ...message, codesandbox: true };

  notifyListeners(baseMessage);
  notifyFrames(baseMessage);

  if (isStandalone) return;
  if (parentOrigin === null && message.type !== 'initialized') return;

  const target = parentOrigin === null ? '*' : parentOrigin;
  const targetWindow = window.opener || window.parent;

  if (parentIds.size === 0) {
    targetWindow.postMessage(baseMessage, target);
    return;
  }
  parentIds.forEach(id => {
    targetWindow.postMessage({ ...baseMessage, $id: id }, target);
  });
}

export type Callback = (
  message: object,
  source?: MessageEvent['source'] | null | undefined
) => void;

const listeners: { [id: string]: Callback } = {};
let listenerId = 0;

/**
 * Listen to everything that comes in from either the editor or the sandbox
 * @param callback Call this function to 'unlisten'
 */
export function listen(callback: Callback): () => void {
  const id = ++listenerId;
  listeners[id] = callback;

  return () => {
    delete listeners[id];
  };
}

export function notifyListeners(data: object, source?: MessageEvent['source']) {
  // eslint-disable-next-line no-shadow
  Object.keys(listeners).forEach(listenerId => {
    if (listeners[listenerId]) {
      try {
        listeners[listenerId](data, source);
      } catch (e) {
        /**/
      }
    }
  });
}

function notifyFrames(message: object) {
  const rawMessage = JSON.parse(JSON.stringify(message));
  bundlers.forEach((origin, frame) => {
    if (frame && frame.postMessage) {
      frame.postMessage({ ...rawMessage, codesandbox: true }, origin);
    }
  });
}

function eventListener(e: MessageEvent) {
  if (e.data.type === 'initialized' || isStandalone) {
    // iframe handshake is auto-resolved in the parent, only the child needs to wait for it
    // we detect the parent either by the "initialized" message which only the parent receives
    // or by the "isStandalone" flag which works for codesandbox.io and when sandpack is not inside an iframe
    iframeHandshakeDone = true;
  }

  if (!iframeHandshakeDone) {
    return;
  }

  const { data } = e;

  if (
    data &&
    data.codesandbox &&
    (parentOrigin === null || e.origin === parentOrigin) &&
    (data.$id == null || parentId === null || parentId === data.$id)
  ) {
    notifyListeners(data, e.source);
  }
}

/**
 * Register an window as a output the `dispatch` function can send messages to.
 *
 * @param frame
 */
export function registerFrame(frame: Window, origin: string, bundlerId?: number) {
  bundlers.set(frame, origin);
  frame.postMessage(
    {
      type: 'register-frame',
      origin: document.location.origin,
      id: bundlerId,
    },
    origin
  );
}

if (typeof window !== 'undefined') {
  window.addEventListener('message', eventListener);
}

export function reattach() {
  window.addEventListener('message', eventListener);
}
