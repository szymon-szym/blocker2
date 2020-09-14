/* tslint:disable */

/* -------------------------------------------------- */

/*      Start of Webpack Hot Extension Middleware     */

/* ================================================== */

/*  This will be converted into a lodash templ., any  */

/*  external argument must be provided using it       */

/* -------------------------------------------------- */
(function (window) {
  var injectionContext = {
    browser: null
  };
  (function () {
    ""||(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("webextension-polyfill", ["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.browser = mod.exports;
  }
})(this, function (module) {
  /* webextension-polyfill - v0.5.0 - Thu Sep 26 2019 22:22:26 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";

    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({ resolve, reject }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);

                target[name](...args);

                // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.
                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;

                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({ resolve, reject }, metadata));
            }
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });

              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.
        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });

      // Keep track if the deprecation warning has been logged at least once.
      let loggedSendResponseDeprecationWarning = false;

      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;

          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }
              didCallSendResponse = true;
              resolve(response);
            };
          });

          let result;
          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result);

          // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.
          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          }

          // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).
          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;
              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          };

          // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.
          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          }

          // Let Chrome know that the listener is replying.
          return true;
        };
      });

      const wrappedSendMessageCallback = ({ reject, resolve }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, { resolve, reject });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 })
        }
      };
      const settingMetadata = {
        clear: { minArgs: 1, maxArgs: 1 },
        get: { minArgs: 1, maxArgs: 1 },
        set: { minArgs: 1, maxArgs: 1 }
      };
      apiMetadata.privacy = {
        network: {
          networkPredictionEnabled: settingMetadata,
          webRTCIPHandlingPolicy: settingMetadata
        },
        services: {
          passwordSavingEnabled: settingMetadata
        },
        websites: {
          hyperlinkAuditingEnabled: settingMetadata,
          referrersEnabled: settingMetadata
        }
      };

      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    }

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map
"";
  }).bind(injectionContext)();
  var browser = injectionContext.browser;
  var signals = JSON.parse('{"SIGN_CHANGE":"SIGN_CHANGE","SIGN_RELOAD":"SIGN_RELOAD","SIGN_RELOADED":"SIGN_RELOADED","SIGN_LOG":"SIGN_LOG","SIGN_CONNECT":"SIGN_CONNECT"}');
  var config = JSON.parse('{"RECONNECT_INTERVAL":2000,"SOCKET_ERR_CODE_REF":"https://tools.ietf.org/html/rfc6455#section-7.4.1"}');
  var reloadPage = "true" === "true";
  var wsHost = "ws://localhost:9090";
  var SIGN_CHANGE = signals.SIGN_CHANGE,
      SIGN_RELOAD = signals.SIGN_RELOAD,
      SIGN_RELOADED = signals.SIGN_RELOADED,
      SIGN_LOG = signals.SIGN_LOG,
      SIGN_CONNECT = signals.SIGN_CONNECT;
  var RECONNECT_INTERVAL = config.RECONNECT_INTERVAL,
      SOCKET_ERR_CODE_REF = config.SOCKET_ERR_CODE_REF;
  var extension = browser.extension,
      runtime = browser.runtime,
      tabs = browser.tabs;
  var manifest = runtime.getManifest(); // =============================== Helper functions ======================================= //

  var formatter = function formatter(msg) {
    return "[ WER: ".concat(msg, " ]");
  };

  var logger = function logger(msg) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
    return console[level](formatter(msg));
  };

  var timeFormatter = function timeFormatter(date) {
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }; // ========================== Called only on content scripts ============================== //


  function contentScriptWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref) {
      var type = _ref.type,
          payload = _ref.payload;

      switch (type) {
        case SIGN_RELOAD:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================== Called only on background scripts ============================= //


  function backgroundWorker(socket) {
    runtime.onMessage.addListener(function (action, sender) {
      if (action.type === SIGN_CONNECT) {
        return Promise.resolve(formatter("Connected to Extension Hot Reloader"));
      }

      return true;
    });
    socket.addEventListener("message", function (_ref2) {
      var data = _ref2.data;

      var _JSON$parse = JSON.parse(data),
          type = _JSON$parse.type,
          payload = _JSON$parse.payload;

      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {
        tabs.query({
          status: "complete"
        }).then(function (loadedTabs) {
          loadedTabs.forEach(function (tab) {
            return tab.id && tabs.sendMessage(tab.id, {
              type: SIGN_RELOAD
            });
          });
          socket.send(JSON.stringify({
            type: SIGN_RELOADED,
            payload: formatter("".concat(timeFormatter(new Date()), " - ").concat(manifest.name, " successfully reloaded"))
          }));
          runtime.reload();
        });
      } else {
        runtime.sendMessage({
          type: type,
          payload: payload
        });
      }
    });
    socket.addEventListener("close", function (_ref3) {
      var code = _ref3.code;
      logger("Socket connection closed. Code ".concat(code, ". See more in ").concat(SOCKET_ERR_CODE_REF), "warn");
      var intId = setInterval(function () {
        logger("Attempting to reconnect (tip: Check if Webpack is running)");
        var ws = new WebSocket(wsHost);

        ws.onerror = function () {
          return logger("Error trying to re-connect. Reattempting in ".concat(RECONNECT_INTERVAL / 1000, "s"), "warn");
        };

        ws.addEventListener("open", function () {
          clearInterval(intId);
          logger("Reconnected. Reloading plugin");
          runtime.reload();
        });
      }, RECONNECT_INTERVAL);
    });
  } // ======================== Called only on extension pages that are not the background ============================= //


  function extensionPageWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref4) {
      var type = _ref4.type,
          payload = _ref4.payload;

      switch (type) {
        case SIGN_CHANGE:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================= Bootstraps the middleware =========================== //


  runtime.reload ? extension.getBackgroundPage() === window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker() : contentScriptWorker();
})(window);
/* ----------------------------------------------- */

/* End of Webpack Hot Extension Middleware  */

/* ----------------------------------------------- *//******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"popup": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(browser) {/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _utils_loginState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/loginState.js */ \"./src/utils/loginState.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"HelloWorld\",\n  data: function data() {\n    return {\n      accessToken: \"\",\n      userName: \"\",\n      dummy: \"txt\",\n      catblocker: null,\n      currOption: null,\n      selectedOption: null,\n      isLogged: null\n    };\n  },\n  methods: {\n    checkIsLogged: function checkIsLogged() {\n      var _this = this;\n\n      return Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_utils_loginState_js__WEBPACK_IMPORTED_MODULE_2__[\"checkIsLogged\"])();\n\n              case 2:\n                _this.isLogged = _context.sent;\n                _context.next = 5;\n                return browser.runtime.sendMessage(\"checkState\");\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    logout: function logout() {\n      var _this2 = this;\n\n      return Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return Object(_utils_loginState_js__WEBPACK_IMPORTED_MODULE_2__[\"logout\"])();\n\n              case 2:\n                _this2.userName = null;\n                _context2.next = 5;\n                return _this2.checkIsLogged();\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    clearStoredData: function clearStoredData() {\n      var _this3 = this;\n\n      return Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return Object(_utils_loginState_js__WEBPACK_IMPORTED_MODULE_2__[\"clearStoredData\"])();\n\n              case 2:\n                _this3.userName = null;\n\n              case 3:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    },\n    login: function login() {\n      var _this4 = this;\n\n      return Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return Object(_utils_loginState_js__WEBPACK_IMPORTED_MODULE_2__[\"login\"])();\n\n              case 2:\n                _this4.accessToken = _context4.sent;\n                _context4.next = 5;\n                return _this4.getUser(_this4.accessToken);\n\n              case 5:\n                _context4.next = 7;\n                return _this4.checkIsLogged();\n\n              case 7:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }))();\n    },\n    getUser: function getUser(accessToken) {\n      var _this5 = this;\n\n      return Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {\n        return regeneratorRuntime.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                _context5.next = 2;\n                return Object(_utils_loginState_js__WEBPACK_IMPORTED_MODULE_2__[\"getUser\"])(accessToken);\n\n              case 2:\n                _this5.userName = _context5.sent;\n\n              case 3:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5);\n      }))();\n    },\n    stopAction: function stopAction() {\n      var _this6 = this;\n\n      return Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {\n        return regeneratorRuntime.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _this6.currOption = \"stop\";\n                _context6.next = 3;\n                return _this6.sendMsgToContent(\"stop\");\n\n              case 3:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6);\n      }))();\n    },\n    moneyAction: function moneyAction() {\n      var _this7 = this;\n\n      return Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {\n        return regeneratorRuntime.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                _this7.currOption = \"money\";\n                _context7.next = 3;\n                return _this7.sendMsgToContent(\"money\");\n\n              case 3:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7);\n      }))();\n    },\n    goodAction: function goodAction() {\n      var _this8 = this;\n\n      return Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {\n        return regeneratorRuntime.wrap(function _callee8$(_context8) {\n          while (1) {\n            switch (_context8.prev = _context8.next) {\n              case 0:\n                _this8.currOption = \"good\";\n                _context8.next = 3;\n                return _this8.sendMsgToContent(\"good\");\n\n              case 3:\n              case \"end\":\n                return _context8.stop();\n            }\n          }\n        }, _callee8);\n      }))();\n    },\n    blockAction: function blockAction() {\n      var _this9 = this;\n\n      return Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {\n        return regeneratorRuntime.wrap(function _callee9$(_context9) {\n          while (1) {\n            switch (_context9.prev = _context9.next) {\n              case 0:\n                _this9.currOption = \"block\";\n                _context9.next = 3;\n                return _this9.sendMsgToContent(\"block\");\n\n              case 3:\n              case \"end\":\n                return _context9.stop();\n            }\n          }\n        }, _callee9);\n      }))();\n    },\n    sendMsgToContent: function sendMsgToContent(text) {\n      return Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {\n        var tabs, currTab;\n        return regeneratorRuntime.wrap(function _callee10$(_context10) {\n          while (1) {\n            switch (_context10.prev = _context10.next) {\n              case 0:\n                _context10.next = 2;\n                return browser.tabs.query({\n                  active: true,\n                  currentWindow: true\n                });\n\n              case 2:\n                tabs = _context10.sent;\n                currTab = tabs[0].id;\n                _context10.next = 6;\n                return browser.tabs.sendMessage(currTab, {\n                  message: text\n                });\n\n              case 6:\n                // await browser.storage.local.set({ catblocker: true })\n                chrome.storage.local.set({\n                  catblocker: text\n                }, function () {\n                  console.log(\"blocker state set in storge to \".concat(text));\n                });\n\n              case 7:\n              case \"end\":\n                return _context10.stop();\n            }\n          }\n        }, _callee10);\n      }))();\n    }\n  },\n  mounted: function mounted() {\n    var _this10 = this;\n\n    return Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {\n      var nameObj, result;\n      return regeneratorRuntime.wrap(function _callee11$(_context11) {\n        while (1) {\n          switch (_context11.prev = _context11.next) {\n            case 0:\n              _context11.next = 2;\n              return browser.storage.sync.get(\"userName\");\n\n            case 2:\n              nameObj = _context11.sent;\n              _this10.userName = nameObj.userName;\n              _context11.next = 6;\n              return _this10.checkIsLogged();\n\n            case 6:\n              // to be moved to the store\n              browser.storage.onChanged.addListener(function (changes, area) {\n                console.log(\"area to change: \".concat(area));\n\n                if (area === \"local\") {\n                  if (Object.prototype.hasOwnProperty.call(changes, \"catblocker\")) {\n                    _this10.catblocker = changes.catblocker.newValue;\n                    _this10.currOption = _this10.catblocker;\n                  }\n                }\n              });\n              _context11.next = 9;\n              return browser.storage.local.get(\"catblocker\");\n\n            case 9:\n              result = _context11.sent;\n              _this10.catblocker = result.catblocker === undefined ? \"money\" : result.catblocker;\n              _this10.currOption = _this10.catblocker;\n              console.log(\"[popup] at init current state is \".concat(_this10.catblocker)); // });\n\n            case 13:\n            case \"end\":\n              return _context11.stop();\n          }\n        }\n      }, _callee11);\n    }))();\n  },\n  computed: {\n    stopBtnState: function stopBtnState() {\n      return this.currOption === \"stop\" ? \"danger\" : \"outline-danger\";\n    },\n    blockBtnState: function blockBtnState() {\n      return this.currOption === \"block\" ? \"primary\" : \"outline-primary\";\n    },\n    moneyBtnState: function moneyBtnState() {\n      return this.currOption === \"money\" ? \"primary\" : \"outline-primary\";\n    },\n    goodBtnState: function goodBtnState() {\n      return this.currOption === \"good\" ? \"primary\" : \"outline-primary\";\n    },\n    defaultText: function defaultText() {\n      return browser.i18n.getMessage(\"extName\");\n    },\n    currDescription: function currDescription() {\n      if (this.currOption === \"stop\") {\n        return \"Extension is deactivated\";\n      } else if (this.currOption === \"money\") {\n        return \"Now you are earning money. We will not only block ads on websites, but also replace them with our owns. You are participating in profits!\";\n      } else if (this.currOption === \"good\") {\n        return \"Sharing is carrying. We will not only block ads on websites, but also replace them with our owns. Part of profits is going to the xxx. Please check \\\"about\\\" tab for details\";\n      } else if (this.currOption === \"block\") {\n        return \"Now we are simply blocking ads\";\n      } else {\n        return \"\";\n      }\n    }\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! webextension-polyfill */ \"./node_modules/webextension-polyfill/dist/browser-polyfill.js\")))\n\n//# sourceURL=webpack:///./src/components/MainView.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/popup/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/popup/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MainView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/MainView.vue */ \"./src/components/MainView.vue\");\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    MainView: _components_MainView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/popup/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"e26265aa-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=template&id=0bc4212e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e26265aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=template&id=0bc4212e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\n        \"b-navbar\",\n        { attrs: { type: \"dark\", variant: \"primary\" } },\n        [\n          _c(\"b-navbar-brand\", [_vm._v(\"Add blocker\")]),\n          !_vm.isLogged\n            ? _c(\"b-btn\", { on: { click: _vm.login } }, [_vm._v(\"Login\")])\n            : _vm._e(),\n          _vm.isLogged\n            ? _c(\"b-btn\", { on: { click: _vm.logout } }, [_vm._v(\"Logout\")])\n            : _vm._e()\n        ],\n        1\n      ),\n      _c(\n        \"b-container\",\n        [\n          _vm.userName\n            ? _c(\n                \"b-row\",\n                { staticClass: \"mt-2\" },\n                [_c(\"b-col\", [_vm._v(\"Hi \" + _vm._s(_vm.userName))])],\n                1\n              )\n            : _vm._e(),\n          _c(\"b-row\", { staticClass: \"mt-2\" }),\n          _c(\n            \"b-row\",\n            [\n              _c(\n                \"b-col\",\n                [\n                  _c(\n                    \"b-btn\",\n                    {\n                      attrs: {\n                        pill: \"\",\n                        size: \"lg\",\n                        variant: _vm.stopBtnState\n                      },\n                      on: { click: _vm.stopAction }\n                    },\n                    [_c(\"b-icon-power\")],\n                    1\n                  )\n                ],\n                1\n              ),\n              _c(\n                \"b-col\",\n                [\n                  _c(\n                    \"b-btn\",\n                    {\n                      attrs: {\n                        pill: \"\",\n                        size: \"lg\",\n                        variant: _vm.moneyBtnState\n                      },\n                      on: { click: _vm.moneyAction }\n                    },\n                    [_c(\"b-icon-wallet-2\")],\n                    1\n                  )\n                ],\n                1\n              ),\n              _c(\n                \"b-col\",\n                [\n                  _c(\n                    \"b-btn\",\n                    {\n                      attrs: {\n                        pill: \"\",\n                        size: \"lg\",\n                        variant: _vm.goodBtnState\n                      },\n                      on: { click: _vm.goodAction }\n                    },\n                    [_c(\"b-icon-hand-thumbs-up\")],\n                    1\n                  )\n                ],\n                1\n              ),\n              _c(\n                \"b-col\",\n                [\n                  _c(\n                    \"b-btn\",\n                    {\n                      attrs: {\n                        pill: \"\",\n                        size: \"lg\",\n                        variant: _vm.blockBtnState\n                      },\n                      on: { click: _vm.blockAction }\n                    },\n                    [_c(\"b-icon-exclamation-octagon-fill\")],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          ),\n          _c(\n            \"b-row\",\n            { staticClass: \"mt-2\" },\n            [_c(\"b-col\", [_c(\"p\", [_vm._v(_vm._s(_vm.currDescription))])])],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/MainView.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22e26265aa-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"e26265aa-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/popup/App.vue?vue&type=template&id=3a0a60d6&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e26265aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/popup/App.vue?vue&type=template&id=3a0a60d6& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"main-view\")\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/popup/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22e26265aa-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/custom.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/postcss-loader/src??ref--8-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./src/styles/custom.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n/*!\\n * Bootstrap v4.5.2 (https://getbootstrap.com/)\\n * Copyright 2011-2020 The Bootstrap Authors\\n * Copyright 2011-2020 Twitter, Inc.\\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\\n */\\n:root {\\n  --blue: #007bff;\\n  --indigo: #6610f2;\\n  --purple: #6f42c1;\\n  --pink: #e83e8c;\\n  --red: #dc3545;\\n  --orange: #fd7e14;\\n  --yellow: #ffc107;\\n  --green: #28a745;\\n  --teal: #20c997;\\n  --cyan: #17a2b8;\\n  --white: #fff;\\n  --gray: #6c757d;\\n  --gray-dark: #343a40;\\n  --primary: #3A3335;\\n  --secondary: #717568;\\n  --success: #42D9C8;\\n  --info: #BACBA9;\\n  --warning: #F1BF98;\\n  --danger: #D81E5B;\\n  --light: #f8f9fa;\\n  --dark: #343a40;\\n  --breakpoint-xs: 0;\\n  --breakpoint-sm: 576px;\\n  --breakpoint-md: 768px;\\n  --breakpoint-lg: 992px;\\n  --breakpoint-xl: 1200px;\\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\";\\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-family: sans-serif;\\n  line-height: 1.15;\\n  -webkit-text-size-adjust: 100%;\\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\\n}\\n\\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\\n  display: block;\\n}\\n\\nbody {\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\";\\n  font-size: 1rem;\\n  font-weight: 400;\\n  line-height: 1.5;\\n  color: #212529;\\n  text-align: left;\\n  background-color: #fff;\\n}\\n\\n[tabindex=\\\"-1\\\"]:focus:not(:focus-visible) {\\n  outline: 0 !important;\\n}\\n\\nhr {\\n  box-sizing: content-box;\\n  height: 0;\\n  overflow: visible;\\n}\\n\\nh1, h2, h3, h4, h5, h6 {\\n  margin-top: 0;\\n  margin-bottom: 0.5rem;\\n}\\n\\np {\\n  margin-top: 0;\\n  margin-bottom: 1rem;\\n}\\n\\nabbr[title],\\nabbr[data-original-title] {\\n  text-decoration: underline;\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted;\\n  cursor: help;\\n  border-bottom: 0;\\n  -webkit-text-decoration-skip-ink: none;\\n          text-decoration-skip-ink: none;\\n}\\n\\naddress {\\n  margin-bottom: 1rem;\\n  font-style: normal;\\n  line-height: inherit;\\n}\\n\\nol,\\nul,\\ndl {\\n  margin-top: 0;\\n  margin-bottom: 1rem;\\n}\\n\\nol ol,\\nul ul,\\nol ul,\\nul ol {\\n  margin-bottom: 0;\\n}\\n\\ndt {\\n  font-weight: 700;\\n}\\n\\ndd {\\n  margin-bottom: 0.5rem;\\n  margin-left: 0;\\n}\\n\\nblockquote {\\n  margin: 0 0 1rem;\\n}\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\nsub,\\nsup {\\n  position: relative;\\n  font-size: 75%;\\n  line-height: 0;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\na {\\n  color: #3A3335;\\n  text-decoration: none;\\n  background-color: transparent;\\n}\\na:hover {\\n  color: #110f10;\\n  text-decoration: underline;\\n}\\n\\na:not([href]):not([class]) {\\n  color: inherit;\\n  text-decoration: none;\\n}\\na:not([href]):not([class]):hover {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\npre,\\ncode,\\nkbd,\\nsamp {\\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace;\\n  font-size: 1em;\\n}\\n\\npre {\\n  margin-top: 0;\\n  margin-bottom: 1rem;\\n  overflow: auto;\\n  -ms-overflow-style: scrollbar;\\n}\\n\\nfigure {\\n  margin: 0 0 1rem;\\n}\\n\\nimg {\\n  vertical-align: middle;\\n  border-style: none;\\n}\\n\\nsvg {\\n  overflow: hidden;\\n  vertical-align: middle;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n}\\n\\ncaption {\\n  padding-top: 0.75rem;\\n  padding-bottom: 0.75rem;\\n  color: #6c757d;\\n  text-align: left;\\n  caption-side: bottom;\\n}\\n\\nth {\\n  text-align: inherit;\\n}\\n\\nlabel {\\n  display: inline-block;\\n  margin-bottom: 0.5rem;\\n}\\n\\nbutton {\\n  border-radius: 0;\\n}\\n\\nbutton:focus {\\n  outline: 1px dotted;\\n  outline: 5px auto -webkit-focus-ring-color;\\n}\\n\\ninput,\\nbutton,\\nselect,\\noptgroup,\\ntextarea {\\n  margin: 0;\\n  font-family: inherit;\\n  font-size: inherit;\\n  line-height: inherit;\\n}\\n\\nbutton,\\ninput {\\n  overflow: visible;\\n}\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n[role=button] {\\n  cursor: pointer;\\n}\\n\\nselect {\\n  word-wrap: normal;\\n}\\n\\nbutton,\\n[type=button],\\n[type=reset],\\n[type=submit] {\\n  -webkit-appearance: button;\\n}\\n\\nbutton:not(:disabled),\\n[type=button]:not(:disabled),\\n[type=reset]:not(:disabled),\\n[type=submit]:not(:disabled) {\\n  cursor: pointer;\\n}\\n\\nbutton::-moz-focus-inner,\\n[type=button]::-moz-focus-inner,\\n[type=reset]::-moz-focus-inner,\\n[type=submit]::-moz-focus-inner {\\n  padding: 0;\\n  border-style: none;\\n}\\n\\ninput[type=radio],\\ninput[type=checkbox] {\\n  box-sizing: border-box;\\n  padding: 0;\\n}\\n\\ntextarea {\\n  overflow: auto;\\n  resize: vertical;\\n}\\n\\nfieldset {\\n  min-width: 0;\\n  padding: 0;\\n  margin: 0;\\n  border: 0;\\n}\\n\\nlegend {\\n  display: block;\\n  width: 100%;\\n  max-width: 100%;\\n  padding: 0;\\n  margin-bottom: 0.5rem;\\n  font-size: 1.5rem;\\n  line-height: inherit;\\n  color: inherit;\\n  white-space: normal;\\n}\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n[type=number]::-webkit-inner-spin-button,\\n[type=number]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n[type=search] {\\n  outline-offset: -2px;\\n  -webkit-appearance: none;\\n}\\n\\n[type=search]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n::-webkit-file-upload-button {\\n  font: inherit;\\n  -webkit-appearance: button;\\n}\\n\\noutput {\\n  display: inline-block;\\n}\\n\\nsummary {\\n  display: list-item;\\n  cursor: pointer;\\n}\\n\\ntemplate {\\n  display: none;\\n}\\n\\n[hidden] {\\n  display: none !important;\\n}\\n\\nh1, h2, h3, h4, h5, h6,\\n.h1, .h2, .h3, .h4, .h5, .h6 {\\n  margin-bottom: 0.5rem;\\n  font-weight: 500;\\n  line-height: 1.2;\\n}\\n\\nh1, .h1 {\\n  font-size: 2.5rem;\\n}\\n\\nh2, .h2 {\\n  font-size: 2rem;\\n}\\n\\nh3, .h3 {\\n  font-size: 1.75rem;\\n}\\n\\nh4, .h4 {\\n  font-size: 1.5rem;\\n}\\n\\nh5, .h5 {\\n  font-size: 1.25rem;\\n}\\n\\nh6, .h6 {\\n  font-size: 1rem;\\n}\\n\\n.lead {\\n  font-size: 1.25rem;\\n  font-weight: 300;\\n}\\n\\n.display-1 {\\n  font-size: 6rem;\\n  font-weight: 300;\\n  line-height: 1.2;\\n}\\n\\n.display-2 {\\n  font-size: 5.5rem;\\n  font-weight: 300;\\n  line-height: 1.2;\\n}\\n\\n.display-3 {\\n  font-size: 4.5rem;\\n  font-weight: 300;\\n  line-height: 1.2;\\n}\\n\\n.display-4 {\\n  font-size: 3.5rem;\\n  font-weight: 300;\\n  line-height: 1.2;\\n}\\n\\nhr {\\n  margin-top: 1rem;\\n  margin-bottom: 1rem;\\n  border: 0;\\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\\n}\\n\\nsmall,\\n.small {\\n  font-size: 80%;\\n  font-weight: 400;\\n}\\n\\nmark,\\n.mark {\\n  padding: 0.2em;\\n  background-color: #fcf8e3;\\n}\\n\\n.list-unstyled {\\n  padding-left: 0;\\n  list-style: none;\\n}\\n\\n.list-inline {\\n  padding-left: 0;\\n  list-style: none;\\n}\\n\\n.list-inline-item {\\n  display: inline-block;\\n}\\n.list-inline-item:not(:last-child) {\\n  margin-right: 0.5rem;\\n}\\n\\n.initialism {\\n  font-size: 90%;\\n  text-transform: uppercase;\\n}\\n\\n.blockquote {\\n  margin-bottom: 1rem;\\n  font-size: 1.25rem;\\n}\\n\\n.blockquote-footer {\\n  display: block;\\n  font-size: 80%;\\n  color: #6c757d;\\n}\\n.blockquote-footer::before {\\n  content: \\\"— \\\";\\n}\\n\\n.img-fluid {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.img-thumbnail {\\n  padding: 0.25rem;\\n  background-color: #fff;\\n  border: 1px solid #dee2e6;\\n  border-radius: 0.25rem;\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.figure {\\n  display: inline-block;\\n}\\n\\n.figure-img {\\n  margin-bottom: 0.5rem;\\n  line-height: 1;\\n}\\n\\n.figure-caption {\\n  font-size: 90%;\\n  color: #6c757d;\\n}\\n\\ncode {\\n  font-size: 87.5%;\\n  color: #e83e8c;\\n  word-wrap: break-word;\\n}\\na > code {\\n  color: inherit;\\n}\\n\\nkbd {\\n  padding: 0.2rem 0.4rem;\\n  font-size: 87.5%;\\n  color: #fff;\\n  background-color: #212529;\\n  border-radius: 0.2rem;\\n}\\nkbd kbd {\\n  padding: 0;\\n  font-size: 100%;\\n  font-weight: 700;\\n}\\n\\npre {\\n  display: block;\\n  font-size: 87.5%;\\n  color: #212529;\\n}\\npre code {\\n  font-size: inherit;\\n  color: inherit;\\n  word-break: normal;\\n}\\n\\n.pre-scrollable {\\n  max-height: 340px;\\n  overflow-y: scroll;\\n}\\n\\n.container,\\n.container-fluid,\\n.container-xl,\\n.container-lg,\\n.container-md,\\n.container-sm {\\n  width: 100%;\\n  padding-right: 15px;\\n  padding-left: 15px;\\n  margin-right: auto;\\n  margin-left: auto;\\n}\\n\\n@media (min-width: 576px) {\\n  .container-sm, .container {\\n    max-width: 540px;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .container-md, .container-sm, .container {\\n    max-width: 720px;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .container-lg, .container-md, .container-sm, .container {\\n    max-width: 960px;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\\n    max-width: 1140px;\\n  }\\n}\\n.row {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin-right: -15px;\\n  margin-left: -15px;\\n}\\n\\n.no-gutters {\\n  margin-right: 0;\\n  margin-left: 0;\\n}\\n.no-gutters > .col,\\n.no-gutters > [class*=col-] {\\n  padding-right: 0;\\n  padding-left: 0;\\n}\\n\\n.col-xl,\\n.col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg,\\n.col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md,\\n.col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm,\\n.col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col,\\n.col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {\\n  position: relative;\\n  width: 100%;\\n  padding-right: 15px;\\n  padding-left: 15px;\\n}\\n\\n.col {\\n  flex-basis: 0;\\n  flex-grow: 1;\\n  max-width: 100%;\\n}\\n\\n.row-cols-1 > * {\\n  flex: 0 0 100%;\\n  max-width: 100%;\\n}\\n\\n.row-cols-2 > * {\\n  flex: 0 0 50%;\\n  max-width: 50%;\\n}\\n\\n.row-cols-3 > * {\\n  flex: 0 0 33.3333333333%;\\n  max-width: 33.3333333333%;\\n}\\n\\n.row-cols-4 > * {\\n  flex: 0 0 25%;\\n  max-width: 25%;\\n}\\n\\n.row-cols-5 > * {\\n  flex: 0 0 20%;\\n  max-width: 20%;\\n}\\n\\n.row-cols-6 > * {\\n  flex: 0 0 16.6666666667%;\\n  max-width: 16.6666666667%;\\n}\\n\\n.col-auto {\\n  flex: 0 0 auto;\\n  width: auto;\\n  max-width: 100%;\\n}\\n\\n.col-1 {\\n  flex: 0 0 8.3333333333%;\\n  max-width: 8.3333333333%;\\n}\\n\\n.col-2 {\\n  flex: 0 0 16.6666666667%;\\n  max-width: 16.6666666667%;\\n}\\n\\n.col-3 {\\n  flex: 0 0 25%;\\n  max-width: 25%;\\n}\\n\\n.col-4 {\\n  flex: 0 0 33.3333333333%;\\n  max-width: 33.3333333333%;\\n}\\n\\n.col-5 {\\n  flex: 0 0 41.6666666667%;\\n  max-width: 41.6666666667%;\\n}\\n\\n.col-6 {\\n  flex: 0 0 50%;\\n  max-width: 50%;\\n}\\n\\n.col-7 {\\n  flex: 0 0 58.3333333333%;\\n  max-width: 58.3333333333%;\\n}\\n\\n.col-8 {\\n  flex: 0 0 66.6666666667%;\\n  max-width: 66.6666666667%;\\n}\\n\\n.col-9 {\\n  flex: 0 0 75%;\\n  max-width: 75%;\\n}\\n\\n.col-10 {\\n  flex: 0 0 83.3333333333%;\\n  max-width: 83.3333333333%;\\n}\\n\\n.col-11 {\\n  flex: 0 0 91.6666666667%;\\n  max-width: 91.6666666667%;\\n}\\n\\n.col-12 {\\n  flex: 0 0 100%;\\n  max-width: 100%;\\n}\\n\\n.order-first {\\n  order: -1;\\n}\\n\\n.order-last {\\n  order: 13;\\n}\\n\\n.order-0 {\\n  order: 0;\\n}\\n\\n.order-1 {\\n  order: 1;\\n}\\n\\n.order-2 {\\n  order: 2;\\n}\\n\\n.order-3 {\\n  order: 3;\\n}\\n\\n.order-4 {\\n  order: 4;\\n}\\n\\n.order-5 {\\n  order: 5;\\n}\\n\\n.order-6 {\\n  order: 6;\\n}\\n\\n.order-7 {\\n  order: 7;\\n}\\n\\n.order-8 {\\n  order: 8;\\n}\\n\\n.order-9 {\\n  order: 9;\\n}\\n\\n.order-10 {\\n  order: 10;\\n}\\n\\n.order-11 {\\n  order: 11;\\n}\\n\\n.order-12 {\\n  order: 12;\\n}\\n\\n.offset-1 {\\n  margin-left: 8.3333333333%;\\n}\\n\\n.offset-2 {\\n  margin-left: 16.6666666667%;\\n}\\n\\n.offset-3 {\\n  margin-left: 25%;\\n}\\n\\n.offset-4 {\\n  margin-left: 33.3333333333%;\\n}\\n\\n.offset-5 {\\n  margin-left: 41.6666666667%;\\n}\\n\\n.offset-6 {\\n  margin-left: 50%;\\n}\\n\\n.offset-7 {\\n  margin-left: 58.3333333333%;\\n}\\n\\n.offset-8 {\\n  margin-left: 66.6666666667%;\\n}\\n\\n.offset-9 {\\n  margin-left: 75%;\\n}\\n\\n.offset-10 {\\n  margin-left: 83.3333333333%;\\n}\\n\\n.offset-11 {\\n  margin-left: 91.6666666667%;\\n}\\n\\n@media (min-width: 576px) {\\n  .col-sm {\\n    flex-basis: 0;\\n    flex-grow: 1;\\n    max-width: 100%;\\n  }\\n\\n  .row-cols-sm-1 > * {\\n    flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n\\n  .row-cols-sm-2 > * {\\n    flex: 0 0 50%;\\n    max-width: 50%;\\n  }\\n\\n  .row-cols-sm-3 > * {\\n    flex: 0 0 33.3333333333%;\\n    max-width: 33.3333333333%;\\n  }\\n\\n  .row-cols-sm-4 > * {\\n    flex: 0 0 25%;\\n    max-width: 25%;\\n  }\\n\\n  .row-cols-sm-5 > * {\\n    flex: 0 0 20%;\\n    max-width: 20%;\\n  }\\n\\n  .row-cols-sm-6 > * {\\n    flex: 0 0 16.6666666667%;\\n    max-width: 16.6666666667%;\\n  }\\n\\n  .col-sm-auto {\\n    flex: 0 0 auto;\\n    width: auto;\\n    max-width: 100%;\\n  }\\n\\n  .col-sm-1 {\\n    flex: 0 0 8.3333333333%;\\n    max-width: 8.3333333333%;\\n  }\\n\\n  .col-sm-2 {\\n    flex: 0 0 16.6666666667%;\\n    max-width: 16.6666666667%;\\n  }\\n\\n  .col-sm-3 {\\n    flex: 0 0 25%;\\n    max-width: 25%;\\n  }\\n\\n  .col-sm-4 {\\n    flex: 0 0 33.3333333333%;\\n    max-width: 33.3333333333%;\\n  }\\n\\n  .col-sm-5 {\\n    flex: 0 0 41.6666666667%;\\n    max-width: 41.6666666667%;\\n  }\\n\\n  .col-sm-6 {\\n    flex: 0 0 50%;\\n    max-width: 50%;\\n  }\\n\\n  .col-sm-7 {\\n    flex: 0 0 58.3333333333%;\\n    max-width: 58.3333333333%;\\n  }\\n\\n  .col-sm-8 {\\n    flex: 0 0 66.6666666667%;\\n    max-width: 66.6666666667%;\\n  }\\n\\n  .col-sm-9 {\\n    flex: 0 0 75%;\\n    max-width: 75%;\\n  }\\n\\n  .col-sm-10 {\\n    flex: 0 0 83.3333333333%;\\n    max-width: 83.3333333333%;\\n  }\\n\\n  .col-sm-11 {\\n    flex: 0 0 91.6666666667%;\\n    max-width: 91.6666666667%;\\n  }\\n\\n  .col-sm-12 {\\n    flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n\\n  .order-sm-first {\\n    order: -1;\\n  }\\n\\n  .order-sm-last {\\n    order: 13;\\n  }\\n\\n  .order-sm-0 {\\n    order: 0;\\n  }\\n\\n  .order-sm-1 {\\n    order: 1;\\n  }\\n\\n  .order-sm-2 {\\n    order: 2;\\n  }\\n\\n  .order-sm-3 {\\n    order: 3;\\n  }\\n\\n  .order-sm-4 {\\n    order: 4;\\n  }\\n\\n  .order-sm-5 {\\n    order: 5;\\n  }\\n\\n  .order-sm-6 {\\n    order: 6;\\n  }\\n\\n  .order-sm-7 {\\n    order: 7;\\n  }\\n\\n  .order-sm-8 {\\n    order: 8;\\n  }\\n\\n  .order-sm-9 {\\n    order: 9;\\n  }\\n\\n  .order-sm-10 {\\n    order: 10;\\n  }\\n\\n  .order-sm-11 {\\n    order: 11;\\n  }\\n\\n  .order-sm-12 {\\n    order: 12;\\n  }\\n\\n  .offset-sm-0 {\\n    margin-left: 0;\\n  }\\n\\n  .offset-sm-1 {\\n    margin-left: 8.3333333333%;\\n  }\\n\\n  .offset-sm-2 {\\n    margin-left: 16.6666666667%;\\n  }\\n\\n  .offset-sm-3 {\\n    margin-left: 25%;\\n  }\\n\\n  .offset-sm-4 {\\n    margin-left: 33.3333333333%;\\n  }\\n\\n  .offset-sm-5 {\\n    margin-left: 41.6666666667%;\\n  }\\n\\n  .offset-sm-6 {\\n    margin-left: 50%;\\n  }\\n\\n  .offset-sm-7 {\\n    margin-left: 58.3333333333%;\\n  }\\n\\n  .offset-sm-8 {\\n    margin-left: 66.6666666667%;\\n  }\\n\\n  .offset-sm-9 {\\n    margin-left: 75%;\\n  }\\n\\n  .offset-sm-10 {\\n    margin-left: 83.3333333333%;\\n  }\\n\\n  .offset-sm-11 {\\n    margin-left: 91.6666666667%;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .col-md {\\n    flex-basis: 0;\\n    flex-grow: 1;\\n    max-width: 100%;\\n  }\\n\\n  .row-cols-md-1 > * {\\n    flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n\\n  .row-cols-md-2 > * {\\n    flex: 0 0 50%;\\n    max-width: 50%;\\n  }\\n\\n  .row-cols-md-3 > * {\\n    flex: 0 0 33.3333333333%;\\n    max-width: 33.3333333333%;\\n  }\\n\\n  .row-cols-md-4 > * {\\n    flex: 0 0 25%;\\n    max-width: 25%;\\n  }\\n\\n  .row-cols-md-5 > * {\\n    flex: 0 0 20%;\\n    max-width: 20%;\\n  }\\n\\n  .row-cols-md-6 > * {\\n    flex: 0 0 16.6666666667%;\\n    max-width: 16.6666666667%;\\n  }\\n\\n  .col-md-auto {\\n    flex: 0 0 auto;\\n    width: auto;\\n    max-width: 100%;\\n  }\\n\\n  .col-md-1 {\\n    flex: 0 0 8.3333333333%;\\n    max-width: 8.3333333333%;\\n  }\\n\\n  .col-md-2 {\\n    flex: 0 0 16.6666666667%;\\n    max-width: 16.6666666667%;\\n  }\\n\\n  .col-md-3 {\\n    flex: 0 0 25%;\\n    max-width: 25%;\\n  }\\n\\n  .col-md-4 {\\n    flex: 0 0 33.3333333333%;\\n    max-width: 33.3333333333%;\\n  }\\n\\n  .col-md-5 {\\n    flex: 0 0 41.6666666667%;\\n    max-width: 41.6666666667%;\\n  }\\n\\n  .col-md-6 {\\n    flex: 0 0 50%;\\n    max-width: 50%;\\n  }\\n\\n  .col-md-7 {\\n    flex: 0 0 58.3333333333%;\\n    max-width: 58.3333333333%;\\n  }\\n\\n  .col-md-8 {\\n    flex: 0 0 66.6666666667%;\\n    max-width: 66.6666666667%;\\n  }\\n\\n  .col-md-9 {\\n    flex: 0 0 75%;\\n    max-width: 75%;\\n  }\\n\\n  .col-md-10 {\\n    flex: 0 0 83.3333333333%;\\n    max-width: 83.3333333333%;\\n  }\\n\\n  .col-md-11 {\\n    flex: 0 0 91.6666666667%;\\n    max-width: 91.6666666667%;\\n  }\\n\\n  .col-md-12 {\\n    flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n\\n  .order-md-first {\\n    order: -1;\\n  }\\n\\n  .order-md-last {\\n    order: 13;\\n  }\\n\\n  .order-md-0 {\\n    order: 0;\\n  }\\n\\n  .order-md-1 {\\n    order: 1;\\n  }\\n\\n  .order-md-2 {\\n    order: 2;\\n  }\\n\\n  .order-md-3 {\\n    order: 3;\\n  }\\n\\n  .order-md-4 {\\n    order: 4;\\n  }\\n\\n  .order-md-5 {\\n    order: 5;\\n  }\\n\\n  .order-md-6 {\\n    order: 6;\\n  }\\n\\n  .order-md-7 {\\n    order: 7;\\n  }\\n\\n  .order-md-8 {\\n    order: 8;\\n  }\\n\\n  .order-md-9 {\\n    order: 9;\\n  }\\n\\n  .order-md-10 {\\n    order: 10;\\n  }\\n\\n  .order-md-11 {\\n    order: 11;\\n  }\\n\\n  .order-md-12 {\\n    order: 12;\\n  }\\n\\n  .offset-md-0 {\\n    margin-left: 0;\\n  }\\n\\n  .offset-md-1 {\\n    margin-left: 8.3333333333%;\\n  }\\n\\n  .offset-md-2 {\\n    margin-left: 16.6666666667%;\\n  }\\n\\n  .offset-md-3 {\\n    margin-left: 25%;\\n  }\\n\\n  .offset-md-4 {\\n    margin-left: 33.3333333333%;\\n  }\\n\\n  .offset-md-5 {\\n    margin-left: 41.6666666667%;\\n  }\\n\\n  .offset-md-6 {\\n    margin-left: 50%;\\n  }\\n\\n  .offset-md-7 {\\n    margin-left: 58.3333333333%;\\n  }\\n\\n  .offset-md-8 {\\n    margin-left: 66.6666666667%;\\n  }\\n\\n  .offset-md-9 {\\n    margin-left: 75%;\\n  }\\n\\n  .offset-md-10 {\\n    margin-left: 83.3333333333%;\\n  }\\n\\n  .offset-md-11 {\\n    margin-left: 91.6666666667%;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .col-lg {\\n    flex-basis: 0;\\n    flex-grow: 1;\\n    max-width: 100%;\\n  }\\n\\n  .row-cols-lg-1 > * {\\n    flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n\\n  .row-cols-lg-2 > * {\\n    flex: 0 0 50%;\\n    max-width: 50%;\\n  }\\n\\n  .row-cols-lg-3 > * {\\n    flex: 0 0 33.3333333333%;\\n    max-width: 33.3333333333%;\\n  }\\n\\n  .row-cols-lg-4 > * {\\n    flex: 0 0 25%;\\n    max-width: 25%;\\n  }\\n\\n  .row-cols-lg-5 > * {\\n    flex: 0 0 20%;\\n    max-width: 20%;\\n  }\\n\\n  .row-cols-lg-6 > * {\\n    flex: 0 0 16.6666666667%;\\n    max-width: 16.6666666667%;\\n  }\\n\\n  .col-lg-auto {\\n    flex: 0 0 auto;\\n    width: auto;\\n    max-width: 100%;\\n  }\\n\\n  .col-lg-1 {\\n    flex: 0 0 8.3333333333%;\\n    max-width: 8.3333333333%;\\n  }\\n\\n  .col-lg-2 {\\n    flex: 0 0 16.6666666667%;\\n    max-width: 16.6666666667%;\\n  }\\n\\n  .col-lg-3 {\\n    flex: 0 0 25%;\\n    max-width: 25%;\\n  }\\n\\n  .col-lg-4 {\\n    flex: 0 0 33.3333333333%;\\n    max-width: 33.3333333333%;\\n  }\\n\\n  .col-lg-5 {\\n    flex: 0 0 41.6666666667%;\\n    max-width: 41.6666666667%;\\n  }\\n\\n  .col-lg-6 {\\n    flex: 0 0 50%;\\n    max-width: 50%;\\n  }\\n\\n  .col-lg-7 {\\n    flex: 0 0 58.3333333333%;\\n    max-width: 58.3333333333%;\\n  }\\n\\n  .col-lg-8 {\\n    flex: 0 0 66.6666666667%;\\n    max-width: 66.6666666667%;\\n  }\\n\\n  .col-lg-9 {\\n    flex: 0 0 75%;\\n    max-width: 75%;\\n  }\\n\\n  .col-lg-10 {\\n    flex: 0 0 83.3333333333%;\\n    max-width: 83.3333333333%;\\n  }\\n\\n  .col-lg-11 {\\n    flex: 0 0 91.6666666667%;\\n    max-width: 91.6666666667%;\\n  }\\n\\n  .col-lg-12 {\\n    flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n\\n  .order-lg-first {\\n    order: -1;\\n  }\\n\\n  .order-lg-last {\\n    order: 13;\\n  }\\n\\n  .order-lg-0 {\\n    order: 0;\\n  }\\n\\n  .order-lg-1 {\\n    order: 1;\\n  }\\n\\n  .order-lg-2 {\\n    order: 2;\\n  }\\n\\n  .order-lg-3 {\\n    order: 3;\\n  }\\n\\n  .order-lg-4 {\\n    order: 4;\\n  }\\n\\n  .order-lg-5 {\\n    order: 5;\\n  }\\n\\n  .order-lg-6 {\\n    order: 6;\\n  }\\n\\n  .order-lg-7 {\\n    order: 7;\\n  }\\n\\n  .order-lg-8 {\\n    order: 8;\\n  }\\n\\n  .order-lg-9 {\\n    order: 9;\\n  }\\n\\n  .order-lg-10 {\\n    order: 10;\\n  }\\n\\n  .order-lg-11 {\\n    order: 11;\\n  }\\n\\n  .order-lg-12 {\\n    order: 12;\\n  }\\n\\n  .offset-lg-0 {\\n    margin-left: 0;\\n  }\\n\\n  .offset-lg-1 {\\n    margin-left: 8.3333333333%;\\n  }\\n\\n  .offset-lg-2 {\\n    margin-left: 16.6666666667%;\\n  }\\n\\n  .offset-lg-3 {\\n    margin-left: 25%;\\n  }\\n\\n  .offset-lg-4 {\\n    margin-left: 33.3333333333%;\\n  }\\n\\n  .offset-lg-5 {\\n    margin-left: 41.6666666667%;\\n  }\\n\\n  .offset-lg-6 {\\n    margin-left: 50%;\\n  }\\n\\n  .offset-lg-7 {\\n    margin-left: 58.3333333333%;\\n  }\\n\\n  .offset-lg-8 {\\n    margin-left: 66.6666666667%;\\n  }\\n\\n  .offset-lg-9 {\\n    margin-left: 75%;\\n  }\\n\\n  .offset-lg-10 {\\n    margin-left: 83.3333333333%;\\n  }\\n\\n  .offset-lg-11 {\\n    margin-left: 91.6666666667%;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .col-xl {\\n    flex-basis: 0;\\n    flex-grow: 1;\\n    max-width: 100%;\\n  }\\n\\n  .row-cols-xl-1 > * {\\n    flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n\\n  .row-cols-xl-2 > * {\\n    flex: 0 0 50%;\\n    max-width: 50%;\\n  }\\n\\n  .row-cols-xl-3 > * {\\n    flex: 0 0 33.3333333333%;\\n    max-width: 33.3333333333%;\\n  }\\n\\n  .row-cols-xl-4 > * {\\n    flex: 0 0 25%;\\n    max-width: 25%;\\n  }\\n\\n  .row-cols-xl-5 > * {\\n    flex: 0 0 20%;\\n    max-width: 20%;\\n  }\\n\\n  .row-cols-xl-6 > * {\\n    flex: 0 0 16.6666666667%;\\n    max-width: 16.6666666667%;\\n  }\\n\\n  .col-xl-auto {\\n    flex: 0 0 auto;\\n    width: auto;\\n    max-width: 100%;\\n  }\\n\\n  .col-xl-1 {\\n    flex: 0 0 8.3333333333%;\\n    max-width: 8.3333333333%;\\n  }\\n\\n  .col-xl-2 {\\n    flex: 0 0 16.6666666667%;\\n    max-width: 16.6666666667%;\\n  }\\n\\n  .col-xl-3 {\\n    flex: 0 0 25%;\\n    max-width: 25%;\\n  }\\n\\n  .col-xl-4 {\\n    flex: 0 0 33.3333333333%;\\n    max-width: 33.3333333333%;\\n  }\\n\\n  .col-xl-5 {\\n    flex: 0 0 41.6666666667%;\\n    max-width: 41.6666666667%;\\n  }\\n\\n  .col-xl-6 {\\n    flex: 0 0 50%;\\n    max-width: 50%;\\n  }\\n\\n  .col-xl-7 {\\n    flex: 0 0 58.3333333333%;\\n    max-width: 58.3333333333%;\\n  }\\n\\n  .col-xl-8 {\\n    flex: 0 0 66.6666666667%;\\n    max-width: 66.6666666667%;\\n  }\\n\\n  .col-xl-9 {\\n    flex: 0 0 75%;\\n    max-width: 75%;\\n  }\\n\\n  .col-xl-10 {\\n    flex: 0 0 83.3333333333%;\\n    max-width: 83.3333333333%;\\n  }\\n\\n  .col-xl-11 {\\n    flex: 0 0 91.6666666667%;\\n    max-width: 91.6666666667%;\\n  }\\n\\n  .col-xl-12 {\\n    flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n\\n  .order-xl-first {\\n    order: -1;\\n  }\\n\\n  .order-xl-last {\\n    order: 13;\\n  }\\n\\n  .order-xl-0 {\\n    order: 0;\\n  }\\n\\n  .order-xl-1 {\\n    order: 1;\\n  }\\n\\n  .order-xl-2 {\\n    order: 2;\\n  }\\n\\n  .order-xl-3 {\\n    order: 3;\\n  }\\n\\n  .order-xl-4 {\\n    order: 4;\\n  }\\n\\n  .order-xl-5 {\\n    order: 5;\\n  }\\n\\n  .order-xl-6 {\\n    order: 6;\\n  }\\n\\n  .order-xl-7 {\\n    order: 7;\\n  }\\n\\n  .order-xl-8 {\\n    order: 8;\\n  }\\n\\n  .order-xl-9 {\\n    order: 9;\\n  }\\n\\n  .order-xl-10 {\\n    order: 10;\\n  }\\n\\n  .order-xl-11 {\\n    order: 11;\\n  }\\n\\n  .order-xl-12 {\\n    order: 12;\\n  }\\n\\n  .offset-xl-0 {\\n    margin-left: 0;\\n  }\\n\\n  .offset-xl-1 {\\n    margin-left: 8.3333333333%;\\n  }\\n\\n  .offset-xl-2 {\\n    margin-left: 16.6666666667%;\\n  }\\n\\n  .offset-xl-3 {\\n    margin-left: 25%;\\n  }\\n\\n  .offset-xl-4 {\\n    margin-left: 33.3333333333%;\\n  }\\n\\n  .offset-xl-5 {\\n    margin-left: 41.6666666667%;\\n  }\\n\\n  .offset-xl-6 {\\n    margin-left: 50%;\\n  }\\n\\n  .offset-xl-7 {\\n    margin-left: 58.3333333333%;\\n  }\\n\\n  .offset-xl-8 {\\n    margin-left: 66.6666666667%;\\n  }\\n\\n  .offset-xl-9 {\\n    margin-left: 75%;\\n  }\\n\\n  .offset-xl-10 {\\n    margin-left: 83.3333333333%;\\n  }\\n\\n  .offset-xl-11 {\\n    margin-left: 91.6666666667%;\\n  }\\n}\\n.table {\\n  width: 100%;\\n  margin-bottom: 1rem;\\n  color: #212529;\\n}\\n.table th,\\n.table td {\\n  padding: 0.75rem;\\n  vertical-align: top;\\n  border-top: 1px solid #dee2e6;\\n}\\n.table thead th {\\n  vertical-align: bottom;\\n  border-bottom: 2px solid #dee2e6;\\n}\\n.table tbody + tbody {\\n  border-top: 2px solid #dee2e6;\\n}\\n\\n.table-sm th,\\n.table-sm td {\\n  padding: 0.3rem;\\n}\\n\\n.table-bordered {\\n  border: 1px solid #dee2e6;\\n}\\n.table-bordered th,\\n.table-bordered td {\\n  border: 1px solid #dee2e6;\\n}\\n.table-bordered thead th,\\n.table-bordered thead td {\\n  border-bottom-width: 2px;\\n}\\n\\n.table-borderless th,\\n.table-borderless td,\\n.table-borderless thead th,\\n.table-borderless tbody + tbody {\\n  border: 0;\\n}\\n\\n.table-striped tbody tr:nth-of-type(odd) {\\n  background-color: rgba(0, 0, 0, 0.05);\\n}\\n\\n.table-hover tbody tr:hover {\\n  color: #212529;\\n  background-color: rgba(0, 0, 0, 0.075);\\n}\\n\\n.table-primary,\\n.table-primary > th,\\n.table-primary > td {\\n  background-color: #c8c6c6;\\n}\\n.table-primary th,\\n.table-primary td,\\n.table-primary thead th,\\n.table-primary tbody + tbody {\\n  border-color: #999596;\\n}\\n\\n.table-hover .table-primary:hover {\\n  background-color: #bbb9b9;\\n}\\n.table-hover .table-primary:hover > td,\\n.table-hover .table-primary:hover > th {\\n  background-color: #bbb9b9;\\n}\\n\\n.table-secondary,\\n.table-secondary > th,\\n.table-secondary > td {\\n  background-color: #d7d8d5;\\n}\\n.table-secondary th,\\n.table-secondary td,\\n.table-secondary thead th,\\n.table-secondary tbody + tbody {\\n  border-color: #b5b7b0;\\n}\\n\\n.table-hover .table-secondary:hover {\\n  background-color: #caccc8;\\n}\\n.table-hover .table-secondary:hover > td,\\n.table-hover .table-secondary:hover > th {\\n  background-color: #caccc8;\\n}\\n\\n.table-success,\\n.table-success > th,\\n.table-success > td {\\n  background-color: #caf4f0;\\n}\\n.table-success th,\\n.table-success td,\\n.table-success thead th,\\n.table-success tbody + tbody {\\n  border-color: #9debe2;\\n}\\n\\n.table-hover .table-success:hover {\\n  background-color: #b5f0ea;\\n}\\n.table-hover .table-success:hover > td,\\n.table-hover .table-success:hover > th {\\n  background-color: #b5f0ea;\\n}\\n\\n.table-info,\\n.table-info > th,\\n.table-info > td {\\n  background-color: #ecf0e7;\\n}\\n.table-info th,\\n.table-info td,\\n.table-info thead th,\\n.table-info tbody + tbody {\\n  border-color: #dbe4d2;\\n}\\n\\n.table-hover .table-info:hover {\\n  background-color: #e0e6d7;\\n}\\n.table-hover .table-info:hover > td,\\n.table-hover .table-info:hover > th {\\n  background-color: #e0e6d7;\\n}\\n\\n.table-warning,\\n.table-warning > th,\\n.table-warning > td {\\n  background-color: #fbede2;\\n}\\n.table-warning th,\\n.table-warning td,\\n.table-warning thead th,\\n.table-warning tbody + tbody {\\n  border-color: #f8dec9;\\n}\\n\\n.table-hover .table-warning:hover {\\n  background-color: #f8dfcc;\\n}\\n.table-hover .table-warning:hover > td,\\n.table-hover .table-warning:hover > th {\\n  background-color: #f8dfcc;\\n}\\n\\n.table-danger,\\n.table-danger > th,\\n.table-danger > td {\\n  background-color: #f4c0d1;\\n}\\n.table-danger th,\\n.table-danger td,\\n.table-danger thead th,\\n.table-danger tbody + tbody {\\n  border-color: #eb8aaa;\\n}\\n\\n.table-hover .table-danger:hover {\\n  background-color: #f0aac1;\\n}\\n.table-hover .table-danger:hover > td,\\n.table-hover .table-danger:hover > th {\\n  background-color: #f0aac1;\\n}\\n\\n.table-light,\\n.table-light > th,\\n.table-light > td {\\n  background-color: #fdfdfe;\\n}\\n.table-light th,\\n.table-light td,\\n.table-light thead th,\\n.table-light tbody + tbody {\\n  border-color: #fbfcfc;\\n}\\n\\n.table-hover .table-light:hover {\\n  background-color: #ececf6;\\n}\\n.table-hover .table-light:hover > td,\\n.table-hover .table-light:hover > th {\\n  background-color: #ececf6;\\n}\\n\\n.table-dark,\\n.table-dark > th,\\n.table-dark > td {\\n  background-color: #c6c8ca;\\n}\\n.table-dark th,\\n.table-dark td,\\n.table-dark thead th,\\n.table-dark tbody + tbody {\\n  border-color: #95999c;\\n}\\n\\n.table-hover .table-dark:hover {\\n  background-color: #b9bbbe;\\n}\\n.table-hover .table-dark:hover > td,\\n.table-hover .table-dark:hover > th {\\n  background-color: #b9bbbe;\\n}\\n\\n.table-active,\\n.table-active > th,\\n.table-active > td {\\n  background-color: rgba(0, 0, 0, 0.075);\\n}\\n\\n.table-hover .table-active:hover {\\n  background-color: rgba(0, 0, 0, 0.075);\\n}\\n.table-hover .table-active:hover > td,\\n.table-hover .table-active:hover > th {\\n  background-color: rgba(0, 0, 0, 0.075);\\n}\\n\\n.table .thead-dark th {\\n  color: #fff;\\n  background-color: #343a40;\\n  border-color: #454d55;\\n}\\n.table .thead-light th {\\n  color: #495057;\\n  background-color: #e9ecef;\\n  border-color: #dee2e6;\\n}\\n\\n.table-dark {\\n  color: #fff;\\n  background-color: #343a40;\\n}\\n.table-dark th,\\n.table-dark td,\\n.table-dark thead th {\\n  border-color: #454d55;\\n}\\n.table-dark.table-bordered {\\n  border: 0;\\n}\\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\\n  background-color: rgba(255, 255, 255, 0.05);\\n}\\n.table-dark.table-hover tbody tr:hover {\\n  color: #fff;\\n  background-color: rgba(255, 255, 255, 0.075);\\n}\\n\\n@media (max-width: 575.98px) {\\n  .table-responsive-sm {\\n    display: block;\\n    width: 100%;\\n    overflow-x: auto;\\n    -webkit-overflow-scrolling: touch;\\n  }\\n  .table-responsive-sm > .table-bordered {\\n    border: 0;\\n  }\\n}\\n@media (max-width: 767.98px) {\\n  .table-responsive-md {\\n    display: block;\\n    width: 100%;\\n    overflow-x: auto;\\n    -webkit-overflow-scrolling: touch;\\n  }\\n  .table-responsive-md > .table-bordered {\\n    border: 0;\\n  }\\n}\\n@media (max-width: 991.98px) {\\n  .table-responsive-lg {\\n    display: block;\\n    width: 100%;\\n    overflow-x: auto;\\n    -webkit-overflow-scrolling: touch;\\n  }\\n  .table-responsive-lg > .table-bordered {\\n    border: 0;\\n  }\\n}\\n@media (max-width: 1199.98px) {\\n  .table-responsive-xl {\\n    display: block;\\n    width: 100%;\\n    overflow-x: auto;\\n    -webkit-overflow-scrolling: touch;\\n  }\\n  .table-responsive-xl > .table-bordered {\\n    border: 0;\\n  }\\n}\\n.table-responsive {\\n  display: block;\\n  width: 100%;\\n  overflow-x: auto;\\n  -webkit-overflow-scrolling: touch;\\n}\\n.table-responsive > .table-bordered {\\n  border: 0;\\n}\\n\\n.form-control {\\n  display: block;\\n  width: 100%;\\n  height: calc(1.5em + 0.75rem + 2px);\\n  padding: 0.375rem 0.75rem;\\n  font-size: 1rem;\\n  font-weight: 400;\\n  line-height: 1.5;\\n  color: #495057;\\n  background-color: #fff;\\n  background-clip: padding-box;\\n  border: 1px solid #ced4da;\\n  border-radius: 0.25rem;\\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .form-control {\\n    transition: none;\\n  }\\n}\\n.form-control::-ms-expand {\\n  background-color: transparent;\\n  border: 0;\\n}\\n.form-control:-moz-focusring {\\n  color: transparent;\\n  text-shadow: 0 0 0 #495057;\\n}\\n.form-control:focus {\\n  color: #495057;\\n  background-color: #fff;\\n  border-color: #7e6f73;\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(58, 51, 53, 0.25);\\n}\\n.form-control::-moz-placeholder {\\n  color: #6c757d;\\n  opacity: 1;\\n}\\n.form-control:-ms-input-placeholder {\\n  color: #6c757d;\\n  opacity: 1;\\n}\\n.form-control::placeholder {\\n  color: #6c757d;\\n  opacity: 1;\\n}\\n.form-control:disabled, .form-control[readonly] {\\n  background-color: #e9ecef;\\n  opacity: 1;\\n}\\n\\ninput[type=date].form-control,\\ninput[type=time].form-control,\\ninput[type=datetime-local].form-control,\\ninput[type=month].form-control {\\n  -webkit-appearance: none;\\n     -moz-appearance: none;\\n          appearance: none;\\n}\\n\\nselect.form-control:focus::-ms-value {\\n  color: #495057;\\n  background-color: #fff;\\n}\\n\\n.form-control-file,\\n.form-control-range {\\n  display: block;\\n  width: 100%;\\n}\\n\\n.col-form-label {\\n  padding-top: calc(0.375rem + 1px);\\n  padding-bottom: calc(0.375rem + 1px);\\n  margin-bottom: 0;\\n  font-size: inherit;\\n  line-height: 1.5;\\n}\\n\\n.col-form-label-lg {\\n  padding-top: calc(0.5rem + 1px);\\n  padding-bottom: calc(0.5rem + 1px);\\n  font-size: 1.25rem;\\n  line-height: 1.5;\\n}\\n\\n.col-form-label-sm {\\n  padding-top: calc(0.25rem + 1px);\\n  padding-bottom: calc(0.25rem + 1px);\\n  font-size: 0.875rem;\\n  line-height: 1.5;\\n}\\n\\n.form-control-plaintext {\\n  display: block;\\n  width: 100%;\\n  padding: 0.375rem 0;\\n  margin-bottom: 0;\\n  font-size: 1rem;\\n  line-height: 1.5;\\n  color: #212529;\\n  background-color: transparent;\\n  border: solid transparent;\\n  border-width: 1px 0;\\n}\\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\\n  padding-right: 0;\\n  padding-left: 0;\\n}\\n\\n.form-control-sm {\\n  height: calc(1.5em + 0.5rem + 2px);\\n  padding: 0.25rem 0.5rem;\\n  font-size: 0.875rem;\\n  line-height: 1.5;\\n  border-radius: 0.2rem;\\n}\\n\\n.form-control-lg {\\n  height: calc(1.5em + 1rem + 2px);\\n  padding: 0.5rem 1rem;\\n  font-size: 1.25rem;\\n  line-height: 1.5;\\n  border-radius: 0.3rem;\\n}\\n\\nselect.form-control[size], select.form-control[multiple] {\\n  height: auto;\\n}\\n\\ntextarea.form-control {\\n  height: auto;\\n}\\n\\n.form-group {\\n  margin-bottom: 1rem;\\n}\\n\\n.form-text {\\n  display: block;\\n  margin-top: 0.25rem;\\n}\\n\\n.form-row {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin-right: -5px;\\n  margin-left: -5px;\\n}\\n.form-row > .col,\\n.form-row > [class*=col-] {\\n  padding-right: 5px;\\n  padding-left: 5px;\\n}\\n\\n.form-check {\\n  position: relative;\\n  display: block;\\n  padding-left: 1.25rem;\\n}\\n\\n.form-check-input {\\n  position: absolute;\\n  margin-top: 0.3rem;\\n  margin-left: -1.25rem;\\n}\\n.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\\n  color: #6c757d;\\n}\\n\\n.form-check-label {\\n  margin-bottom: 0;\\n}\\n\\n.form-check-inline {\\n  display: inline-flex;\\n  align-items: center;\\n  padding-left: 0;\\n  margin-right: 0.75rem;\\n}\\n.form-check-inline .form-check-input {\\n  position: static;\\n  margin-top: 0;\\n  margin-right: 0.3125rem;\\n  margin-left: 0;\\n}\\n\\n.valid-feedback {\\n  display: none;\\n  width: 100%;\\n  margin-top: 0.25rem;\\n  font-size: 80%;\\n  color: #42D9C8;\\n}\\n\\n.valid-tooltip {\\n  position: absolute;\\n  top: 100%;\\n  left: 0;\\n  z-index: 5;\\n  display: none;\\n  max-width: 100%;\\n  padding: 0.25rem 0.5rem;\\n  margin-top: 0.1rem;\\n  font-size: 0.875rem;\\n  line-height: 1.5;\\n  color: #212529;\\n  background-color: rgba(66, 217, 200, 0.9);\\n  border-radius: 0.25rem;\\n}\\n\\n.was-validated :valid ~ .valid-feedback,\\n.was-validated :valid ~ .valid-tooltip,\\n.is-valid ~ .valid-feedback,\\n.is-valid ~ .valid-tooltip {\\n  display: block;\\n}\\n\\n.was-validated .form-control:valid, .form-control.is-valid {\\n  border-color: #42D9C8;\\n  padding-right: calc(1.5em + 0.75rem);\\n  background-image: url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2342D9C8' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\\\");\\n  background-repeat: no-repeat;\\n  background-position: right calc(0.375em + 0.1875rem) center;\\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\\n}\\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\\n  border-color: #42D9C8;\\n  box-shadow: 0 0 0 0.2rem rgba(66, 217, 200, 0.25);\\n}\\n\\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\\n  padding-right: calc(1.5em + 0.75rem);\\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\\n}\\n\\n.was-validated .custom-select:valid, .custom-select.is-valid {\\n  border-color: #42D9C8;\\n  padding-right: calc(0.75em + 2.3125rem);\\n  background: url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\\\") no-repeat right 0.75rem center/8px 10px, url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2342D9C8' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\\\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\\n}\\n.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\\n  border-color: #42D9C8;\\n  box-shadow: 0 0 0 0.2rem rgba(66, 217, 200, 0.25);\\n}\\n\\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\\n  color: #42D9C8;\\n}\\n.was-validated .form-check-input:valid ~ .valid-feedback,\\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\\n.form-check-input.is-valid ~ .valid-tooltip {\\n  display: block;\\n}\\n\\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\\n  color: #42D9C8;\\n}\\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\\n  border-color: #42D9C8;\\n}\\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\\n  border-color: #6ce2d4;\\n  background-color: #6ce2d4;\\n}\\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\\n  box-shadow: 0 0 0 0.2rem rgba(66, 217, 200, 0.25);\\n}\\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\\n  border-color: #42D9C8;\\n}\\n\\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\\n  border-color: #42D9C8;\\n}\\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\\n  border-color: #42D9C8;\\n  box-shadow: 0 0 0 0.2rem rgba(66, 217, 200, 0.25);\\n}\\n\\n.invalid-feedback {\\n  display: none;\\n  width: 100%;\\n  margin-top: 0.25rem;\\n  font-size: 80%;\\n  color: #D81E5B;\\n}\\n\\n.invalid-tooltip {\\n  position: absolute;\\n  top: 100%;\\n  left: 0;\\n  z-index: 5;\\n  display: none;\\n  max-width: 100%;\\n  padding: 0.25rem 0.5rem;\\n  margin-top: 0.1rem;\\n  font-size: 0.875rem;\\n  line-height: 1.5;\\n  color: #fff;\\n  background-color: rgba(216, 30, 91, 0.9);\\n  border-radius: 0.25rem;\\n}\\n\\n.was-validated :invalid ~ .invalid-feedback,\\n.was-validated :invalid ~ .invalid-tooltip,\\n.is-invalid ~ .invalid-feedback,\\n.is-invalid ~ .invalid-tooltip {\\n  display: block;\\n}\\n\\n.was-validated .form-control:invalid, .form-control.is-invalid {\\n  border-color: #D81E5B;\\n  padding-right: calc(1.5em + 0.75rem);\\n  background-image: url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23D81E5B' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23D81E5B' stroke='none'/%3e%3c/svg%3e\\\");\\n  background-repeat: no-repeat;\\n  background-position: right calc(0.375em + 0.1875rem) center;\\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\\n}\\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\\n  border-color: #D81E5B;\\n  box-shadow: 0 0 0 0.2rem rgba(216, 30, 91, 0.25);\\n}\\n\\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\\n  padding-right: calc(1.5em + 0.75rem);\\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\\n}\\n\\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\\n  border-color: #D81E5B;\\n  padding-right: calc(0.75em + 2.3125rem);\\n  background: url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\\\") no-repeat right 0.75rem center/8px 10px, url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23D81E5B' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23D81E5B' stroke='none'/%3e%3c/svg%3e\\\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\\n}\\n.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\\n  border-color: #D81E5B;\\n  box-shadow: 0 0 0 0.2rem rgba(216, 30, 91, 0.25);\\n}\\n\\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\\n  color: #D81E5B;\\n}\\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\\n.form-check-input.is-invalid ~ .invalid-tooltip {\\n  display: block;\\n}\\n\\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\\n  color: #D81E5B;\\n}\\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\\n  border-color: #D81E5B;\\n}\\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\\n  border-color: #e54479;\\n  background-color: #e54479;\\n}\\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\\n  box-shadow: 0 0 0 0.2rem rgba(216, 30, 91, 0.25);\\n}\\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\\n  border-color: #D81E5B;\\n}\\n\\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\\n  border-color: #D81E5B;\\n}\\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\\n  border-color: #D81E5B;\\n  box-shadow: 0 0 0 0.2rem rgba(216, 30, 91, 0.25);\\n}\\n\\n.form-inline {\\n  display: flex;\\n  flex-flow: row wrap;\\n  align-items: center;\\n}\\n.form-inline .form-check {\\n  width: 100%;\\n}\\n@media (min-width: 576px) {\\n  .form-inline label {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin-bottom: 0;\\n  }\\n  .form-inline .form-group {\\n    display: flex;\\n    flex: 0 0 auto;\\n    flex-flow: row wrap;\\n    align-items: center;\\n    margin-bottom: 0;\\n  }\\n  .form-inline .form-control {\\n    display: inline-block;\\n    width: auto;\\n    vertical-align: middle;\\n  }\\n  .form-inline .form-control-plaintext {\\n    display: inline-block;\\n  }\\n  .form-inline .input-group,\\n.form-inline .custom-select {\\n    width: auto;\\n  }\\n  .form-inline .form-check {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    width: auto;\\n    padding-left: 0;\\n  }\\n  .form-inline .form-check-input {\\n    position: relative;\\n    flex-shrink: 0;\\n    margin-top: 0;\\n    margin-right: 0.25rem;\\n    margin-left: 0;\\n  }\\n  .form-inline .custom-control {\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  .form-inline .custom-control-label {\\n    margin-bottom: 0;\\n  }\\n}\\n\\n.btn {\\n  display: inline-block;\\n  font-weight: 400;\\n  color: #212529;\\n  text-align: center;\\n  vertical-align: middle;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n  background-color: transparent;\\n  border: 1px solid transparent;\\n  padding: 0.375rem 0.75rem;\\n  font-size: 1rem;\\n  line-height: 1.5;\\n  border-radius: 0.25rem;\\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .btn {\\n    transition: none;\\n  }\\n}\\n.btn:hover {\\n  color: #212529;\\n  text-decoration: none;\\n}\\n.btn:focus, .btn.focus {\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(58, 51, 53, 0.25);\\n}\\n.btn.disabled, .btn:disabled {\\n  opacity: 0.65;\\n}\\n.btn:not(:disabled):not(.disabled) {\\n  cursor: pointer;\\n}\\na.btn.disabled,\\nfieldset:disabled a.btn {\\n  pointer-events: none;\\n}\\n\\n.btn-primary {\\n  color: #fff;\\n  background-color: #3A3335;\\n  border-color: #3A3335;\\n}\\n.btn-primary:hover {\\n  color: #fff;\\n  background-color: #262122;\\n  border-color: #1f1b1c;\\n}\\n.btn-primary:focus, .btn-primary.focus {\\n  color: #fff;\\n  background-color: #262122;\\n  border-color: #1f1b1c;\\n  box-shadow: 0 0 0 0.2rem rgba(88, 82, 83, 0.5);\\n}\\n.btn-primary.disabled, .btn-primary:disabled {\\n  color: #fff;\\n  background-color: #3A3335;\\n  border-color: #3A3335;\\n}\\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\\n  color: #fff;\\n  background-color: #1f1b1c;\\n  border-color: #181516;\\n}\\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(88, 82, 83, 0.5);\\n}\\n\\n.btn-secondary {\\n  color: #fff;\\n  background-color: #717568;\\n  border-color: #717568;\\n}\\n.btn-secondary:hover {\\n  color: #fff;\\n  background-color: #5d6156;\\n  border-color: #575a50;\\n}\\n.btn-secondary:focus, .btn-secondary.focus {\\n  color: #fff;\\n  background-color: #5d6156;\\n  border-color: #575a50;\\n  box-shadow: 0 0 0 0.2rem rgba(134, 138, 127, 0.5);\\n}\\n.btn-secondary.disabled, .btn-secondary:disabled {\\n  color: #fff;\\n  background-color: #717568;\\n  border-color: #717568;\\n}\\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {\\n  color: #fff;\\n  background-color: #575a50;\\n  border-color: #50534a;\\n}\\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(134, 138, 127, 0.5);\\n}\\n\\n.btn-success {\\n  color: #212529;\\n  background-color: #42D9C8;\\n  border-color: #42D9C8;\\n}\\n.btn-success:hover {\\n  color: #212529;\\n  background-color: #29ccb9;\\n  border-color: #27c1b0;\\n}\\n.btn-success:focus, .btn-success.focus {\\n  color: #212529;\\n  background-color: #29ccb9;\\n  border-color: #27c1b0;\\n  box-shadow: 0 0 0 0.2rem rgba(61, 190, 176, 0.5);\\n}\\n.btn-success.disabled, .btn-success:disabled {\\n  color: #212529;\\n  background-color: #42D9C8;\\n  border-color: #42D9C8;\\n}\\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show > .btn-success.dropdown-toggle {\\n  color: #fff;\\n  background-color: #27c1b0;\\n  border-color: #25b7a6;\\n}\\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(61, 190, 176, 0.5);\\n}\\n\\n.btn-info {\\n  color: #212529;\\n  background-color: #BACBA9;\\n  border-color: #BACBA9;\\n}\\n.btn-info:hover {\\n  color: #212529;\\n  background-color: #a7bd91;\\n  border-color: #a1b889;\\n}\\n.btn-info:focus, .btn-info.focus {\\n  color: #212529;\\n  background-color: #a7bd91;\\n  border-color: #a1b889;\\n  box-shadow: 0 0 0 0.2rem rgba(163, 178, 150, 0.5);\\n}\\n.btn-info.disabled, .btn-info:disabled {\\n  color: #212529;\\n  background-color: #BACBA9;\\n  border-color: #BACBA9;\\n}\\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {\\n  color: #212529;\\n  background-color: #a1b889;\\n  border-color: #9ab381;\\n}\\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(163, 178, 150, 0.5);\\n}\\n\\n.btn-warning {\\n  color: #212529;\\n  background-color: #F1BF98;\\n  border-color: #F1BF98;\\n}\\n.btn-warning:hover {\\n  color: #212529;\\n  background-color: #ecaa76;\\n  border-color: #eba36b;\\n}\\n.btn-warning:focus, .btn-warning.focus {\\n  color: #212529;\\n  background-color: #ecaa76;\\n  border-color: #eba36b;\\n  box-shadow: 0 0 0 0.2rem rgba(210, 168, 135, 0.5);\\n}\\n.btn-warning.disabled, .btn-warning:disabled {\\n  color: #212529;\\n  background-color: #F1BF98;\\n  border-color: #F1BF98;\\n}\\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active, .show > .btn-warning.dropdown-toggle {\\n  color: #212529;\\n  background-color: #eba36b;\\n  border-color: #e99c60;\\n}\\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(210, 168, 135, 0.5);\\n}\\n\\n.btn-danger {\\n  color: #fff;\\n  background-color: #D81E5B;\\n  border-color: #D81E5B;\\n}\\n.btn-danger:hover {\\n  color: #fff;\\n  background-color: #b6194d;\\n  border-color: #ab1848;\\n}\\n.btn-danger:focus, .btn-danger.focus {\\n  color: #fff;\\n  background-color: #b6194d;\\n  border-color: #ab1848;\\n  box-shadow: 0 0 0 0.2rem rgba(222, 64, 116, 0.5);\\n}\\n.btn-danger.disabled, .btn-danger:disabled {\\n  color: #fff;\\n  background-color: #D81E5B;\\n  border-color: #D81E5B;\\n}\\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active, .show > .btn-danger.dropdown-toggle {\\n  color: #fff;\\n  background-color: #ab1848;\\n  border-color: #a01643;\\n}\\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(222, 64, 116, 0.5);\\n}\\n\\n.btn-light {\\n  color: #212529;\\n  background-color: #f8f9fa;\\n  border-color: #f8f9fa;\\n}\\n.btn-light:hover {\\n  color: #212529;\\n  background-color: #e2e6ea;\\n  border-color: #dae0e5;\\n}\\n.btn-light:focus, .btn-light.focus {\\n  color: #212529;\\n  background-color: #e2e6ea;\\n  border-color: #dae0e5;\\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\\n}\\n.btn-light.disabled, .btn-light:disabled {\\n  color: #212529;\\n  background-color: #f8f9fa;\\n  border-color: #f8f9fa;\\n}\\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle {\\n  color: #212529;\\n  background-color: #dae0e5;\\n  border-color: #d3d9df;\\n}\\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\\n}\\n\\n.btn-dark {\\n  color: #fff;\\n  background-color: #343a40;\\n  border-color: #343a40;\\n}\\n.btn-dark:hover {\\n  color: #fff;\\n  background-color: #23272b;\\n  border-color: #1d2124;\\n}\\n.btn-dark:focus, .btn-dark.focus {\\n  color: #fff;\\n  background-color: #23272b;\\n  border-color: #1d2124;\\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\\n}\\n.btn-dark.disabled, .btn-dark:disabled {\\n  color: #fff;\\n  background-color: #343a40;\\n  border-color: #343a40;\\n}\\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active, .show > .btn-dark.dropdown-toggle {\\n  color: #fff;\\n  background-color: #1d2124;\\n  border-color: #171a1d;\\n}\\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\\n}\\n\\n.btn-outline-primary {\\n  color: #3A3335;\\n  border-color: #3A3335;\\n}\\n.btn-outline-primary:hover {\\n  color: #fff;\\n  background-color: #3A3335;\\n  border-color: #3A3335;\\n}\\n.btn-outline-primary:focus, .btn-outline-primary.focus {\\n  box-shadow: 0 0 0 0.2rem rgba(58, 51, 53, 0.5);\\n}\\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\\n  color: #3A3335;\\n  background-color: transparent;\\n}\\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {\\n  color: #fff;\\n  background-color: #3A3335;\\n  border-color: #3A3335;\\n}\\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(58, 51, 53, 0.5);\\n}\\n\\n.btn-outline-secondary {\\n  color: #717568;\\n  border-color: #717568;\\n}\\n.btn-outline-secondary:hover {\\n  color: #fff;\\n  background-color: #717568;\\n  border-color: #717568;\\n}\\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\\n  box-shadow: 0 0 0 0.2rem rgba(113, 117, 104, 0.5);\\n}\\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\\n  color: #717568;\\n  background-color: transparent;\\n}\\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle {\\n  color: #fff;\\n  background-color: #717568;\\n  border-color: #717568;\\n}\\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(113, 117, 104, 0.5);\\n}\\n\\n.btn-outline-success {\\n  color: #42D9C8;\\n  border-color: #42D9C8;\\n}\\n.btn-outline-success:hover {\\n  color: #212529;\\n  background-color: #42D9C8;\\n  border-color: #42D9C8;\\n}\\n.btn-outline-success:focus, .btn-outline-success.focus {\\n  box-shadow: 0 0 0 0.2rem rgba(66, 217, 200, 0.5);\\n}\\n.btn-outline-success.disabled, .btn-outline-success:disabled {\\n  color: #42D9C8;\\n  background-color: transparent;\\n}\\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle {\\n  color: #212529;\\n  background-color: #42D9C8;\\n  border-color: #42D9C8;\\n}\\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(66, 217, 200, 0.5);\\n}\\n\\n.btn-outline-info {\\n  color: #BACBA9;\\n  border-color: #BACBA9;\\n}\\n.btn-outline-info:hover {\\n  color: #212529;\\n  background-color: #BACBA9;\\n  border-color: #BACBA9;\\n}\\n.btn-outline-info:focus, .btn-outline-info.focus {\\n  box-shadow: 0 0 0 0.2rem rgba(186, 203, 169, 0.5);\\n}\\n.btn-outline-info.disabled, .btn-outline-info:disabled {\\n  color: #BACBA9;\\n  background-color: transparent;\\n}\\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {\\n  color: #212529;\\n  background-color: #BACBA9;\\n  border-color: #BACBA9;\\n}\\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-info.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(186, 203, 169, 0.5);\\n}\\n\\n.btn-outline-warning {\\n  color: #F1BF98;\\n  border-color: #F1BF98;\\n}\\n.btn-outline-warning:hover {\\n  color: #212529;\\n  background-color: #F1BF98;\\n  border-color: #F1BF98;\\n}\\n.btn-outline-warning:focus, .btn-outline-warning.focus {\\n  box-shadow: 0 0 0 0.2rem rgba(241, 191, 152, 0.5);\\n}\\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\\n  color: #F1BF98;\\n  background-color: transparent;\\n}\\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle {\\n  color: #212529;\\n  background-color: #F1BF98;\\n  border-color: #F1BF98;\\n}\\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(241, 191, 152, 0.5);\\n}\\n\\n.btn-outline-danger {\\n  color: #D81E5B;\\n  border-color: #D81E5B;\\n}\\n.btn-outline-danger:hover {\\n  color: #fff;\\n  background-color: #D81E5B;\\n  border-color: #D81E5B;\\n}\\n.btn-outline-danger:focus, .btn-outline-danger.focus {\\n  box-shadow: 0 0 0 0.2rem rgba(216, 30, 91, 0.5);\\n}\\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\\n  color: #D81E5B;\\n  background-color: transparent;\\n}\\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {\\n  color: #fff;\\n  background-color: #D81E5B;\\n  border-color: #D81E5B;\\n}\\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-danger.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(216, 30, 91, 0.5);\\n}\\n\\n.btn-outline-light {\\n  color: #f8f9fa;\\n  border-color: #f8f9fa;\\n}\\n.btn-outline-light:hover {\\n  color: #212529;\\n  background-color: #f8f9fa;\\n  border-color: #f8f9fa;\\n}\\n.btn-outline-light:focus, .btn-outline-light.focus {\\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\\n}\\n.btn-outline-light.disabled, .btn-outline-light:disabled {\\n  color: #f8f9fa;\\n  background-color: transparent;\\n}\\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle {\\n  color: #212529;\\n  background-color: #f8f9fa;\\n  border-color: #f8f9fa;\\n}\\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-light.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\\n}\\n\\n.btn-outline-dark {\\n  color: #343a40;\\n  border-color: #343a40;\\n}\\n.btn-outline-dark:hover {\\n  color: #fff;\\n  background-color: #343a40;\\n  border-color: #343a40;\\n}\\n.btn-outline-dark:focus, .btn-outline-dark.focus {\\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\\n}\\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\\n  color: #343a40;\\n  background-color: transparent;\\n}\\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle {\\n  color: #fff;\\n  background-color: #343a40;\\n  border-color: #343a40;\\n}\\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-dark.dropdown-toggle:focus {\\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\\n}\\n\\n.btn-link {\\n  font-weight: 400;\\n  color: #3A3335;\\n  text-decoration: none;\\n}\\n.btn-link:hover {\\n  color: #110f10;\\n  text-decoration: underline;\\n}\\n.btn-link:focus, .btn-link.focus {\\n  text-decoration: underline;\\n}\\n.btn-link:disabled, .btn-link.disabled {\\n  color: #6c757d;\\n  pointer-events: none;\\n}\\n\\n.btn-lg, .btn-group-lg > .btn {\\n  padding: 0.5rem 1rem;\\n  font-size: 1.25rem;\\n  line-height: 1.5;\\n  border-radius: 0.3rem;\\n}\\n\\n.btn-sm, .btn-group-sm > .btn {\\n  padding: 0.25rem 0.5rem;\\n  font-size: 0.875rem;\\n  line-height: 1.5;\\n  border-radius: 0.2rem;\\n}\\n\\n.btn-block {\\n  display: block;\\n  width: 100%;\\n}\\n.btn-block + .btn-block {\\n  margin-top: 0.5rem;\\n}\\n\\ninput[type=submit].btn-block,\\ninput[type=reset].btn-block,\\ninput[type=button].btn-block {\\n  width: 100%;\\n}\\n\\n.fade {\\n  transition: opacity 0.15s linear;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .fade {\\n    transition: none;\\n  }\\n}\\n.fade:not(.show) {\\n  opacity: 0;\\n}\\n\\n.collapse:not(.show) {\\n  display: none;\\n}\\n\\n.collapsing {\\n  position: relative;\\n  height: 0;\\n  overflow: hidden;\\n  transition: height 0.35s ease;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .collapsing {\\n    transition: none;\\n  }\\n}\\n\\n.dropup,\\n.dropright,\\n.dropdown,\\n.dropleft {\\n  position: relative;\\n}\\n\\n.dropdown-toggle {\\n  white-space: nowrap;\\n}\\n.dropdown-toggle::after {\\n  display: inline-block;\\n  margin-left: 0.255em;\\n  vertical-align: 0.255em;\\n  content: \\\"\\\";\\n  border-top: 0.3em solid;\\n  border-right: 0.3em solid transparent;\\n  border-bottom: 0;\\n  border-left: 0.3em solid transparent;\\n}\\n.dropdown-toggle:empty::after {\\n  margin-left: 0;\\n}\\n\\n.dropdown-menu {\\n  position: absolute;\\n  top: 100%;\\n  left: 0;\\n  z-index: 1000;\\n  display: none;\\n  float: left;\\n  min-width: 10rem;\\n  padding: 0.5rem 0;\\n  margin: 0.125rem 0 0;\\n  font-size: 1rem;\\n  color: #212529;\\n  text-align: left;\\n  list-style: none;\\n  background-color: #fff;\\n  background-clip: padding-box;\\n  border: 1px solid rgba(0, 0, 0, 0.15);\\n  border-radius: 0.25rem;\\n}\\n\\n.dropdown-menu-left {\\n  right: auto;\\n  left: 0;\\n}\\n\\n.dropdown-menu-right {\\n  right: 0;\\n  left: auto;\\n}\\n\\n@media (min-width: 576px) {\\n  .dropdown-menu-sm-left {\\n    right: auto;\\n    left: 0;\\n  }\\n\\n  .dropdown-menu-sm-right {\\n    right: 0;\\n    left: auto;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .dropdown-menu-md-left {\\n    right: auto;\\n    left: 0;\\n  }\\n\\n  .dropdown-menu-md-right {\\n    right: 0;\\n    left: auto;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .dropdown-menu-lg-left {\\n    right: auto;\\n    left: 0;\\n  }\\n\\n  .dropdown-menu-lg-right {\\n    right: 0;\\n    left: auto;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .dropdown-menu-xl-left {\\n    right: auto;\\n    left: 0;\\n  }\\n\\n  .dropdown-menu-xl-right {\\n    right: 0;\\n    left: auto;\\n  }\\n}\\n.dropup .dropdown-menu {\\n  top: auto;\\n  bottom: 100%;\\n  margin-top: 0;\\n  margin-bottom: 0.125rem;\\n}\\n.dropup .dropdown-toggle::after {\\n  display: inline-block;\\n  margin-left: 0.255em;\\n  vertical-align: 0.255em;\\n  content: \\\"\\\";\\n  border-top: 0;\\n  border-right: 0.3em solid transparent;\\n  border-bottom: 0.3em solid;\\n  border-left: 0.3em solid transparent;\\n}\\n.dropup .dropdown-toggle:empty::after {\\n  margin-left: 0;\\n}\\n\\n.dropright .dropdown-menu {\\n  top: 0;\\n  right: auto;\\n  left: 100%;\\n  margin-top: 0;\\n  margin-left: 0.125rem;\\n}\\n.dropright .dropdown-toggle::after {\\n  display: inline-block;\\n  margin-left: 0.255em;\\n  vertical-align: 0.255em;\\n  content: \\\"\\\";\\n  border-top: 0.3em solid transparent;\\n  border-right: 0;\\n  border-bottom: 0.3em solid transparent;\\n  border-left: 0.3em solid;\\n}\\n.dropright .dropdown-toggle:empty::after {\\n  margin-left: 0;\\n}\\n.dropright .dropdown-toggle::after {\\n  vertical-align: 0;\\n}\\n\\n.dropleft .dropdown-menu {\\n  top: 0;\\n  right: 100%;\\n  left: auto;\\n  margin-top: 0;\\n  margin-right: 0.125rem;\\n}\\n.dropleft .dropdown-toggle::after {\\n  display: inline-block;\\n  margin-left: 0.255em;\\n  vertical-align: 0.255em;\\n  content: \\\"\\\";\\n}\\n.dropleft .dropdown-toggle::after {\\n  display: none;\\n}\\n.dropleft .dropdown-toggle::before {\\n  display: inline-block;\\n  margin-right: 0.255em;\\n  vertical-align: 0.255em;\\n  content: \\\"\\\";\\n  border-top: 0.3em solid transparent;\\n  border-right: 0.3em solid;\\n  border-bottom: 0.3em solid transparent;\\n}\\n.dropleft .dropdown-toggle:empty::after {\\n  margin-left: 0;\\n}\\n.dropleft .dropdown-toggle::before {\\n  vertical-align: 0;\\n}\\n\\n.dropdown-menu[x-placement^=top], .dropdown-menu[x-placement^=right], .dropdown-menu[x-placement^=bottom], .dropdown-menu[x-placement^=left] {\\n  right: auto;\\n  bottom: auto;\\n}\\n\\n.dropdown-divider {\\n  height: 0;\\n  margin: 0.5rem 0;\\n  overflow: hidden;\\n  border-top: 1px solid #e9ecef;\\n}\\n\\n.dropdown-item {\\n  display: block;\\n  width: 100%;\\n  padding: 0.25rem 1.5rem;\\n  clear: both;\\n  font-weight: 400;\\n  color: #212529;\\n  text-align: inherit;\\n  white-space: nowrap;\\n  background-color: transparent;\\n  border: 0;\\n}\\n.dropdown-item:hover, .dropdown-item:focus {\\n  color: #16181b;\\n  text-decoration: none;\\n  background-color: #f8f9fa;\\n}\\n.dropdown-item.active, .dropdown-item:active {\\n  color: #fff;\\n  text-decoration: none;\\n  background-color: #3A3335;\\n}\\n.dropdown-item.disabled, .dropdown-item:disabled {\\n  color: #6c757d;\\n  pointer-events: none;\\n  background-color: transparent;\\n}\\n\\n.dropdown-menu.show {\\n  display: block;\\n}\\n\\n.dropdown-header {\\n  display: block;\\n  padding: 0.5rem 1.5rem;\\n  margin-bottom: 0;\\n  font-size: 0.875rem;\\n  color: #6c757d;\\n  white-space: nowrap;\\n}\\n\\n.dropdown-item-text {\\n  display: block;\\n  padding: 0.25rem 1.5rem;\\n  color: #212529;\\n}\\n\\n.btn-group,\\n.btn-group-vertical {\\n  position: relative;\\n  display: inline-flex;\\n  vertical-align: middle;\\n}\\n.btn-group > .btn,\\n.btn-group-vertical > .btn {\\n  position: relative;\\n  flex: 1 1 auto;\\n}\\n.btn-group > .btn:hover,\\n.btn-group-vertical > .btn:hover {\\n  z-index: 1;\\n}\\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\\n.btn-group-vertical > .btn:focus,\\n.btn-group-vertical > .btn:active,\\n.btn-group-vertical > .btn.active {\\n  z-index: 1;\\n}\\n\\n.btn-toolbar {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: flex-start;\\n}\\n.btn-toolbar .input-group {\\n  width: auto;\\n}\\n\\n.btn-group > .btn:not(:first-child),\\n.btn-group > .btn-group:not(:first-child) {\\n  margin-left: -1px;\\n}\\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\\n.btn-group > .btn-group:not(:last-child) > .btn {\\n  border-top-right-radius: 0;\\n  border-bottom-right-radius: 0;\\n}\\n.btn-group > .btn:not(:first-child),\\n.btn-group > .btn-group:not(:first-child) > .btn {\\n  border-top-left-radius: 0;\\n  border-bottom-left-radius: 0;\\n}\\n\\n.dropdown-toggle-split {\\n  padding-right: 0.5625rem;\\n  padding-left: 0.5625rem;\\n}\\n.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropright .dropdown-toggle-split::after {\\n  margin-left: 0;\\n}\\n.dropleft .dropdown-toggle-split::before {\\n  margin-right: 0;\\n}\\n\\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\\n  padding-right: 0.375rem;\\n  padding-left: 0.375rem;\\n}\\n\\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\\n  padding-right: 0.75rem;\\n  padding-left: 0.75rem;\\n}\\n\\n.btn-group-vertical {\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: center;\\n}\\n.btn-group-vertical > .btn,\\n.btn-group-vertical > .btn-group {\\n  width: 100%;\\n}\\n.btn-group-vertical > .btn:not(:first-child),\\n.btn-group-vertical > .btn-group:not(:first-child) {\\n  margin-top: -1px;\\n}\\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\\n  border-bottom-right-radius: 0;\\n  border-bottom-left-radius: 0;\\n}\\n.btn-group-vertical > .btn:not(:first-child),\\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\\n  border-top-left-radius: 0;\\n  border-top-right-radius: 0;\\n}\\n\\n.btn-group-toggle > .btn,\\n.btn-group-toggle > .btn-group > .btn {\\n  margin-bottom: 0;\\n}\\n.btn-group-toggle > .btn input[type=radio],\\n.btn-group-toggle > .btn input[type=checkbox],\\n.btn-group-toggle > .btn-group > .btn input[type=radio],\\n.btn-group-toggle > .btn-group > .btn input[type=checkbox] {\\n  position: absolute;\\n  clip: rect(0, 0, 0, 0);\\n  pointer-events: none;\\n}\\n\\n.input-group {\\n  position: relative;\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: stretch;\\n  width: 100%;\\n}\\n.input-group > .form-control,\\n.input-group > .form-control-plaintext,\\n.input-group > .custom-select,\\n.input-group > .custom-file {\\n  position: relative;\\n  flex: 1 1 auto;\\n  width: 1%;\\n  min-width: 0;\\n  margin-bottom: 0;\\n}\\n.input-group > .form-control + .form-control,\\n.input-group > .form-control + .custom-select,\\n.input-group > .form-control + .custom-file,\\n.input-group > .form-control-plaintext + .form-control,\\n.input-group > .form-control-plaintext + .custom-select,\\n.input-group > .form-control-plaintext + .custom-file,\\n.input-group > .custom-select + .form-control,\\n.input-group > .custom-select + .custom-select,\\n.input-group > .custom-select + .custom-file,\\n.input-group > .custom-file + .form-control,\\n.input-group > .custom-file + .custom-select,\\n.input-group > .custom-file + .custom-file {\\n  margin-left: -1px;\\n}\\n.input-group > .form-control:focus,\\n.input-group > .custom-select:focus,\\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\\n  z-index: 3;\\n}\\n.input-group > .custom-file .custom-file-input:focus {\\n  z-index: 4;\\n}\\n.input-group > .form-control:not(:last-child),\\n.input-group > .custom-select:not(:last-child) {\\n  border-top-right-radius: 0;\\n  border-bottom-right-radius: 0;\\n}\\n.input-group > .form-control:not(:first-child),\\n.input-group > .custom-select:not(:first-child) {\\n  border-top-left-radius: 0;\\n  border-bottom-left-radius: 0;\\n}\\n.input-group > .custom-file {\\n  display: flex;\\n  align-items: center;\\n}\\n.input-group > .custom-file:not(:last-child) .custom-file-label, .input-group > .custom-file:not(:last-child) .custom-file-label::after {\\n  border-top-right-radius: 0;\\n  border-bottom-right-radius: 0;\\n}\\n.input-group > .custom-file:not(:first-child) .custom-file-label {\\n  border-top-left-radius: 0;\\n  border-bottom-left-radius: 0;\\n}\\n\\n.input-group-prepend,\\n.input-group-append {\\n  display: flex;\\n}\\n.input-group-prepend .btn,\\n.input-group-append .btn {\\n  position: relative;\\n  z-index: 2;\\n}\\n.input-group-prepend .btn:focus,\\n.input-group-append .btn:focus {\\n  z-index: 3;\\n}\\n.input-group-prepend .btn + .btn,\\n.input-group-prepend .btn + .input-group-text,\\n.input-group-prepend .input-group-text + .input-group-text,\\n.input-group-prepend .input-group-text + .btn,\\n.input-group-append .btn + .btn,\\n.input-group-append .btn + .input-group-text,\\n.input-group-append .input-group-text + .input-group-text,\\n.input-group-append .input-group-text + .btn {\\n  margin-left: -1px;\\n}\\n\\n.input-group-prepend {\\n  margin-right: -1px;\\n}\\n\\n.input-group-append {\\n  margin-left: -1px;\\n}\\n\\n.input-group-text {\\n  display: flex;\\n  align-items: center;\\n  padding: 0.375rem 0.75rem;\\n  margin-bottom: 0;\\n  font-size: 1rem;\\n  font-weight: 400;\\n  line-height: 1.5;\\n  color: #495057;\\n  text-align: center;\\n  white-space: nowrap;\\n  background-color: #e9ecef;\\n  border: 1px solid #ced4da;\\n  border-radius: 0.25rem;\\n}\\n.input-group-text input[type=radio],\\n.input-group-text input[type=checkbox] {\\n  margin-top: 0;\\n}\\n\\n.input-group-lg > .form-control:not(textarea),\\n.input-group-lg > .custom-select {\\n  height: calc(1.5em + 1rem + 2px);\\n}\\n\\n.input-group-lg > .form-control,\\n.input-group-lg > .custom-select,\\n.input-group-lg > .input-group-prepend > .input-group-text,\\n.input-group-lg > .input-group-append > .input-group-text,\\n.input-group-lg > .input-group-prepend > .btn,\\n.input-group-lg > .input-group-append > .btn {\\n  padding: 0.5rem 1rem;\\n  font-size: 1.25rem;\\n  line-height: 1.5;\\n  border-radius: 0.3rem;\\n}\\n\\n.input-group-sm > .form-control:not(textarea),\\n.input-group-sm > .custom-select {\\n  height: calc(1.5em + 0.5rem + 2px);\\n}\\n\\n.input-group-sm > .form-control,\\n.input-group-sm > .custom-select,\\n.input-group-sm > .input-group-prepend > .input-group-text,\\n.input-group-sm > .input-group-append > .input-group-text,\\n.input-group-sm > .input-group-prepend > .btn,\\n.input-group-sm > .input-group-append > .btn {\\n  padding: 0.25rem 0.5rem;\\n  font-size: 0.875rem;\\n  line-height: 1.5;\\n  border-radius: 0.2rem;\\n}\\n\\n.input-group-lg > .custom-select,\\n.input-group-sm > .custom-select {\\n  padding-right: 1.75rem;\\n}\\n\\n.input-group > .input-group-prepend > .btn,\\n.input-group > .input-group-prepend > .input-group-text,\\n.input-group > .input-group-append:not(:last-child) > .btn,\\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\\n  border-top-right-radius: 0;\\n  border-bottom-right-radius: 0;\\n}\\n\\n.input-group > .input-group-append > .btn,\\n.input-group > .input-group-append > .input-group-text,\\n.input-group > .input-group-prepend:not(:first-child) > .btn,\\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\\n  border-top-left-radius: 0;\\n  border-bottom-left-radius: 0;\\n}\\n\\n.custom-control {\\n  position: relative;\\n  z-index: 1;\\n  display: block;\\n  min-height: 1.5rem;\\n  padding-left: 1.5rem;\\n}\\n\\n.custom-control-inline {\\n  display: inline-flex;\\n  margin-right: 1rem;\\n}\\n\\n.custom-control-input {\\n  position: absolute;\\n  left: 0;\\n  z-index: -1;\\n  width: 1rem;\\n  height: 1.25rem;\\n  opacity: 0;\\n}\\n.custom-control-input:checked ~ .custom-control-label::before {\\n  color: #fff;\\n  border-color: #3A3335;\\n  background-color: #3A3335;\\n}\\n.custom-control-input:focus ~ .custom-control-label::before {\\n  box-shadow: 0 0 0 0.2rem rgba(58, 51, 53, 0.25);\\n}\\n.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\\n  border-color: #7e6f73;\\n}\\n.custom-control-input:not(:disabled):active ~ .custom-control-label::before {\\n  color: #fff;\\n  background-color: #97898d;\\n  border-color: #97898d;\\n}\\n.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {\\n  color: #6c757d;\\n}\\n.custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {\\n  background-color: #e9ecef;\\n}\\n\\n.custom-control-label {\\n  position: relative;\\n  margin-bottom: 0;\\n  vertical-align: top;\\n}\\n.custom-control-label::before {\\n  position: absolute;\\n  top: 0.25rem;\\n  left: -1.5rem;\\n  display: block;\\n  width: 1rem;\\n  height: 1rem;\\n  pointer-events: none;\\n  content: \\\"\\\";\\n  background-color: #fff;\\n  border: #adb5bd solid 1px;\\n}\\n.custom-control-label::after {\\n  position: absolute;\\n  top: 0.25rem;\\n  left: -1.5rem;\\n  display: block;\\n  width: 1rem;\\n  height: 1rem;\\n  content: \\\"\\\";\\n  background: no-repeat 50%/50% 50%;\\n}\\n\\n.custom-checkbox .custom-control-label::before {\\n  border-radius: 0.25rem;\\n}\\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\\n  background-image: url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\\\");\\n}\\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\\n  border-color: #3A3335;\\n  background-color: #3A3335;\\n}\\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\\n  background-image: url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\\\");\\n}\\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\\n  background-color: rgba(58, 51, 53, 0.5);\\n}\\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\\n  background-color: rgba(58, 51, 53, 0.5);\\n}\\n\\n.custom-radio .custom-control-label::before {\\n  border-radius: 50%;\\n}\\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\\n  background-image: url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\\\");\\n}\\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\\n  background-color: rgba(58, 51, 53, 0.5);\\n}\\n\\n.custom-switch {\\n  padding-left: 2.25rem;\\n}\\n.custom-switch .custom-control-label::before {\\n  left: -2.25rem;\\n  width: 1.75rem;\\n  pointer-events: all;\\n  border-radius: 0.5rem;\\n}\\n.custom-switch .custom-control-label::after {\\n  top: calc(0.25rem + 2px);\\n  left: calc(-2.25rem + 2px);\\n  width: calc(1rem - 4px);\\n  height: calc(1rem - 4px);\\n  background-color: #adb5bd;\\n  border-radius: 0.5rem;\\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .custom-switch .custom-control-label::after {\\n    transition: none;\\n  }\\n}\\n.custom-switch .custom-control-input:checked ~ .custom-control-label::after {\\n  background-color: #fff;\\n  transform: translateX(0.75rem);\\n}\\n.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\\n  background-color: rgba(58, 51, 53, 0.5);\\n}\\n\\n.custom-select {\\n  display: inline-block;\\n  width: 100%;\\n  height: calc(1.5em + 0.75rem + 2px);\\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\\n  font-size: 1rem;\\n  font-weight: 400;\\n  line-height: 1.5;\\n  color: #495057;\\n  vertical-align: middle;\\n  background: #fff url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\\\") no-repeat right 0.75rem center/8px 10px;\\n  border: 1px solid #ced4da;\\n  border-radius: 0.25rem;\\n  -webkit-appearance: none;\\n     -moz-appearance: none;\\n          appearance: none;\\n}\\n.custom-select:focus {\\n  border-color: #7e6f73;\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(58, 51, 53, 0.25);\\n}\\n.custom-select:focus::-ms-value {\\n  color: #495057;\\n  background-color: #fff;\\n}\\n.custom-select[multiple], .custom-select[size]:not([size=\\\"1\\\"]) {\\n  height: auto;\\n  padding-right: 0.75rem;\\n  background-image: none;\\n}\\n.custom-select:disabled {\\n  color: #6c757d;\\n  background-color: #e9ecef;\\n}\\n.custom-select::-ms-expand {\\n  display: none;\\n}\\n.custom-select:-moz-focusring {\\n  color: transparent;\\n  text-shadow: 0 0 0 #495057;\\n}\\n\\n.custom-select-sm {\\n  height: calc(1.5em + 0.5rem + 2px);\\n  padding-top: 0.25rem;\\n  padding-bottom: 0.25rem;\\n  padding-left: 0.5rem;\\n  font-size: 0.875rem;\\n}\\n\\n.custom-select-lg {\\n  height: calc(1.5em + 1rem + 2px);\\n  padding-top: 0.5rem;\\n  padding-bottom: 0.5rem;\\n  padding-left: 1rem;\\n  font-size: 1.25rem;\\n}\\n\\n.custom-file {\\n  position: relative;\\n  display: inline-block;\\n  width: 100%;\\n  height: calc(1.5em + 0.75rem + 2px);\\n  margin-bottom: 0;\\n}\\n\\n.custom-file-input {\\n  position: relative;\\n  z-index: 2;\\n  width: 100%;\\n  height: calc(1.5em + 0.75rem + 2px);\\n  margin: 0;\\n  opacity: 0;\\n}\\n.custom-file-input:focus ~ .custom-file-label {\\n  border-color: #7e6f73;\\n  box-shadow: 0 0 0 0.2rem rgba(58, 51, 53, 0.25);\\n}\\n.custom-file-input[disabled] ~ .custom-file-label, .custom-file-input:disabled ~ .custom-file-label {\\n  background-color: #e9ecef;\\n}\\n.custom-file-input:lang(en) ~ .custom-file-label::after {\\n  content: \\\"Browse\\\";\\n}\\n.custom-file-input ~ .custom-file-label[data-browse]::after {\\n  content: attr(data-browse);\\n}\\n\\n.custom-file-label {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  z-index: 1;\\n  height: calc(1.5em + 0.75rem + 2px);\\n  padding: 0.375rem 0.75rem;\\n  font-weight: 400;\\n  line-height: 1.5;\\n  color: #495057;\\n  background-color: #fff;\\n  border: 1px solid #ced4da;\\n  border-radius: 0.25rem;\\n}\\n.custom-file-label::after {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  z-index: 3;\\n  display: block;\\n  height: calc(1.5em + 0.75rem);\\n  padding: 0.375rem 0.75rem;\\n  line-height: 1.5;\\n  color: #495057;\\n  content: \\\"Browse\\\";\\n  background-color: #e9ecef;\\n  border-left: inherit;\\n  border-radius: 0 0.25rem 0.25rem 0;\\n}\\n\\n.custom-range {\\n  width: 100%;\\n  height: 1.4rem;\\n  padding: 0;\\n  background-color: transparent;\\n  -webkit-appearance: none;\\n     -moz-appearance: none;\\n          appearance: none;\\n}\\n.custom-range:focus {\\n  outline: none;\\n}\\n.custom-range:focus::-webkit-slider-thumb {\\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(58, 51, 53, 0.25);\\n}\\n.custom-range:focus::-moz-range-thumb {\\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(58, 51, 53, 0.25);\\n}\\n.custom-range:focus::-ms-thumb {\\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(58, 51, 53, 0.25);\\n}\\n.custom-range::-moz-focus-outer {\\n  border: 0;\\n}\\n.custom-range::-webkit-slider-thumb {\\n  width: 1rem;\\n  height: 1rem;\\n  margin-top: -0.25rem;\\n  background-color: #3A3335;\\n  border: 0;\\n  border-radius: 1rem;\\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n  -webkit-appearance: none;\\n          appearance: none;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .custom-range::-webkit-slider-thumb {\\n    -webkit-transition: none;\\n    transition: none;\\n  }\\n}\\n.custom-range::-webkit-slider-thumb:active {\\n  background-color: #97898d;\\n}\\n.custom-range::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 0.5rem;\\n  color: transparent;\\n  cursor: pointer;\\n  background-color: #dee2e6;\\n  border-color: transparent;\\n  border-radius: 1rem;\\n}\\n.custom-range::-moz-range-thumb {\\n  width: 1rem;\\n  height: 1rem;\\n  background-color: #3A3335;\\n  border: 0;\\n  border-radius: 1rem;\\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n  -moz-appearance: none;\\n       appearance: none;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .custom-range::-moz-range-thumb {\\n    -moz-transition: none;\\n    transition: none;\\n  }\\n}\\n.custom-range::-moz-range-thumb:active {\\n  background-color: #97898d;\\n}\\n.custom-range::-moz-range-track {\\n  width: 100%;\\n  height: 0.5rem;\\n  color: transparent;\\n  cursor: pointer;\\n  background-color: #dee2e6;\\n  border-color: transparent;\\n  border-radius: 1rem;\\n}\\n.custom-range::-ms-thumb {\\n  width: 1rem;\\n  height: 1rem;\\n  margin-top: 0;\\n  margin-right: 0.2rem;\\n  margin-left: 0.2rem;\\n  background-color: #3A3335;\\n  border: 0;\\n  border-radius: 1rem;\\n  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n  appearance: none;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .custom-range::-ms-thumb {\\n    -ms-transition: none;\\n    transition: none;\\n  }\\n}\\n.custom-range::-ms-thumb:active {\\n  background-color: #97898d;\\n}\\n.custom-range::-ms-track {\\n  width: 100%;\\n  height: 0.5rem;\\n  color: transparent;\\n  cursor: pointer;\\n  background-color: transparent;\\n  border-color: transparent;\\n  border-width: 0.5rem;\\n}\\n.custom-range::-ms-fill-lower {\\n  background-color: #dee2e6;\\n  border-radius: 1rem;\\n}\\n.custom-range::-ms-fill-upper {\\n  margin-right: 15px;\\n  background-color: #dee2e6;\\n  border-radius: 1rem;\\n}\\n.custom-range:disabled::-webkit-slider-thumb {\\n  background-color: #adb5bd;\\n}\\n.custom-range:disabled::-webkit-slider-runnable-track {\\n  cursor: default;\\n}\\n.custom-range:disabled::-moz-range-thumb {\\n  background-color: #adb5bd;\\n}\\n.custom-range:disabled::-moz-range-track {\\n  cursor: default;\\n}\\n.custom-range:disabled::-ms-thumb {\\n  background-color: #adb5bd;\\n}\\n\\n.custom-control-label::before,\\n.custom-file-label,\\n.custom-select {\\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .custom-control-label::before,\\n.custom-file-label,\\n.custom-select {\\n    transition: none;\\n  }\\n}\\n\\n.nav {\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding-left: 0;\\n  margin-bottom: 0;\\n  list-style: none;\\n}\\n\\n.nav-link {\\n  display: block;\\n  padding: 0.5rem 1rem;\\n}\\n.nav-link:hover, .nav-link:focus {\\n  text-decoration: none;\\n}\\n.nav-link.disabled {\\n  color: #6c757d;\\n  pointer-events: none;\\n  cursor: default;\\n}\\n\\n.nav-tabs {\\n  border-bottom: 1px solid #dee2e6;\\n}\\n.nav-tabs .nav-item {\\n  margin-bottom: -1px;\\n}\\n.nav-tabs .nav-link {\\n  border: 1px solid transparent;\\n  border-top-left-radius: 0.25rem;\\n  border-top-right-radius: 0.25rem;\\n}\\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\\n  border-color: #e9ecef #e9ecef #dee2e6;\\n}\\n.nav-tabs .nav-link.disabled {\\n  color: #6c757d;\\n  background-color: transparent;\\n  border-color: transparent;\\n}\\n.nav-tabs .nav-link.active,\\n.nav-tabs .nav-item.show .nav-link {\\n  color: #495057;\\n  background-color: #fff;\\n  border-color: #dee2e6 #dee2e6 #fff;\\n}\\n.nav-tabs .dropdown-menu {\\n  margin-top: -1px;\\n  border-top-left-radius: 0;\\n  border-top-right-radius: 0;\\n}\\n\\n.nav-pills .nav-link {\\n  border-radius: 0.25rem;\\n}\\n.nav-pills .nav-link.active,\\n.nav-pills .show > .nav-link {\\n  color: #fff;\\n  background-color: #3A3335;\\n}\\n\\n.nav-fill > .nav-link,\\n.nav-fill .nav-item {\\n  flex: 1 1 auto;\\n  text-align: center;\\n}\\n\\n.nav-justified > .nav-link,\\n.nav-justified .nav-item {\\n  flex-basis: 0;\\n  flex-grow: 1;\\n  text-align: center;\\n}\\n\\n.tab-content > .tab-pane {\\n  display: none;\\n}\\n.tab-content > .active {\\n  display: block;\\n}\\n\\n.navbar {\\n  position: relative;\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 0.5rem 1rem;\\n}\\n.navbar .container,\\n.navbar .container-fluid,\\n.navbar .container-sm,\\n.navbar .container-md,\\n.navbar .container-lg,\\n.navbar .container-xl {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.navbar-brand {\\n  display: inline-block;\\n  padding-top: 0.3125rem;\\n  padding-bottom: 0.3125rem;\\n  margin-right: 1rem;\\n  font-size: 1.25rem;\\n  line-height: inherit;\\n  white-space: nowrap;\\n}\\n.navbar-brand:hover, .navbar-brand:focus {\\n  text-decoration: none;\\n}\\n\\n.navbar-nav {\\n  display: flex;\\n  flex-direction: column;\\n  padding-left: 0;\\n  margin-bottom: 0;\\n  list-style: none;\\n}\\n.navbar-nav .nav-link {\\n  padding-right: 0;\\n  padding-left: 0;\\n}\\n.navbar-nav .dropdown-menu {\\n  position: static;\\n  float: none;\\n}\\n\\n.navbar-text {\\n  display: inline-block;\\n  padding-top: 0.5rem;\\n  padding-bottom: 0.5rem;\\n}\\n\\n.navbar-collapse {\\n  flex-basis: 100%;\\n  flex-grow: 1;\\n  align-items: center;\\n}\\n\\n.navbar-toggler {\\n  padding: 0.25rem 0.75rem;\\n  font-size: 1.25rem;\\n  line-height: 1;\\n  background-color: transparent;\\n  border: 1px solid transparent;\\n  border-radius: 0.25rem;\\n}\\n.navbar-toggler:hover, .navbar-toggler:focus {\\n  text-decoration: none;\\n}\\n\\n.navbar-toggler-icon {\\n  display: inline-block;\\n  width: 1.5em;\\n  height: 1.5em;\\n  vertical-align: middle;\\n  content: \\\"\\\";\\n  background: no-repeat center center;\\n  background-size: 100% 100%;\\n}\\n\\n@media (max-width: 575.98px) {\\n  .navbar-expand-sm > .container,\\n.navbar-expand-sm > .container-fluid,\\n.navbar-expand-sm > .container-sm,\\n.navbar-expand-sm > .container-md,\\n.navbar-expand-sm > .container-lg,\\n.navbar-expand-sm > .container-xl {\\n    padding-right: 0;\\n    padding-left: 0;\\n  }\\n}\\n@media (min-width: 576px) {\\n  .navbar-expand-sm {\\n    flex-flow: row nowrap;\\n    justify-content: flex-start;\\n  }\\n  .navbar-expand-sm .navbar-nav {\\n    flex-direction: row;\\n  }\\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\\n    position: absolute;\\n  }\\n  .navbar-expand-sm .navbar-nav .nav-link {\\n    padding-right: 0.5rem;\\n    padding-left: 0.5rem;\\n  }\\n  .navbar-expand-sm > .container,\\n.navbar-expand-sm > .container-fluid,\\n.navbar-expand-sm > .container-sm,\\n.navbar-expand-sm > .container-md,\\n.navbar-expand-sm > .container-lg,\\n.navbar-expand-sm > .container-xl {\\n    flex-wrap: nowrap;\\n  }\\n  .navbar-expand-sm .navbar-collapse {\\n    display: flex !important;\\n    flex-basis: auto;\\n  }\\n  .navbar-expand-sm .navbar-toggler {\\n    display: none;\\n  }\\n}\\n@media (max-width: 767.98px) {\\n  .navbar-expand-md > .container,\\n.navbar-expand-md > .container-fluid,\\n.navbar-expand-md > .container-sm,\\n.navbar-expand-md > .container-md,\\n.navbar-expand-md > .container-lg,\\n.navbar-expand-md > .container-xl {\\n    padding-right: 0;\\n    padding-left: 0;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .navbar-expand-md {\\n    flex-flow: row nowrap;\\n    justify-content: flex-start;\\n  }\\n  .navbar-expand-md .navbar-nav {\\n    flex-direction: row;\\n  }\\n  .navbar-expand-md .navbar-nav .dropdown-menu {\\n    position: absolute;\\n  }\\n  .navbar-expand-md .navbar-nav .nav-link {\\n    padding-right: 0.5rem;\\n    padding-left: 0.5rem;\\n  }\\n  .navbar-expand-md > .container,\\n.navbar-expand-md > .container-fluid,\\n.navbar-expand-md > .container-sm,\\n.navbar-expand-md > .container-md,\\n.navbar-expand-md > .container-lg,\\n.navbar-expand-md > .container-xl {\\n    flex-wrap: nowrap;\\n  }\\n  .navbar-expand-md .navbar-collapse {\\n    display: flex !important;\\n    flex-basis: auto;\\n  }\\n  .navbar-expand-md .navbar-toggler {\\n    display: none;\\n  }\\n}\\n@media (max-width: 991.98px) {\\n  .navbar-expand-lg > .container,\\n.navbar-expand-lg > .container-fluid,\\n.navbar-expand-lg > .container-sm,\\n.navbar-expand-lg > .container-md,\\n.navbar-expand-lg > .container-lg,\\n.navbar-expand-lg > .container-xl {\\n    padding-right: 0;\\n    padding-left: 0;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .navbar-expand-lg {\\n    flex-flow: row nowrap;\\n    justify-content: flex-start;\\n  }\\n  .navbar-expand-lg .navbar-nav {\\n    flex-direction: row;\\n  }\\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\\n    position: absolute;\\n  }\\n  .navbar-expand-lg .navbar-nav .nav-link {\\n    padding-right: 0.5rem;\\n    padding-left: 0.5rem;\\n  }\\n  .navbar-expand-lg > .container,\\n.navbar-expand-lg > .container-fluid,\\n.navbar-expand-lg > .container-sm,\\n.navbar-expand-lg > .container-md,\\n.navbar-expand-lg > .container-lg,\\n.navbar-expand-lg > .container-xl {\\n    flex-wrap: nowrap;\\n  }\\n  .navbar-expand-lg .navbar-collapse {\\n    display: flex !important;\\n    flex-basis: auto;\\n  }\\n  .navbar-expand-lg .navbar-toggler {\\n    display: none;\\n  }\\n}\\n@media (max-width: 1199.98px) {\\n  .navbar-expand-xl > .container,\\n.navbar-expand-xl > .container-fluid,\\n.navbar-expand-xl > .container-sm,\\n.navbar-expand-xl > .container-md,\\n.navbar-expand-xl > .container-lg,\\n.navbar-expand-xl > .container-xl {\\n    padding-right: 0;\\n    padding-left: 0;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .navbar-expand-xl {\\n    flex-flow: row nowrap;\\n    justify-content: flex-start;\\n  }\\n  .navbar-expand-xl .navbar-nav {\\n    flex-direction: row;\\n  }\\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\\n    position: absolute;\\n  }\\n  .navbar-expand-xl .navbar-nav .nav-link {\\n    padding-right: 0.5rem;\\n    padding-left: 0.5rem;\\n  }\\n  .navbar-expand-xl > .container,\\n.navbar-expand-xl > .container-fluid,\\n.navbar-expand-xl > .container-sm,\\n.navbar-expand-xl > .container-md,\\n.navbar-expand-xl > .container-lg,\\n.navbar-expand-xl > .container-xl {\\n    flex-wrap: nowrap;\\n  }\\n  .navbar-expand-xl .navbar-collapse {\\n    display: flex !important;\\n    flex-basis: auto;\\n  }\\n  .navbar-expand-xl .navbar-toggler {\\n    display: none;\\n  }\\n}\\n.navbar-expand {\\n  flex-flow: row nowrap;\\n  justify-content: flex-start;\\n}\\n.navbar-expand > .container,\\n.navbar-expand > .container-fluid,\\n.navbar-expand > .container-sm,\\n.navbar-expand > .container-md,\\n.navbar-expand > .container-lg,\\n.navbar-expand > .container-xl {\\n  padding-right: 0;\\n  padding-left: 0;\\n}\\n.navbar-expand .navbar-nav {\\n  flex-direction: row;\\n}\\n.navbar-expand .navbar-nav .dropdown-menu {\\n  position: absolute;\\n}\\n.navbar-expand .navbar-nav .nav-link {\\n  padding-right: 0.5rem;\\n  padding-left: 0.5rem;\\n}\\n.navbar-expand > .container,\\n.navbar-expand > .container-fluid,\\n.navbar-expand > .container-sm,\\n.navbar-expand > .container-md,\\n.navbar-expand > .container-lg,\\n.navbar-expand > .container-xl {\\n  flex-wrap: nowrap;\\n}\\n.navbar-expand .navbar-collapse {\\n  display: flex !important;\\n  flex-basis: auto;\\n}\\n.navbar-expand .navbar-toggler {\\n  display: none;\\n}\\n\\n.navbar-light .navbar-brand {\\n  color: rgba(0, 0, 0, 0.9);\\n}\\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\\n  color: rgba(0, 0, 0, 0.9);\\n}\\n.navbar-light .navbar-nav .nav-link {\\n  color: rgba(0, 0, 0, 0.5);\\n}\\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\\n  color: rgba(0, 0, 0, 0.7);\\n}\\n.navbar-light .navbar-nav .nav-link.disabled {\\n  color: rgba(0, 0, 0, 0.3);\\n}\\n.navbar-light .navbar-nav .show > .nav-link,\\n.navbar-light .navbar-nav .active > .nav-link,\\n.navbar-light .navbar-nav .nav-link.show,\\n.navbar-light .navbar-nav .nav-link.active {\\n  color: rgba(0, 0, 0, 0.9);\\n}\\n.navbar-light .navbar-toggler {\\n  color: rgba(0, 0, 0, 0.5);\\n  border-color: rgba(0, 0, 0, 0.1);\\n}\\n.navbar-light .navbar-toggler-icon {\\n  background-image: url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\\\");\\n}\\n.navbar-light .navbar-text {\\n  color: rgba(0, 0, 0, 0.5);\\n}\\n.navbar-light .navbar-text a {\\n  color: rgba(0, 0, 0, 0.9);\\n}\\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\\n  color: rgba(0, 0, 0, 0.9);\\n}\\n\\n.navbar-dark .navbar-brand {\\n  color: #fff;\\n}\\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\\n  color: #fff;\\n}\\n.navbar-dark .navbar-nav .nav-link {\\n  color: rgba(255, 255, 255, 0.5);\\n}\\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\\n  color: rgba(255, 255, 255, 0.75);\\n}\\n.navbar-dark .navbar-nav .nav-link.disabled {\\n  color: rgba(255, 255, 255, 0.25);\\n}\\n.navbar-dark .navbar-nav .show > .nav-link,\\n.navbar-dark .navbar-nav .active > .nav-link,\\n.navbar-dark .navbar-nav .nav-link.show,\\n.navbar-dark .navbar-nav .nav-link.active {\\n  color: #fff;\\n}\\n.navbar-dark .navbar-toggler {\\n  color: rgba(255, 255, 255, 0.5);\\n  border-color: rgba(255, 255, 255, 0.1);\\n}\\n.navbar-dark .navbar-toggler-icon {\\n  background-image: url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\\\");\\n}\\n.navbar-dark .navbar-text {\\n  color: rgba(255, 255, 255, 0.5);\\n}\\n.navbar-dark .navbar-text a {\\n  color: #fff;\\n}\\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\\n  color: #fff;\\n}\\n\\n.card {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  min-width: 0;\\n  word-wrap: break-word;\\n  background-color: #fff;\\n  background-clip: border-box;\\n  border: 1px solid rgba(0, 0, 0, 0.125);\\n  border-radius: 0.25rem;\\n}\\n.card > hr {\\n  margin-right: 0;\\n  margin-left: 0;\\n}\\n.card > .list-group {\\n  border-top: inherit;\\n  border-bottom: inherit;\\n}\\n.card > .list-group:first-child {\\n  border-top-width: 0;\\n  border-top-left-radius: calc(0.25rem - 1px);\\n  border-top-right-radius: calc(0.25rem - 1px);\\n}\\n.card > .list-group:last-child {\\n  border-bottom-width: 0;\\n  border-bottom-right-radius: calc(0.25rem - 1px);\\n  border-bottom-left-radius: calc(0.25rem - 1px);\\n}\\n.card > .card-header + .list-group,\\n.card > .list-group + .card-footer {\\n  border-top: 0;\\n}\\n\\n.card-body {\\n  flex: 1 1 auto;\\n  min-height: 1px;\\n  padding: 1.25rem;\\n}\\n\\n.card-title {\\n  margin-bottom: 0.75rem;\\n}\\n\\n.card-subtitle {\\n  margin-top: -0.375rem;\\n  margin-bottom: 0;\\n}\\n\\n.card-text:last-child {\\n  margin-bottom: 0;\\n}\\n\\n.card-link:hover {\\n  text-decoration: none;\\n}\\n.card-link + .card-link {\\n  margin-left: 1.25rem;\\n}\\n\\n.card-header {\\n  padding: 0.75rem 1.25rem;\\n  margin-bottom: 0;\\n  background-color: rgba(0, 0, 0, 0.03);\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\\n}\\n.card-header:first-child {\\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\\n}\\n\\n.card-footer {\\n  padding: 0.75rem 1.25rem;\\n  background-color: rgba(0, 0, 0, 0.03);\\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\\n}\\n.card-footer:last-child {\\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\\n}\\n\\n.card-header-tabs {\\n  margin-right: -0.625rem;\\n  margin-bottom: -0.75rem;\\n  margin-left: -0.625rem;\\n  border-bottom: 0;\\n}\\n\\n.card-header-pills {\\n  margin-right: -0.625rem;\\n  margin-left: -0.625rem;\\n}\\n\\n.card-img-overlay {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  padding: 1.25rem;\\n  border-radius: calc(0.25rem - 1px);\\n}\\n\\n.card-img,\\n.card-img-top,\\n.card-img-bottom {\\n  flex-shrink: 0;\\n  width: 100%;\\n}\\n\\n.card-img,\\n.card-img-top {\\n  border-top-left-radius: calc(0.25rem - 1px);\\n  border-top-right-radius: calc(0.25rem - 1px);\\n}\\n\\n.card-img,\\n.card-img-bottom {\\n  border-bottom-right-radius: calc(0.25rem - 1px);\\n  border-bottom-left-radius: calc(0.25rem - 1px);\\n}\\n\\n.card-deck .card {\\n  margin-bottom: 15px;\\n}\\n@media (min-width: 576px) {\\n  .card-deck {\\n    display: flex;\\n    flex-flow: row wrap;\\n    margin-right: -15px;\\n    margin-left: -15px;\\n  }\\n  .card-deck .card {\\n    flex: 1 0 0%;\\n    margin-right: 15px;\\n    margin-bottom: 0;\\n    margin-left: 15px;\\n  }\\n}\\n\\n.card-group > .card {\\n  margin-bottom: 15px;\\n}\\n@media (min-width: 576px) {\\n  .card-group {\\n    display: flex;\\n    flex-flow: row wrap;\\n  }\\n  .card-group > .card {\\n    flex: 1 0 0%;\\n    margin-bottom: 0;\\n  }\\n  .card-group > .card + .card {\\n    margin-left: 0;\\n    border-left: 0;\\n  }\\n  .card-group > .card:not(:last-child) {\\n    border-top-right-radius: 0;\\n    border-bottom-right-radius: 0;\\n  }\\n  .card-group > .card:not(:last-child) .card-img-top,\\n.card-group > .card:not(:last-child) .card-header {\\n    border-top-right-radius: 0;\\n  }\\n  .card-group > .card:not(:last-child) .card-img-bottom,\\n.card-group > .card:not(:last-child) .card-footer {\\n    border-bottom-right-radius: 0;\\n  }\\n  .card-group > .card:not(:first-child) {\\n    border-top-left-radius: 0;\\n    border-bottom-left-radius: 0;\\n  }\\n  .card-group > .card:not(:first-child) .card-img-top,\\n.card-group > .card:not(:first-child) .card-header {\\n    border-top-left-radius: 0;\\n  }\\n  .card-group > .card:not(:first-child) .card-img-bottom,\\n.card-group > .card:not(:first-child) .card-footer {\\n    border-bottom-left-radius: 0;\\n  }\\n}\\n\\n.card-columns .card {\\n  margin-bottom: 0.75rem;\\n}\\n@media (min-width: 576px) {\\n  .card-columns {\\n    -moz-column-count: 3;\\n         column-count: 3;\\n    -moz-column-gap: 1.25rem;\\n         column-gap: 1.25rem;\\n    orphans: 1;\\n    widows: 1;\\n  }\\n  .card-columns .card {\\n    display: inline-block;\\n    width: 100%;\\n  }\\n}\\n\\n.accordion {\\n  overflow-anchor: none;\\n}\\n.accordion > .card {\\n  overflow: hidden;\\n}\\n.accordion > .card:not(:last-of-type) {\\n  border-bottom: 0;\\n  border-bottom-right-radius: 0;\\n  border-bottom-left-radius: 0;\\n}\\n.accordion > .card:not(:first-of-type) {\\n  border-top-left-radius: 0;\\n  border-top-right-radius: 0;\\n}\\n.accordion > .card > .card-header {\\n  border-radius: 0;\\n  margin-bottom: -1px;\\n}\\n\\n.breadcrumb {\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 0.75rem 1rem;\\n  margin-bottom: 1rem;\\n  list-style: none;\\n  background-color: #e9ecef;\\n  border-radius: 0.25rem;\\n}\\n\\n.breadcrumb-item {\\n  display: flex;\\n}\\n.breadcrumb-item + .breadcrumb-item {\\n  padding-left: 0.5rem;\\n}\\n.breadcrumb-item + .breadcrumb-item::before {\\n  display: inline-block;\\n  padding-right: 0.5rem;\\n  color: #6c757d;\\n  content: \\\"/\\\";\\n}\\n.breadcrumb-item + .breadcrumb-item:hover::before {\\n  text-decoration: underline;\\n}\\n.breadcrumb-item + .breadcrumb-item:hover::before {\\n  text-decoration: none;\\n}\\n.breadcrumb-item.active {\\n  color: #6c757d;\\n}\\n\\n.pagination {\\n  display: flex;\\n  padding-left: 0;\\n  list-style: none;\\n  border-radius: 0.25rem;\\n}\\n\\n.page-link {\\n  position: relative;\\n  display: block;\\n  padding: 0.5rem 0.75rem;\\n  margin-left: -1px;\\n  line-height: 1.25;\\n  color: #3A3335;\\n  background-color: #fff;\\n  border: 1px solid #dee2e6;\\n}\\n.page-link:hover {\\n  z-index: 2;\\n  color: #110f10;\\n  text-decoration: none;\\n  background-color: #e9ecef;\\n  border-color: #dee2e6;\\n}\\n.page-link:focus {\\n  z-index: 3;\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(58, 51, 53, 0.25);\\n}\\n\\n.page-item:first-child .page-link {\\n  margin-left: 0;\\n  border-top-left-radius: 0.25rem;\\n  border-bottom-left-radius: 0.25rem;\\n}\\n.page-item:last-child .page-link {\\n  border-top-right-radius: 0.25rem;\\n  border-bottom-right-radius: 0.25rem;\\n}\\n.page-item.active .page-link {\\n  z-index: 3;\\n  color: #fff;\\n  background-color: #3A3335;\\n  border-color: #3A3335;\\n}\\n.page-item.disabled .page-link {\\n  color: #6c757d;\\n  pointer-events: none;\\n  cursor: auto;\\n  background-color: #fff;\\n  border-color: #dee2e6;\\n}\\n\\n.pagination-lg .page-link {\\n  padding: 0.75rem 1.5rem;\\n  font-size: 1.25rem;\\n  line-height: 1.5;\\n}\\n.pagination-lg .page-item:first-child .page-link {\\n  border-top-left-radius: 0.3rem;\\n  border-bottom-left-radius: 0.3rem;\\n}\\n.pagination-lg .page-item:last-child .page-link {\\n  border-top-right-radius: 0.3rem;\\n  border-bottom-right-radius: 0.3rem;\\n}\\n\\n.pagination-sm .page-link {\\n  padding: 0.25rem 0.5rem;\\n  font-size: 0.875rem;\\n  line-height: 1.5;\\n}\\n.pagination-sm .page-item:first-child .page-link {\\n  border-top-left-radius: 0.2rem;\\n  border-bottom-left-radius: 0.2rem;\\n}\\n.pagination-sm .page-item:last-child .page-link {\\n  border-top-right-radius: 0.2rem;\\n  border-bottom-right-radius: 0.2rem;\\n}\\n\\n.badge {\\n  display: inline-block;\\n  padding: 0.25em 0.4em;\\n  font-size: 75%;\\n  font-weight: 700;\\n  line-height: 1;\\n  text-align: center;\\n  white-space: nowrap;\\n  vertical-align: baseline;\\n  border-radius: 0.25rem;\\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .badge {\\n    transition: none;\\n  }\\n}\\na.badge:hover, a.badge:focus {\\n  text-decoration: none;\\n}\\n\\n.badge:empty {\\n  display: none;\\n}\\n\\n.btn .badge {\\n  position: relative;\\n  top: -1px;\\n}\\n\\n.badge-pill {\\n  padding-right: 0.6em;\\n  padding-left: 0.6em;\\n  border-radius: 10rem;\\n}\\n\\n.badge-primary {\\n  color: #fff;\\n  background-color: #3A3335;\\n}\\na.badge-primary:hover, a.badge-primary:focus {\\n  color: #fff;\\n  background-color: #1f1b1c;\\n}\\na.badge-primary:focus, a.badge-primary.focus {\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(58, 51, 53, 0.5);\\n}\\n\\n.badge-secondary {\\n  color: #fff;\\n  background-color: #717568;\\n}\\na.badge-secondary:hover, a.badge-secondary:focus {\\n  color: #fff;\\n  background-color: #575a50;\\n}\\na.badge-secondary:focus, a.badge-secondary.focus {\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(113, 117, 104, 0.5);\\n}\\n\\n.badge-success {\\n  color: #212529;\\n  background-color: #42D9C8;\\n}\\na.badge-success:hover, a.badge-success:focus {\\n  color: #212529;\\n  background-color: #27c1b0;\\n}\\na.badge-success:focus, a.badge-success.focus {\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(66, 217, 200, 0.5);\\n}\\n\\n.badge-info {\\n  color: #212529;\\n  background-color: #BACBA9;\\n}\\na.badge-info:hover, a.badge-info:focus {\\n  color: #212529;\\n  background-color: #a1b889;\\n}\\na.badge-info:focus, a.badge-info.focus {\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(186, 203, 169, 0.5);\\n}\\n\\n.badge-warning {\\n  color: #212529;\\n  background-color: #F1BF98;\\n}\\na.badge-warning:hover, a.badge-warning:focus {\\n  color: #212529;\\n  background-color: #eba36b;\\n}\\na.badge-warning:focus, a.badge-warning.focus {\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(241, 191, 152, 0.5);\\n}\\n\\n.badge-danger {\\n  color: #fff;\\n  background-color: #D81E5B;\\n}\\na.badge-danger:hover, a.badge-danger:focus {\\n  color: #fff;\\n  background-color: #ab1848;\\n}\\na.badge-danger:focus, a.badge-danger.focus {\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(216, 30, 91, 0.5);\\n}\\n\\n.badge-light {\\n  color: #212529;\\n  background-color: #f8f9fa;\\n}\\na.badge-light:hover, a.badge-light:focus {\\n  color: #212529;\\n  background-color: #dae0e5;\\n}\\na.badge-light:focus, a.badge-light.focus {\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\\n}\\n\\n.badge-dark {\\n  color: #fff;\\n  background-color: #343a40;\\n}\\na.badge-dark:hover, a.badge-dark:focus {\\n  color: #fff;\\n  background-color: #1d2124;\\n}\\na.badge-dark:focus, a.badge-dark.focus {\\n  outline: 0;\\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\\n}\\n\\n.jumbotron {\\n  padding: 2rem 1rem;\\n  margin-bottom: 2rem;\\n  background-color: #e9ecef;\\n  border-radius: 0.3rem;\\n}\\n@media (min-width: 576px) {\\n  .jumbotron {\\n    padding: 4rem 2rem;\\n  }\\n}\\n\\n.jumbotron-fluid {\\n  padding-right: 0;\\n  padding-left: 0;\\n  border-radius: 0;\\n}\\n\\n.alert {\\n  position: relative;\\n  padding: 0.75rem 1.25rem;\\n  margin-bottom: 1rem;\\n  border: 1px solid transparent;\\n  border-radius: 0.25rem;\\n}\\n\\n.alert-heading {\\n  color: inherit;\\n}\\n\\n.alert-link {\\n  font-weight: 700;\\n}\\n\\n.alert-dismissible {\\n  padding-right: 4rem;\\n}\\n.alert-dismissible .close {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  padding: 0.75rem 1.25rem;\\n  color: inherit;\\n}\\n\\n.alert-primary {\\n  color: #1e1b1c;\\n  background-color: #d8d6d7;\\n  border-color: #c8c6c6;\\n}\\n.alert-primary hr {\\n  border-top-color: #bbb9b9;\\n}\\n.alert-primary .alert-link {\\n  color: #030303;\\n}\\n\\n.alert-secondary {\\n  color: #3b3d36;\\n  background-color: #e3e3e1;\\n  border-color: #d7d8d5;\\n}\\n.alert-secondary hr {\\n  border-top-color: #caccc8;\\n}\\n.alert-secondary .alert-link {\\n  color: #21221e;\\n}\\n\\n.alert-success {\\n  color: #227168;\\n  background-color: #d9f7f4;\\n  border-color: #caf4f0;\\n}\\n.alert-success hr {\\n  border-top-color: #b5f0ea;\\n}\\n.alert-success .alert-link {\\n  color: #164a44;\\n}\\n\\n.alert-info {\\n  color: #616a58;\\n  background-color: #f1f5ee;\\n  border-color: #ecf0e7;\\n}\\n.alert-info hr {\\n  border-top-color: #e0e6d7;\\n}\\n.alert-info .alert-link {\\n  color: #484e41;\\n}\\n\\n.alert-warning {\\n  color: #7d634f;\\n  background-color: #fcf2ea;\\n  border-color: #fbede2;\\n}\\n.alert-warning hr {\\n  border-top-color: #f8dfcc;\\n}\\n.alert-warning .alert-link {\\n  color: #5e4a3b;\\n}\\n\\n.alert-danger {\\n  color: #70102f;\\n  background-color: #f7d2de;\\n  border-color: #f4c0d1;\\n}\\n.alert-danger hr {\\n  border-top-color: #f0aac1;\\n}\\n.alert-danger .alert-link {\\n  color: #430a1c;\\n}\\n\\n.alert-light {\\n  color: #818182;\\n  background-color: #fefefe;\\n  border-color: #fdfdfe;\\n}\\n.alert-light hr {\\n  border-top-color: #ececf6;\\n}\\n.alert-light .alert-link {\\n  color: #686868;\\n}\\n\\n.alert-dark {\\n  color: #1b1e21;\\n  background-color: #d6d8d9;\\n  border-color: #c6c8ca;\\n}\\n.alert-dark hr {\\n  border-top-color: #b9bbbe;\\n}\\n.alert-dark .alert-link {\\n  color: #040505;\\n}\\n\\n@-webkit-keyframes progress-bar-stripes {\\n  from {\\n    background-position: 1rem 0;\\n  }\\n  to {\\n    background-position: 0 0;\\n  }\\n}\\n\\n@keyframes progress-bar-stripes {\\n  from {\\n    background-position: 1rem 0;\\n  }\\n  to {\\n    background-position: 0 0;\\n  }\\n}\\n.progress {\\n  display: flex;\\n  height: 1rem;\\n  overflow: hidden;\\n  line-height: 0;\\n  font-size: 0.75rem;\\n  background-color: #e9ecef;\\n  border-radius: 0.25rem;\\n}\\n\\n.progress-bar {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  overflow: hidden;\\n  color: #fff;\\n  text-align: center;\\n  white-space: nowrap;\\n  background-color: #3A3335;\\n  transition: width 0.6s ease;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .progress-bar {\\n    transition: none;\\n  }\\n}\\n\\n.progress-bar-striped {\\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\\n  background-size: 1rem 1rem;\\n}\\n\\n.progress-bar-animated {\\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\\n          animation: progress-bar-stripes 1s linear infinite;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .progress-bar-animated {\\n    -webkit-animation: none;\\n            animation: none;\\n  }\\n}\\n\\n.media {\\n  display: flex;\\n  align-items: flex-start;\\n}\\n\\n.media-body {\\n  flex: 1;\\n}\\n\\n.list-group {\\n  display: flex;\\n  flex-direction: column;\\n  padding-left: 0;\\n  margin-bottom: 0;\\n  border-radius: 0.25rem;\\n}\\n\\n.list-group-item-action {\\n  width: 100%;\\n  color: #495057;\\n  text-align: inherit;\\n}\\n.list-group-item-action:hover, .list-group-item-action:focus {\\n  z-index: 1;\\n  color: #495057;\\n  text-decoration: none;\\n  background-color: #f8f9fa;\\n}\\n.list-group-item-action:active {\\n  color: #212529;\\n  background-color: #e9ecef;\\n}\\n\\n.list-group-item {\\n  position: relative;\\n  display: block;\\n  padding: 0.75rem 1.25rem;\\n  background-color: #fff;\\n  border: 1px solid rgba(0, 0, 0, 0.125);\\n}\\n.list-group-item:first-child {\\n  border-top-left-radius: inherit;\\n  border-top-right-radius: inherit;\\n}\\n.list-group-item:last-child {\\n  border-bottom-right-radius: inherit;\\n  border-bottom-left-radius: inherit;\\n}\\n.list-group-item.disabled, .list-group-item:disabled {\\n  color: #6c757d;\\n  pointer-events: none;\\n  background-color: #fff;\\n}\\n.list-group-item.active {\\n  z-index: 2;\\n  color: #fff;\\n  background-color: #3A3335;\\n  border-color: #3A3335;\\n}\\n.list-group-item + .list-group-item {\\n  border-top-width: 0;\\n}\\n.list-group-item + .list-group-item.active {\\n  margin-top: -1px;\\n  border-top-width: 1px;\\n}\\n\\n.list-group-horizontal {\\n  flex-direction: row;\\n}\\n.list-group-horizontal > .list-group-item:first-child {\\n  border-bottom-left-radius: 0.25rem;\\n  border-top-right-radius: 0;\\n}\\n.list-group-horizontal > .list-group-item:last-child {\\n  border-top-right-radius: 0.25rem;\\n  border-bottom-left-radius: 0;\\n}\\n.list-group-horizontal > .list-group-item.active {\\n  margin-top: 0;\\n}\\n.list-group-horizontal > .list-group-item + .list-group-item {\\n  border-top-width: 1px;\\n  border-left-width: 0;\\n}\\n.list-group-horizontal > .list-group-item + .list-group-item.active {\\n  margin-left: -1px;\\n  border-left-width: 1px;\\n}\\n\\n@media (min-width: 576px) {\\n  .list-group-horizontal-sm {\\n    flex-direction: row;\\n  }\\n  .list-group-horizontal-sm > .list-group-item:first-child {\\n    border-bottom-left-radius: 0.25rem;\\n    border-top-right-radius: 0;\\n  }\\n  .list-group-horizontal-sm > .list-group-item:last-child {\\n    border-top-right-radius: 0.25rem;\\n    border-bottom-left-radius: 0;\\n  }\\n  .list-group-horizontal-sm > .list-group-item.active {\\n    margin-top: 0;\\n  }\\n  .list-group-horizontal-sm > .list-group-item + .list-group-item {\\n    border-top-width: 1px;\\n    border-left-width: 0;\\n  }\\n  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\\n    margin-left: -1px;\\n    border-left-width: 1px;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .list-group-horizontal-md {\\n    flex-direction: row;\\n  }\\n  .list-group-horizontal-md > .list-group-item:first-child {\\n    border-bottom-left-radius: 0.25rem;\\n    border-top-right-radius: 0;\\n  }\\n  .list-group-horizontal-md > .list-group-item:last-child {\\n    border-top-right-radius: 0.25rem;\\n    border-bottom-left-radius: 0;\\n  }\\n  .list-group-horizontal-md > .list-group-item.active {\\n    margin-top: 0;\\n  }\\n  .list-group-horizontal-md > .list-group-item + .list-group-item {\\n    border-top-width: 1px;\\n    border-left-width: 0;\\n  }\\n  .list-group-horizontal-md > .list-group-item + .list-group-item.active {\\n    margin-left: -1px;\\n    border-left-width: 1px;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .list-group-horizontal-lg {\\n    flex-direction: row;\\n  }\\n  .list-group-horizontal-lg > .list-group-item:first-child {\\n    border-bottom-left-radius: 0.25rem;\\n    border-top-right-radius: 0;\\n  }\\n  .list-group-horizontal-lg > .list-group-item:last-child {\\n    border-top-right-radius: 0.25rem;\\n    border-bottom-left-radius: 0;\\n  }\\n  .list-group-horizontal-lg > .list-group-item.active {\\n    margin-top: 0;\\n  }\\n  .list-group-horizontal-lg > .list-group-item + .list-group-item {\\n    border-top-width: 1px;\\n    border-left-width: 0;\\n  }\\n  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\\n    margin-left: -1px;\\n    border-left-width: 1px;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .list-group-horizontal-xl {\\n    flex-direction: row;\\n  }\\n  .list-group-horizontal-xl > .list-group-item:first-child {\\n    border-bottom-left-radius: 0.25rem;\\n    border-top-right-radius: 0;\\n  }\\n  .list-group-horizontal-xl > .list-group-item:last-child {\\n    border-top-right-radius: 0.25rem;\\n    border-bottom-left-radius: 0;\\n  }\\n  .list-group-horizontal-xl > .list-group-item.active {\\n    margin-top: 0;\\n  }\\n  .list-group-horizontal-xl > .list-group-item + .list-group-item {\\n    border-top-width: 1px;\\n    border-left-width: 0;\\n  }\\n  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\\n    margin-left: -1px;\\n    border-left-width: 1px;\\n  }\\n}\\n.list-group-flush {\\n  border-radius: 0;\\n}\\n.list-group-flush > .list-group-item {\\n  border-width: 0 0 1px;\\n}\\n.list-group-flush > .list-group-item:last-child {\\n  border-bottom-width: 0;\\n}\\n\\n.list-group-item-primary {\\n  color: #1e1b1c;\\n  background-color: #c8c6c6;\\n}\\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\\n  color: #1e1b1c;\\n  background-color: #bbb9b9;\\n}\\n.list-group-item-primary.list-group-item-action.active {\\n  color: #fff;\\n  background-color: #1e1b1c;\\n  border-color: #1e1b1c;\\n}\\n\\n.list-group-item-secondary {\\n  color: #3b3d36;\\n  background-color: #d7d8d5;\\n}\\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\\n  color: #3b3d36;\\n  background-color: #caccc8;\\n}\\n.list-group-item-secondary.list-group-item-action.active {\\n  color: #fff;\\n  background-color: #3b3d36;\\n  border-color: #3b3d36;\\n}\\n\\n.list-group-item-success {\\n  color: #227168;\\n  background-color: #caf4f0;\\n}\\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\\n  color: #227168;\\n  background-color: #b5f0ea;\\n}\\n.list-group-item-success.list-group-item-action.active {\\n  color: #fff;\\n  background-color: #227168;\\n  border-color: #227168;\\n}\\n\\n.list-group-item-info {\\n  color: #616a58;\\n  background-color: #ecf0e7;\\n}\\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\\n  color: #616a58;\\n  background-color: #e0e6d7;\\n}\\n.list-group-item-info.list-group-item-action.active {\\n  color: #fff;\\n  background-color: #616a58;\\n  border-color: #616a58;\\n}\\n\\n.list-group-item-warning {\\n  color: #7d634f;\\n  background-color: #fbede2;\\n}\\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\\n  color: #7d634f;\\n  background-color: #f8dfcc;\\n}\\n.list-group-item-warning.list-group-item-action.active {\\n  color: #fff;\\n  background-color: #7d634f;\\n  border-color: #7d634f;\\n}\\n\\n.list-group-item-danger {\\n  color: #70102f;\\n  background-color: #f4c0d1;\\n}\\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\\n  color: #70102f;\\n  background-color: #f0aac1;\\n}\\n.list-group-item-danger.list-group-item-action.active {\\n  color: #fff;\\n  background-color: #70102f;\\n  border-color: #70102f;\\n}\\n\\n.list-group-item-light {\\n  color: #818182;\\n  background-color: #fdfdfe;\\n}\\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\\n  color: #818182;\\n  background-color: #ececf6;\\n}\\n.list-group-item-light.list-group-item-action.active {\\n  color: #fff;\\n  background-color: #818182;\\n  border-color: #818182;\\n}\\n\\n.list-group-item-dark {\\n  color: #1b1e21;\\n  background-color: #c6c8ca;\\n}\\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\\n  color: #1b1e21;\\n  background-color: #b9bbbe;\\n}\\n.list-group-item-dark.list-group-item-action.active {\\n  color: #fff;\\n  background-color: #1b1e21;\\n  border-color: #1b1e21;\\n}\\n\\n.close {\\n  float: right;\\n  font-size: 1.5rem;\\n  font-weight: 700;\\n  line-height: 1;\\n  color: #000;\\n  text-shadow: 0 1px 0 #fff;\\n  opacity: 0.5;\\n}\\n.close:hover {\\n  color: #000;\\n  text-decoration: none;\\n}\\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\\n  opacity: 0.75;\\n}\\n\\nbutton.close {\\n  padding: 0;\\n  background-color: transparent;\\n  border: 0;\\n}\\n\\na.close.disabled {\\n  pointer-events: none;\\n}\\n\\n.toast {\\n  flex-basis: 350px;\\n  max-width: 350px;\\n  font-size: 0.875rem;\\n  background-color: rgba(255, 255, 255, 0.85);\\n  background-clip: padding-box;\\n  border: 1px solid rgba(0, 0, 0, 0.1);\\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\\n  opacity: 0;\\n  border-radius: 0.25rem;\\n}\\n.toast:not(:last-child) {\\n  margin-bottom: 0.75rem;\\n}\\n.toast.showing {\\n  opacity: 1;\\n}\\n.toast.show {\\n  display: block;\\n  opacity: 1;\\n}\\n.toast.hide {\\n  display: none;\\n}\\n\\n.toast-header {\\n  display: flex;\\n  align-items: center;\\n  padding: 0.25rem 0.75rem;\\n  color: #6c757d;\\n  background-color: rgba(255, 255, 255, 0.85);\\n  background-clip: padding-box;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\\n  border-top-left-radius: calc(0.25rem - 1px);\\n  border-top-right-radius: calc(0.25rem - 1px);\\n}\\n\\n.toast-body {\\n  padding: 0.75rem;\\n}\\n\\n.modal-open {\\n  overflow: hidden;\\n}\\n.modal-open .modal {\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n}\\n\\n.modal {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: 1050;\\n  display: none;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  outline: 0;\\n}\\n\\n.modal-dialog {\\n  position: relative;\\n  width: auto;\\n  margin: 0.5rem;\\n  pointer-events: none;\\n}\\n.modal.fade .modal-dialog {\\n  transition: transform 0.3s ease-out;\\n  transform: translate(0, -50px);\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .modal.fade .modal-dialog {\\n    transition: none;\\n  }\\n}\\n.modal.show .modal-dialog {\\n  transform: none;\\n}\\n.modal.modal-static .modal-dialog {\\n  transform: scale(1.02);\\n}\\n\\n.modal-dialog-scrollable {\\n  display: flex;\\n  max-height: calc(100% - 1rem);\\n}\\n.modal-dialog-scrollable .modal-content {\\n  max-height: calc(100vh - 1rem);\\n  overflow: hidden;\\n}\\n.modal-dialog-scrollable .modal-header,\\n.modal-dialog-scrollable .modal-footer {\\n  flex-shrink: 0;\\n}\\n.modal-dialog-scrollable .modal-body {\\n  overflow-y: auto;\\n}\\n\\n.modal-dialog-centered {\\n  display: flex;\\n  align-items: center;\\n  min-height: calc(100% - 1rem);\\n}\\n.modal-dialog-centered::before {\\n  display: block;\\n  height: calc(100vh - 1rem);\\n  height: -webkit-min-content;\\n  height: -moz-min-content;\\n  height: min-content;\\n  content: \\\"\\\";\\n}\\n.modal-dialog-centered.modal-dialog-scrollable {\\n  flex-direction: column;\\n  justify-content: center;\\n  height: 100%;\\n}\\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\\n  max-height: none;\\n}\\n.modal-dialog-centered.modal-dialog-scrollable::before {\\n  content: none;\\n}\\n\\n.modal-content {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  pointer-events: auto;\\n  background-color: #fff;\\n  background-clip: padding-box;\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  border-radius: 0.3rem;\\n  outline: 0;\\n}\\n\\n.modal-backdrop {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: 1040;\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: #000;\\n}\\n.modal-backdrop.fade {\\n  opacity: 0;\\n}\\n.modal-backdrop.show {\\n  opacity: 0.5;\\n}\\n\\n.modal-header {\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  padding: 1rem 1rem;\\n  border-bottom: 1px solid #dee2e6;\\n  border-top-left-radius: calc(0.3rem - 1px);\\n  border-top-right-radius: calc(0.3rem - 1px);\\n}\\n.modal-header .close {\\n  padding: 1rem 1rem;\\n  margin: -1rem -1rem -1rem auto;\\n}\\n\\n.modal-title {\\n  margin-bottom: 0;\\n  line-height: 1.5;\\n}\\n\\n.modal-body {\\n  position: relative;\\n  flex: 1 1 auto;\\n  padding: 1rem;\\n}\\n\\n.modal-footer {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: flex-end;\\n  padding: 0.75rem;\\n  border-top: 1px solid #dee2e6;\\n  border-bottom-right-radius: calc(0.3rem - 1px);\\n  border-bottom-left-radius: calc(0.3rem - 1px);\\n}\\n.modal-footer > * {\\n  margin: 0.25rem;\\n}\\n\\n.modal-scrollbar-measure {\\n  position: absolute;\\n  top: -9999px;\\n  width: 50px;\\n  height: 50px;\\n  overflow: scroll;\\n}\\n\\n@media (min-width: 576px) {\\n  .modal-dialog {\\n    max-width: 500px;\\n    margin: 1.75rem auto;\\n  }\\n\\n  .modal-dialog-scrollable {\\n    max-height: calc(100% - 3.5rem);\\n  }\\n  .modal-dialog-scrollable .modal-content {\\n    max-height: calc(100vh - 3.5rem);\\n  }\\n\\n  .modal-dialog-centered {\\n    min-height: calc(100% - 3.5rem);\\n  }\\n  .modal-dialog-centered::before {\\n    height: calc(100vh - 3.5rem);\\n    height: -webkit-min-content;\\n    height: -moz-min-content;\\n    height: min-content;\\n  }\\n\\n  .modal-sm {\\n    max-width: 300px;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .modal-lg,\\n.modal-xl {\\n    max-width: 800px;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .modal-xl {\\n    max-width: 1140px;\\n  }\\n}\\n.tooltip {\\n  position: absolute;\\n  z-index: 1070;\\n  display: block;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  line-height: 1.5;\\n  text-align: left;\\n  text-align: start;\\n  text-decoration: none;\\n  text-shadow: none;\\n  text-transform: none;\\n  letter-spacing: normal;\\n  word-break: normal;\\n  word-spacing: normal;\\n  white-space: normal;\\n  line-break: auto;\\n  font-size: 0.875rem;\\n  word-wrap: break-word;\\n  opacity: 0;\\n}\\n.tooltip.show {\\n  opacity: 0.9;\\n}\\n.tooltip .arrow {\\n  position: absolute;\\n  display: block;\\n  width: 0.8rem;\\n  height: 0.4rem;\\n}\\n.tooltip .arrow::before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  border-color: transparent;\\n  border-style: solid;\\n}\\n\\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=top] {\\n  padding: 0.4rem 0;\\n}\\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=top] .arrow {\\n  bottom: 0;\\n}\\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=top] .arrow::before {\\n  top: 0;\\n  border-width: 0.4rem 0.4rem 0;\\n  border-top-color: #000;\\n}\\n\\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=right] {\\n  padding: 0 0.4rem;\\n}\\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=right] .arrow {\\n  left: 0;\\n  width: 0.4rem;\\n  height: 0.8rem;\\n}\\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=right] .arrow::before {\\n  right: 0;\\n  border-width: 0.4rem 0.4rem 0.4rem 0;\\n  border-right-color: #000;\\n}\\n\\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=bottom] {\\n  padding: 0.4rem 0;\\n}\\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=bottom] .arrow {\\n  top: 0;\\n}\\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=bottom] .arrow::before {\\n  bottom: 0;\\n  border-width: 0 0.4rem 0.4rem;\\n  border-bottom-color: #000;\\n}\\n\\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=left] {\\n  padding: 0 0.4rem;\\n}\\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=left] .arrow {\\n  right: 0;\\n  width: 0.4rem;\\n  height: 0.8rem;\\n}\\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=left] .arrow::before {\\n  left: 0;\\n  border-width: 0.4rem 0 0.4rem 0.4rem;\\n  border-left-color: #000;\\n}\\n\\n.tooltip-inner {\\n  max-width: 200px;\\n  padding: 0.25rem 0.5rem;\\n  color: #fff;\\n  text-align: center;\\n  background-color: #000;\\n  border-radius: 0.25rem;\\n}\\n\\n.popover {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 1060;\\n  display: block;\\n  max-width: 276px;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  line-height: 1.5;\\n  text-align: left;\\n  text-align: start;\\n  text-decoration: none;\\n  text-shadow: none;\\n  text-transform: none;\\n  letter-spacing: normal;\\n  word-break: normal;\\n  word-spacing: normal;\\n  white-space: normal;\\n  line-break: auto;\\n  font-size: 0.875rem;\\n  word-wrap: break-word;\\n  background-color: #fff;\\n  background-clip: padding-box;\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  border-radius: 0.3rem;\\n}\\n.popover .arrow {\\n  position: absolute;\\n  display: block;\\n  width: 1rem;\\n  height: 0.5rem;\\n  margin: 0 0.3rem;\\n}\\n.popover .arrow::before, .popover .arrow::after {\\n  position: absolute;\\n  display: block;\\n  content: \\\"\\\";\\n  border-color: transparent;\\n  border-style: solid;\\n}\\n\\n.bs-popover-top, .bs-popover-auto[x-placement^=top] {\\n  margin-bottom: 0.5rem;\\n}\\n.bs-popover-top > .arrow, .bs-popover-auto[x-placement^=top] > .arrow {\\n  bottom: calc(-0.5rem - 1px);\\n}\\n.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=top] > .arrow::before {\\n  bottom: 0;\\n  border-width: 0.5rem 0.5rem 0;\\n  border-top-color: rgba(0, 0, 0, 0.25);\\n}\\n.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=top] > .arrow::after {\\n  bottom: 1px;\\n  border-width: 0.5rem 0.5rem 0;\\n  border-top-color: #fff;\\n}\\n\\n.bs-popover-right, .bs-popover-auto[x-placement^=right] {\\n  margin-left: 0.5rem;\\n}\\n.bs-popover-right > .arrow, .bs-popover-auto[x-placement^=right] > .arrow {\\n  left: calc(-0.5rem - 1px);\\n  width: 0.5rem;\\n  height: 1rem;\\n  margin: 0.3rem 0;\\n}\\n.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=right] > .arrow::before {\\n  left: 0;\\n  border-width: 0.5rem 0.5rem 0.5rem 0;\\n  border-right-color: rgba(0, 0, 0, 0.25);\\n}\\n.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=right] > .arrow::after {\\n  left: 1px;\\n  border-width: 0.5rem 0.5rem 0.5rem 0;\\n  border-right-color: #fff;\\n}\\n\\n.bs-popover-bottom, .bs-popover-auto[x-placement^=bottom] {\\n  margin-top: 0.5rem;\\n}\\n.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=bottom] > .arrow {\\n  top: calc(-0.5rem - 1px);\\n}\\n.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=bottom] > .arrow::before {\\n  top: 0;\\n  border-width: 0 0.5rem 0.5rem 0.5rem;\\n  border-bottom-color: rgba(0, 0, 0, 0.25);\\n}\\n.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=bottom] > .arrow::after {\\n  top: 1px;\\n  border-width: 0 0.5rem 0.5rem 0.5rem;\\n  border-bottom-color: #fff;\\n}\\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=bottom] .popover-header::before {\\n  position: absolute;\\n  top: 0;\\n  left: 50%;\\n  display: block;\\n  width: 1rem;\\n  margin-left: -0.5rem;\\n  content: \\\"\\\";\\n  border-bottom: 1px solid #f7f7f7;\\n}\\n\\n.bs-popover-left, .bs-popover-auto[x-placement^=left] {\\n  margin-right: 0.5rem;\\n}\\n.bs-popover-left > .arrow, .bs-popover-auto[x-placement^=left] > .arrow {\\n  right: calc(-0.5rem - 1px);\\n  width: 0.5rem;\\n  height: 1rem;\\n  margin: 0.3rem 0;\\n}\\n.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=left] > .arrow::before {\\n  right: 0;\\n  border-width: 0.5rem 0 0.5rem 0.5rem;\\n  border-left-color: rgba(0, 0, 0, 0.25);\\n}\\n.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=left] > .arrow::after {\\n  right: 1px;\\n  border-width: 0.5rem 0 0.5rem 0.5rem;\\n  border-left-color: #fff;\\n}\\n\\n.popover-header {\\n  padding: 0.5rem 0.75rem;\\n  margin-bottom: 0;\\n  font-size: 1rem;\\n  background-color: #f7f7f7;\\n  border-bottom: 1px solid #ebebeb;\\n  border-top-left-radius: calc(0.3rem - 1px);\\n  border-top-right-radius: calc(0.3rem - 1px);\\n}\\n.popover-header:empty {\\n  display: none;\\n}\\n\\n.popover-body {\\n  padding: 0.5rem 0.75rem;\\n  color: #212529;\\n}\\n\\n.carousel {\\n  position: relative;\\n}\\n\\n.carousel.pointer-event {\\n  touch-action: pan-y;\\n}\\n\\n.carousel-inner {\\n  position: relative;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n.carousel-inner::after {\\n  display: block;\\n  clear: both;\\n  content: \\\"\\\";\\n}\\n\\n.carousel-item {\\n  position: relative;\\n  display: none;\\n  float: left;\\n  width: 100%;\\n  margin-right: -100%;\\n  -webkit-backface-visibility: hidden;\\n          backface-visibility: hidden;\\n  transition: transform 0.6s ease-in-out;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .carousel-item {\\n    transition: none;\\n  }\\n}\\n\\n.carousel-item.active,\\n.carousel-item-next,\\n.carousel-item-prev {\\n  display: block;\\n}\\n\\n.carousel-item-next:not(.carousel-item-left),\\n.active.carousel-item-right {\\n  transform: translateX(100%);\\n}\\n\\n.carousel-item-prev:not(.carousel-item-right),\\n.active.carousel-item-left {\\n  transform: translateX(-100%);\\n}\\n\\n.carousel-fade .carousel-item {\\n  opacity: 0;\\n  transition-property: opacity;\\n  transform: none;\\n}\\n.carousel-fade .carousel-item.active,\\n.carousel-fade .carousel-item-next.carousel-item-left,\\n.carousel-fade .carousel-item-prev.carousel-item-right {\\n  z-index: 1;\\n  opacity: 1;\\n}\\n.carousel-fade .active.carousel-item-left,\\n.carousel-fade .active.carousel-item-right {\\n  z-index: 0;\\n  opacity: 0;\\n  transition: opacity 0s 0.6s;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .carousel-fade .active.carousel-item-left,\\n.carousel-fade .active.carousel-item-right {\\n    transition: none;\\n  }\\n}\\n\\n.carousel-control-prev,\\n.carousel-control-next {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  z-index: 1;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 15%;\\n  color: #fff;\\n  text-align: center;\\n  opacity: 0.5;\\n  transition: opacity 0.15s ease;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .carousel-control-prev,\\n.carousel-control-next {\\n    transition: none;\\n  }\\n}\\n.carousel-control-prev:hover, .carousel-control-prev:focus,\\n.carousel-control-next:hover,\\n.carousel-control-next:focus {\\n  color: #fff;\\n  text-decoration: none;\\n  outline: 0;\\n  opacity: 0.9;\\n}\\n\\n.carousel-control-prev {\\n  left: 0;\\n}\\n\\n.carousel-control-next {\\n  right: 0;\\n}\\n\\n.carousel-control-prev-icon,\\n.carousel-control-next-icon {\\n  display: inline-block;\\n  width: 20px;\\n  height: 20px;\\n  background: no-repeat 50%/100% 100%;\\n}\\n\\n.carousel-control-prev-icon {\\n  background-image: url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\\\");\\n}\\n\\n.carousel-control-next-icon {\\n  background-image: url(\\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\\\");\\n}\\n\\n.carousel-indicators {\\n  position: absolute;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 15;\\n  display: flex;\\n  justify-content: center;\\n  padding-left: 0;\\n  margin-right: 15%;\\n  margin-left: 15%;\\n  list-style: none;\\n}\\n.carousel-indicators li {\\n  box-sizing: content-box;\\n  flex: 0 1 auto;\\n  width: 30px;\\n  height: 3px;\\n  margin-right: 3px;\\n  margin-left: 3px;\\n  text-indent: -999px;\\n  cursor: pointer;\\n  background-color: #fff;\\n  background-clip: padding-box;\\n  border-top: 10px solid transparent;\\n  border-bottom: 10px solid transparent;\\n  opacity: 0.5;\\n  transition: opacity 0.6s ease;\\n}\\n@media (prefers-reduced-motion: reduce) {\\n  .carousel-indicators li {\\n    transition: none;\\n  }\\n}\\n.carousel-indicators .active {\\n  opacity: 1;\\n}\\n\\n.carousel-caption {\\n  position: absolute;\\n  right: 15%;\\n  bottom: 20px;\\n  left: 15%;\\n  z-index: 10;\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n  color: #fff;\\n  text-align: center;\\n}\\n\\n@-webkit-keyframes spinner-border {\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n@keyframes spinner-border {\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n.spinner-border {\\n  display: inline-block;\\n  width: 2rem;\\n  height: 2rem;\\n  vertical-align: text-bottom;\\n  border: 0.25em solid currentColor;\\n  border-right-color: transparent;\\n  border-radius: 50%;\\n  -webkit-animation: spinner-border 0.75s linear infinite;\\n          animation: spinner-border 0.75s linear infinite;\\n}\\n\\n.spinner-border-sm {\\n  width: 1rem;\\n  height: 1rem;\\n  border-width: 0.2em;\\n}\\n\\n@-webkit-keyframes spinner-grow {\\n  0% {\\n    transform: scale(0);\\n  }\\n  50% {\\n    opacity: 1;\\n    transform: none;\\n  }\\n}\\n\\n@keyframes spinner-grow {\\n  0% {\\n    transform: scale(0);\\n  }\\n  50% {\\n    opacity: 1;\\n    transform: none;\\n  }\\n}\\n.spinner-grow {\\n  display: inline-block;\\n  width: 2rem;\\n  height: 2rem;\\n  vertical-align: text-bottom;\\n  background-color: currentColor;\\n  border-radius: 50%;\\n  opacity: 0;\\n  -webkit-animation: spinner-grow 0.75s linear infinite;\\n          animation: spinner-grow 0.75s linear infinite;\\n}\\n\\n.spinner-grow-sm {\\n  width: 1rem;\\n  height: 1rem;\\n}\\n\\n.align-baseline {\\n  vertical-align: baseline !important;\\n}\\n\\n.align-top {\\n  vertical-align: top !important;\\n}\\n\\n.align-middle {\\n  vertical-align: middle !important;\\n}\\n\\n.align-bottom {\\n  vertical-align: bottom !important;\\n}\\n\\n.align-text-bottom {\\n  vertical-align: text-bottom !important;\\n}\\n\\n.align-text-top {\\n  vertical-align: text-top !important;\\n}\\n\\n.bg-primary {\\n  background-color: #3A3335 !important;\\n}\\n\\na.bg-primary:hover, a.bg-primary:focus,\\nbutton.bg-primary:hover,\\nbutton.bg-primary:focus {\\n  background-color: #1f1b1c !important;\\n}\\n\\n.bg-secondary {\\n  background-color: #717568 !important;\\n}\\n\\na.bg-secondary:hover, a.bg-secondary:focus,\\nbutton.bg-secondary:hover,\\nbutton.bg-secondary:focus {\\n  background-color: #575a50 !important;\\n}\\n\\n.bg-success {\\n  background-color: #42D9C8 !important;\\n}\\n\\na.bg-success:hover, a.bg-success:focus,\\nbutton.bg-success:hover,\\nbutton.bg-success:focus {\\n  background-color: #27c1b0 !important;\\n}\\n\\n.bg-info {\\n  background-color: #BACBA9 !important;\\n}\\n\\na.bg-info:hover, a.bg-info:focus,\\nbutton.bg-info:hover,\\nbutton.bg-info:focus {\\n  background-color: #a1b889 !important;\\n}\\n\\n.bg-warning {\\n  background-color: #F1BF98 !important;\\n}\\n\\na.bg-warning:hover, a.bg-warning:focus,\\nbutton.bg-warning:hover,\\nbutton.bg-warning:focus {\\n  background-color: #eba36b !important;\\n}\\n\\n.bg-danger {\\n  background-color: #D81E5B !important;\\n}\\n\\na.bg-danger:hover, a.bg-danger:focus,\\nbutton.bg-danger:hover,\\nbutton.bg-danger:focus {\\n  background-color: #ab1848 !important;\\n}\\n\\n.bg-light {\\n  background-color: #f8f9fa !important;\\n}\\n\\na.bg-light:hover, a.bg-light:focus,\\nbutton.bg-light:hover,\\nbutton.bg-light:focus {\\n  background-color: #dae0e5 !important;\\n}\\n\\n.bg-dark {\\n  background-color: #343a40 !important;\\n}\\n\\na.bg-dark:hover, a.bg-dark:focus,\\nbutton.bg-dark:hover,\\nbutton.bg-dark:focus {\\n  background-color: #1d2124 !important;\\n}\\n\\n.bg-white {\\n  background-color: #fff !important;\\n}\\n\\n.bg-transparent {\\n  background-color: transparent !important;\\n}\\n\\n.border {\\n  border: 1px solid #dee2e6 !important;\\n}\\n\\n.border-top {\\n  border-top: 1px solid #dee2e6 !important;\\n}\\n\\n.border-right {\\n  border-right: 1px solid #dee2e6 !important;\\n}\\n\\n.border-bottom {\\n  border-bottom: 1px solid #dee2e6 !important;\\n}\\n\\n.border-left {\\n  border-left: 1px solid #dee2e6 !important;\\n}\\n\\n.border-0 {\\n  border: 0 !important;\\n}\\n\\n.border-top-0 {\\n  border-top: 0 !important;\\n}\\n\\n.border-right-0 {\\n  border-right: 0 !important;\\n}\\n\\n.border-bottom-0 {\\n  border-bottom: 0 !important;\\n}\\n\\n.border-left-0 {\\n  border-left: 0 !important;\\n}\\n\\n.border-primary {\\n  border-color: #3A3335 !important;\\n}\\n\\n.border-secondary {\\n  border-color: #717568 !important;\\n}\\n\\n.border-success {\\n  border-color: #42D9C8 !important;\\n}\\n\\n.border-info {\\n  border-color: #BACBA9 !important;\\n}\\n\\n.border-warning {\\n  border-color: #F1BF98 !important;\\n}\\n\\n.border-danger {\\n  border-color: #D81E5B !important;\\n}\\n\\n.border-light {\\n  border-color: #f8f9fa !important;\\n}\\n\\n.border-dark {\\n  border-color: #343a40 !important;\\n}\\n\\n.border-white {\\n  border-color: #fff !important;\\n}\\n\\n.rounded-sm {\\n  border-radius: 0.2rem !important;\\n}\\n\\n.rounded {\\n  border-radius: 0.25rem !important;\\n}\\n\\n.rounded-top {\\n  border-top-left-radius: 0.25rem !important;\\n  border-top-right-radius: 0.25rem !important;\\n}\\n\\n.rounded-right {\\n  border-top-right-radius: 0.25rem !important;\\n  border-bottom-right-radius: 0.25rem !important;\\n}\\n\\n.rounded-bottom {\\n  border-bottom-right-radius: 0.25rem !important;\\n  border-bottom-left-radius: 0.25rem !important;\\n}\\n\\n.rounded-left {\\n  border-top-left-radius: 0.25rem !important;\\n  border-bottom-left-radius: 0.25rem !important;\\n}\\n\\n.rounded-lg {\\n  border-radius: 0.3rem !important;\\n}\\n\\n.rounded-circle {\\n  border-radius: 50% !important;\\n}\\n\\n.rounded-pill {\\n  border-radius: 50rem !important;\\n}\\n\\n.rounded-0 {\\n  border-radius: 0 !important;\\n}\\n\\n.clearfix::after {\\n  display: block;\\n  clear: both;\\n  content: \\\"\\\";\\n}\\n\\n.d-none {\\n  display: none !important;\\n}\\n\\n.d-inline {\\n  display: inline !important;\\n}\\n\\n.d-inline-block {\\n  display: inline-block !important;\\n}\\n\\n.d-block {\\n  display: block !important;\\n}\\n\\n.d-table {\\n  display: table !important;\\n}\\n\\n.d-table-row {\\n  display: table-row !important;\\n}\\n\\n.d-table-cell {\\n  display: table-cell !important;\\n}\\n\\n.d-flex {\\n  display: flex !important;\\n}\\n\\n.d-inline-flex {\\n  display: inline-flex !important;\\n}\\n\\n@media (min-width: 576px) {\\n  .d-sm-none {\\n    display: none !important;\\n  }\\n\\n  .d-sm-inline {\\n    display: inline !important;\\n  }\\n\\n  .d-sm-inline-block {\\n    display: inline-block !important;\\n  }\\n\\n  .d-sm-block {\\n    display: block !important;\\n  }\\n\\n  .d-sm-table {\\n    display: table !important;\\n  }\\n\\n  .d-sm-table-row {\\n    display: table-row !important;\\n  }\\n\\n  .d-sm-table-cell {\\n    display: table-cell !important;\\n  }\\n\\n  .d-sm-flex {\\n    display: flex !important;\\n  }\\n\\n  .d-sm-inline-flex {\\n    display: inline-flex !important;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .d-md-none {\\n    display: none !important;\\n  }\\n\\n  .d-md-inline {\\n    display: inline !important;\\n  }\\n\\n  .d-md-inline-block {\\n    display: inline-block !important;\\n  }\\n\\n  .d-md-block {\\n    display: block !important;\\n  }\\n\\n  .d-md-table {\\n    display: table !important;\\n  }\\n\\n  .d-md-table-row {\\n    display: table-row !important;\\n  }\\n\\n  .d-md-table-cell {\\n    display: table-cell !important;\\n  }\\n\\n  .d-md-flex {\\n    display: flex !important;\\n  }\\n\\n  .d-md-inline-flex {\\n    display: inline-flex !important;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .d-lg-none {\\n    display: none !important;\\n  }\\n\\n  .d-lg-inline {\\n    display: inline !important;\\n  }\\n\\n  .d-lg-inline-block {\\n    display: inline-block !important;\\n  }\\n\\n  .d-lg-block {\\n    display: block !important;\\n  }\\n\\n  .d-lg-table {\\n    display: table !important;\\n  }\\n\\n  .d-lg-table-row {\\n    display: table-row !important;\\n  }\\n\\n  .d-lg-table-cell {\\n    display: table-cell !important;\\n  }\\n\\n  .d-lg-flex {\\n    display: flex !important;\\n  }\\n\\n  .d-lg-inline-flex {\\n    display: inline-flex !important;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .d-xl-none {\\n    display: none !important;\\n  }\\n\\n  .d-xl-inline {\\n    display: inline !important;\\n  }\\n\\n  .d-xl-inline-block {\\n    display: inline-block !important;\\n  }\\n\\n  .d-xl-block {\\n    display: block !important;\\n  }\\n\\n  .d-xl-table {\\n    display: table !important;\\n  }\\n\\n  .d-xl-table-row {\\n    display: table-row !important;\\n  }\\n\\n  .d-xl-table-cell {\\n    display: table-cell !important;\\n  }\\n\\n  .d-xl-flex {\\n    display: flex !important;\\n  }\\n\\n  .d-xl-inline-flex {\\n    display: inline-flex !important;\\n  }\\n}\\n@media print {\\n  .d-print-none {\\n    display: none !important;\\n  }\\n\\n  .d-print-inline {\\n    display: inline !important;\\n  }\\n\\n  .d-print-inline-block {\\n    display: inline-block !important;\\n  }\\n\\n  .d-print-block {\\n    display: block !important;\\n  }\\n\\n  .d-print-table {\\n    display: table !important;\\n  }\\n\\n  .d-print-table-row {\\n    display: table-row !important;\\n  }\\n\\n  .d-print-table-cell {\\n    display: table-cell !important;\\n  }\\n\\n  .d-print-flex {\\n    display: flex !important;\\n  }\\n\\n  .d-print-inline-flex {\\n    display: inline-flex !important;\\n  }\\n}\\n.embed-responsive {\\n  position: relative;\\n  display: block;\\n  width: 100%;\\n  padding: 0;\\n  overflow: hidden;\\n}\\n.embed-responsive::before {\\n  display: block;\\n  content: \\\"\\\";\\n}\\n.embed-responsive .embed-responsive-item,\\n.embed-responsive iframe,\\n.embed-responsive embed,\\n.embed-responsive object,\\n.embed-responsive video {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  border: 0;\\n}\\n\\n.embed-responsive-21by9::before {\\n  padding-top: 42.8571428571%;\\n}\\n\\n.embed-responsive-16by9::before {\\n  padding-top: 56.25%;\\n}\\n\\n.embed-responsive-4by3::before {\\n  padding-top: 75%;\\n}\\n\\n.embed-responsive-1by1::before {\\n  padding-top: 100%;\\n}\\n\\n.flex-row {\\n  flex-direction: row !important;\\n}\\n\\n.flex-column {\\n  flex-direction: column !important;\\n}\\n\\n.flex-row-reverse {\\n  flex-direction: row-reverse !important;\\n}\\n\\n.flex-column-reverse {\\n  flex-direction: column-reverse !important;\\n}\\n\\n.flex-wrap {\\n  flex-wrap: wrap !important;\\n}\\n\\n.flex-nowrap {\\n  flex-wrap: nowrap !important;\\n}\\n\\n.flex-wrap-reverse {\\n  flex-wrap: wrap-reverse !important;\\n}\\n\\n.flex-fill {\\n  flex: 1 1 auto !important;\\n}\\n\\n.flex-grow-0 {\\n  flex-grow: 0 !important;\\n}\\n\\n.flex-grow-1 {\\n  flex-grow: 1 !important;\\n}\\n\\n.flex-shrink-0 {\\n  flex-shrink: 0 !important;\\n}\\n\\n.flex-shrink-1 {\\n  flex-shrink: 1 !important;\\n}\\n\\n.justify-content-start {\\n  justify-content: flex-start !important;\\n}\\n\\n.justify-content-end {\\n  justify-content: flex-end !important;\\n}\\n\\n.justify-content-center {\\n  justify-content: center !important;\\n}\\n\\n.justify-content-between {\\n  justify-content: space-between !important;\\n}\\n\\n.justify-content-around {\\n  justify-content: space-around !important;\\n}\\n\\n.align-items-start {\\n  align-items: flex-start !important;\\n}\\n\\n.align-items-end {\\n  align-items: flex-end !important;\\n}\\n\\n.align-items-center {\\n  align-items: center !important;\\n}\\n\\n.align-items-baseline {\\n  align-items: baseline !important;\\n}\\n\\n.align-items-stretch {\\n  align-items: stretch !important;\\n}\\n\\n.align-content-start {\\n  align-content: flex-start !important;\\n}\\n\\n.align-content-end {\\n  align-content: flex-end !important;\\n}\\n\\n.align-content-center {\\n  align-content: center !important;\\n}\\n\\n.align-content-between {\\n  align-content: space-between !important;\\n}\\n\\n.align-content-around {\\n  align-content: space-around !important;\\n}\\n\\n.align-content-stretch {\\n  align-content: stretch !important;\\n}\\n\\n.align-self-auto {\\n  align-self: auto !important;\\n}\\n\\n.align-self-start {\\n  align-self: flex-start !important;\\n}\\n\\n.align-self-end {\\n  align-self: flex-end !important;\\n}\\n\\n.align-self-center {\\n  align-self: center !important;\\n}\\n\\n.align-self-baseline {\\n  align-self: baseline !important;\\n}\\n\\n.align-self-stretch {\\n  align-self: stretch !important;\\n}\\n\\n@media (min-width: 576px) {\\n  .flex-sm-row {\\n    flex-direction: row !important;\\n  }\\n\\n  .flex-sm-column {\\n    flex-direction: column !important;\\n  }\\n\\n  .flex-sm-row-reverse {\\n    flex-direction: row-reverse !important;\\n  }\\n\\n  .flex-sm-column-reverse {\\n    flex-direction: column-reverse !important;\\n  }\\n\\n  .flex-sm-wrap {\\n    flex-wrap: wrap !important;\\n  }\\n\\n  .flex-sm-nowrap {\\n    flex-wrap: nowrap !important;\\n  }\\n\\n  .flex-sm-wrap-reverse {\\n    flex-wrap: wrap-reverse !important;\\n  }\\n\\n  .flex-sm-fill {\\n    flex: 1 1 auto !important;\\n  }\\n\\n  .flex-sm-grow-0 {\\n    flex-grow: 0 !important;\\n  }\\n\\n  .flex-sm-grow-1 {\\n    flex-grow: 1 !important;\\n  }\\n\\n  .flex-sm-shrink-0 {\\n    flex-shrink: 0 !important;\\n  }\\n\\n  .flex-sm-shrink-1 {\\n    flex-shrink: 1 !important;\\n  }\\n\\n  .justify-content-sm-start {\\n    justify-content: flex-start !important;\\n  }\\n\\n  .justify-content-sm-end {\\n    justify-content: flex-end !important;\\n  }\\n\\n  .justify-content-sm-center {\\n    justify-content: center !important;\\n  }\\n\\n  .justify-content-sm-between {\\n    justify-content: space-between !important;\\n  }\\n\\n  .justify-content-sm-around {\\n    justify-content: space-around !important;\\n  }\\n\\n  .align-items-sm-start {\\n    align-items: flex-start !important;\\n  }\\n\\n  .align-items-sm-end {\\n    align-items: flex-end !important;\\n  }\\n\\n  .align-items-sm-center {\\n    align-items: center !important;\\n  }\\n\\n  .align-items-sm-baseline {\\n    align-items: baseline !important;\\n  }\\n\\n  .align-items-sm-stretch {\\n    align-items: stretch !important;\\n  }\\n\\n  .align-content-sm-start {\\n    align-content: flex-start !important;\\n  }\\n\\n  .align-content-sm-end {\\n    align-content: flex-end !important;\\n  }\\n\\n  .align-content-sm-center {\\n    align-content: center !important;\\n  }\\n\\n  .align-content-sm-between {\\n    align-content: space-between !important;\\n  }\\n\\n  .align-content-sm-around {\\n    align-content: space-around !important;\\n  }\\n\\n  .align-content-sm-stretch {\\n    align-content: stretch !important;\\n  }\\n\\n  .align-self-sm-auto {\\n    align-self: auto !important;\\n  }\\n\\n  .align-self-sm-start {\\n    align-self: flex-start !important;\\n  }\\n\\n  .align-self-sm-end {\\n    align-self: flex-end !important;\\n  }\\n\\n  .align-self-sm-center {\\n    align-self: center !important;\\n  }\\n\\n  .align-self-sm-baseline {\\n    align-self: baseline !important;\\n  }\\n\\n  .align-self-sm-stretch {\\n    align-self: stretch !important;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .flex-md-row {\\n    flex-direction: row !important;\\n  }\\n\\n  .flex-md-column {\\n    flex-direction: column !important;\\n  }\\n\\n  .flex-md-row-reverse {\\n    flex-direction: row-reverse !important;\\n  }\\n\\n  .flex-md-column-reverse {\\n    flex-direction: column-reverse !important;\\n  }\\n\\n  .flex-md-wrap {\\n    flex-wrap: wrap !important;\\n  }\\n\\n  .flex-md-nowrap {\\n    flex-wrap: nowrap !important;\\n  }\\n\\n  .flex-md-wrap-reverse {\\n    flex-wrap: wrap-reverse !important;\\n  }\\n\\n  .flex-md-fill {\\n    flex: 1 1 auto !important;\\n  }\\n\\n  .flex-md-grow-0 {\\n    flex-grow: 0 !important;\\n  }\\n\\n  .flex-md-grow-1 {\\n    flex-grow: 1 !important;\\n  }\\n\\n  .flex-md-shrink-0 {\\n    flex-shrink: 0 !important;\\n  }\\n\\n  .flex-md-shrink-1 {\\n    flex-shrink: 1 !important;\\n  }\\n\\n  .justify-content-md-start {\\n    justify-content: flex-start !important;\\n  }\\n\\n  .justify-content-md-end {\\n    justify-content: flex-end !important;\\n  }\\n\\n  .justify-content-md-center {\\n    justify-content: center !important;\\n  }\\n\\n  .justify-content-md-between {\\n    justify-content: space-between !important;\\n  }\\n\\n  .justify-content-md-around {\\n    justify-content: space-around !important;\\n  }\\n\\n  .align-items-md-start {\\n    align-items: flex-start !important;\\n  }\\n\\n  .align-items-md-end {\\n    align-items: flex-end !important;\\n  }\\n\\n  .align-items-md-center {\\n    align-items: center !important;\\n  }\\n\\n  .align-items-md-baseline {\\n    align-items: baseline !important;\\n  }\\n\\n  .align-items-md-stretch {\\n    align-items: stretch !important;\\n  }\\n\\n  .align-content-md-start {\\n    align-content: flex-start !important;\\n  }\\n\\n  .align-content-md-end {\\n    align-content: flex-end !important;\\n  }\\n\\n  .align-content-md-center {\\n    align-content: center !important;\\n  }\\n\\n  .align-content-md-between {\\n    align-content: space-between !important;\\n  }\\n\\n  .align-content-md-around {\\n    align-content: space-around !important;\\n  }\\n\\n  .align-content-md-stretch {\\n    align-content: stretch !important;\\n  }\\n\\n  .align-self-md-auto {\\n    align-self: auto !important;\\n  }\\n\\n  .align-self-md-start {\\n    align-self: flex-start !important;\\n  }\\n\\n  .align-self-md-end {\\n    align-self: flex-end !important;\\n  }\\n\\n  .align-self-md-center {\\n    align-self: center !important;\\n  }\\n\\n  .align-self-md-baseline {\\n    align-self: baseline !important;\\n  }\\n\\n  .align-self-md-stretch {\\n    align-self: stretch !important;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .flex-lg-row {\\n    flex-direction: row !important;\\n  }\\n\\n  .flex-lg-column {\\n    flex-direction: column !important;\\n  }\\n\\n  .flex-lg-row-reverse {\\n    flex-direction: row-reverse !important;\\n  }\\n\\n  .flex-lg-column-reverse {\\n    flex-direction: column-reverse !important;\\n  }\\n\\n  .flex-lg-wrap {\\n    flex-wrap: wrap !important;\\n  }\\n\\n  .flex-lg-nowrap {\\n    flex-wrap: nowrap !important;\\n  }\\n\\n  .flex-lg-wrap-reverse {\\n    flex-wrap: wrap-reverse !important;\\n  }\\n\\n  .flex-lg-fill {\\n    flex: 1 1 auto !important;\\n  }\\n\\n  .flex-lg-grow-0 {\\n    flex-grow: 0 !important;\\n  }\\n\\n  .flex-lg-grow-1 {\\n    flex-grow: 1 !important;\\n  }\\n\\n  .flex-lg-shrink-0 {\\n    flex-shrink: 0 !important;\\n  }\\n\\n  .flex-lg-shrink-1 {\\n    flex-shrink: 1 !important;\\n  }\\n\\n  .justify-content-lg-start {\\n    justify-content: flex-start !important;\\n  }\\n\\n  .justify-content-lg-end {\\n    justify-content: flex-end !important;\\n  }\\n\\n  .justify-content-lg-center {\\n    justify-content: center !important;\\n  }\\n\\n  .justify-content-lg-between {\\n    justify-content: space-between !important;\\n  }\\n\\n  .justify-content-lg-around {\\n    justify-content: space-around !important;\\n  }\\n\\n  .align-items-lg-start {\\n    align-items: flex-start !important;\\n  }\\n\\n  .align-items-lg-end {\\n    align-items: flex-end !important;\\n  }\\n\\n  .align-items-lg-center {\\n    align-items: center !important;\\n  }\\n\\n  .align-items-lg-baseline {\\n    align-items: baseline !important;\\n  }\\n\\n  .align-items-lg-stretch {\\n    align-items: stretch !important;\\n  }\\n\\n  .align-content-lg-start {\\n    align-content: flex-start !important;\\n  }\\n\\n  .align-content-lg-end {\\n    align-content: flex-end !important;\\n  }\\n\\n  .align-content-lg-center {\\n    align-content: center !important;\\n  }\\n\\n  .align-content-lg-between {\\n    align-content: space-between !important;\\n  }\\n\\n  .align-content-lg-around {\\n    align-content: space-around !important;\\n  }\\n\\n  .align-content-lg-stretch {\\n    align-content: stretch !important;\\n  }\\n\\n  .align-self-lg-auto {\\n    align-self: auto !important;\\n  }\\n\\n  .align-self-lg-start {\\n    align-self: flex-start !important;\\n  }\\n\\n  .align-self-lg-end {\\n    align-self: flex-end !important;\\n  }\\n\\n  .align-self-lg-center {\\n    align-self: center !important;\\n  }\\n\\n  .align-self-lg-baseline {\\n    align-self: baseline !important;\\n  }\\n\\n  .align-self-lg-stretch {\\n    align-self: stretch !important;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .flex-xl-row {\\n    flex-direction: row !important;\\n  }\\n\\n  .flex-xl-column {\\n    flex-direction: column !important;\\n  }\\n\\n  .flex-xl-row-reverse {\\n    flex-direction: row-reverse !important;\\n  }\\n\\n  .flex-xl-column-reverse {\\n    flex-direction: column-reverse !important;\\n  }\\n\\n  .flex-xl-wrap {\\n    flex-wrap: wrap !important;\\n  }\\n\\n  .flex-xl-nowrap {\\n    flex-wrap: nowrap !important;\\n  }\\n\\n  .flex-xl-wrap-reverse {\\n    flex-wrap: wrap-reverse !important;\\n  }\\n\\n  .flex-xl-fill {\\n    flex: 1 1 auto !important;\\n  }\\n\\n  .flex-xl-grow-0 {\\n    flex-grow: 0 !important;\\n  }\\n\\n  .flex-xl-grow-1 {\\n    flex-grow: 1 !important;\\n  }\\n\\n  .flex-xl-shrink-0 {\\n    flex-shrink: 0 !important;\\n  }\\n\\n  .flex-xl-shrink-1 {\\n    flex-shrink: 1 !important;\\n  }\\n\\n  .justify-content-xl-start {\\n    justify-content: flex-start !important;\\n  }\\n\\n  .justify-content-xl-end {\\n    justify-content: flex-end !important;\\n  }\\n\\n  .justify-content-xl-center {\\n    justify-content: center !important;\\n  }\\n\\n  .justify-content-xl-between {\\n    justify-content: space-between !important;\\n  }\\n\\n  .justify-content-xl-around {\\n    justify-content: space-around !important;\\n  }\\n\\n  .align-items-xl-start {\\n    align-items: flex-start !important;\\n  }\\n\\n  .align-items-xl-end {\\n    align-items: flex-end !important;\\n  }\\n\\n  .align-items-xl-center {\\n    align-items: center !important;\\n  }\\n\\n  .align-items-xl-baseline {\\n    align-items: baseline !important;\\n  }\\n\\n  .align-items-xl-stretch {\\n    align-items: stretch !important;\\n  }\\n\\n  .align-content-xl-start {\\n    align-content: flex-start !important;\\n  }\\n\\n  .align-content-xl-end {\\n    align-content: flex-end !important;\\n  }\\n\\n  .align-content-xl-center {\\n    align-content: center !important;\\n  }\\n\\n  .align-content-xl-between {\\n    align-content: space-between !important;\\n  }\\n\\n  .align-content-xl-around {\\n    align-content: space-around !important;\\n  }\\n\\n  .align-content-xl-stretch {\\n    align-content: stretch !important;\\n  }\\n\\n  .align-self-xl-auto {\\n    align-self: auto !important;\\n  }\\n\\n  .align-self-xl-start {\\n    align-self: flex-start !important;\\n  }\\n\\n  .align-self-xl-end {\\n    align-self: flex-end !important;\\n  }\\n\\n  .align-self-xl-center {\\n    align-self: center !important;\\n  }\\n\\n  .align-self-xl-baseline {\\n    align-self: baseline !important;\\n  }\\n\\n  .align-self-xl-stretch {\\n    align-self: stretch !important;\\n  }\\n}\\n.float-left {\\n  float: left !important;\\n}\\n\\n.float-right {\\n  float: right !important;\\n}\\n\\n.float-none {\\n  float: none !important;\\n}\\n\\n@media (min-width: 576px) {\\n  .float-sm-left {\\n    float: left !important;\\n  }\\n\\n  .float-sm-right {\\n    float: right !important;\\n  }\\n\\n  .float-sm-none {\\n    float: none !important;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .float-md-left {\\n    float: left !important;\\n  }\\n\\n  .float-md-right {\\n    float: right !important;\\n  }\\n\\n  .float-md-none {\\n    float: none !important;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .float-lg-left {\\n    float: left !important;\\n  }\\n\\n  .float-lg-right {\\n    float: right !important;\\n  }\\n\\n  .float-lg-none {\\n    float: none !important;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .float-xl-left {\\n    float: left !important;\\n  }\\n\\n  .float-xl-right {\\n    float: right !important;\\n  }\\n\\n  .float-xl-none {\\n    float: none !important;\\n  }\\n}\\n.user-select-all {\\n  -webkit-user-select: all !important;\\n     -moz-user-select: all !important;\\n      -ms-user-select: all !important;\\n          user-select: all !important;\\n}\\n\\n.user-select-auto {\\n  -webkit-user-select: auto !important;\\n     -moz-user-select: auto !important;\\n      -ms-user-select: auto !important;\\n          user-select: auto !important;\\n}\\n\\n.user-select-none {\\n  -webkit-user-select: none !important;\\n     -moz-user-select: none !important;\\n      -ms-user-select: none !important;\\n          user-select: none !important;\\n}\\n\\n.overflow-auto {\\n  overflow: auto !important;\\n}\\n\\n.overflow-hidden {\\n  overflow: hidden !important;\\n}\\n\\n.position-static {\\n  position: static !important;\\n}\\n\\n.position-relative {\\n  position: relative !important;\\n}\\n\\n.position-absolute {\\n  position: absolute !important;\\n}\\n\\n.position-fixed {\\n  position: fixed !important;\\n}\\n\\n.position-sticky {\\n  position: -webkit-sticky !important;\\n  position: sticky !important;\\n}\\n\\n.fixed-top {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  z-index: 1030;\\n}\\n\\n.fixed-bottom {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 1030;\\n}\\n\\n@supports ((position: -webkit-sticky) or (position: sticky)) {\\n  .sticky-top {\\n    position: -webkit-sticky;\\n    position: sticky;\\n    top: 0;\\n    z-index: 1020;\\n  }\\n}\\n\\n.sr-only {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  padding: 0;\\n  margin: -1px;\\n  overflow: hidden;\\n  clip: rect(0, 0, 0, 0);\\n  white-space: nowrap;\\n  border: 0;\\n}\\n\\n.sr-only-focusable:active, .sr-only-focusable:focus {\\n  position: static;\\n  width: auto;\\n  height: auto;\\n  overflow: visible;\\n  clip: auto;\\n  white-space: normal;\\n}\\n\\n.shadow-sm {\\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\\n}\\n\\n.shadow {\\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\\n}\\n\\n.shadow-lg {\\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\\n}\\n\\n.shadow-none {\\n  box-shadow: none !important;\\n}\\n\\n.w-25 {\\n  width: 25% !important;\\n}\\n\\n.w-50 {\\n  width: 50% !important;\\n}\\n\\n.w-75 {\\n  width: 75% !important;\\n}\\n\\n.w-100 {\\n  width: 100% !important;\\n}\\n\\n.w-auto {\\n  width: auto !important;\\n}\\n\\n.h-25 {\\n  height: 25% !important;\\n}\\n\\n.h-50 {\\n  height: 50% !important;\\n}\\n\\n.h-75 {\\n  height: 75% !important;\\n}\\n\\n.h-100 {\\n  height: 100% !important;\\n}\\n\\n.h-auto {\\n  height: auto !important;\\n}\\n\\n.mw-100 {\\n  max-width: 100% !important;\\n}\\n\\n.mh-100 {\\n  max-height: 100% !important;\\n}\\n\\n.min-vw-100 {\\n  min-width: 100vw !important;\\n}\\n\\n.min-vh-100 {\\n  min-height: 100vh !important;\\n}\\n\\n.vw-100 {\\n  width: 100vw !important;\\n}\\n\\n.vh-100 {\\n  height: 100vh !important;\\n}\\n\\n.m-0 {\\n  margin: 0 !important;\\n}\\n\\n.mt-0,\\n.my-0 {\\n  margin-top: 0 !important;\\n}\\n\\n.mr-0,\\n.mx-0 {\\n  margin-right: 0 !important;\\n}\\n\\n.mb-0,\\n.my-0 {\\n  margin-bottom: 0 !important;\\n}\\n\\n.ml-0,\\n.mx-0 {\\n  margin-left: 0 !important;\\n}\\n\\n.m-1 {\\n  margin: 0.25rem !important;\\n}\\n\\n.mt-1,\\n.my-1 {\\n  margin-top: 0.25rem !important;\\n}\\n\\n.mr-1,\\n.mx-1 {\\n  margin-right: 0.25rem !important;\\n}\\n\\n.mb-1,\\n.my-1 {\\n  margin-bottom: 0.25rem !important;\\n}\\n\\n.ml-1,\\n.mx-1 {\\n  margin-left: 0.25rem !important;\\n}\\n\\n.m-2 {\\n  margin: 0.5rem !important;\\n}\\n\\n.mt-2,\\n.my-2 {\\n  margin-top: 0.5rem !important;\\n}\\n\\n.mr-2,\\n.mx-2 {\\n  margin-right: 0.5rem !important;\\n}\\n\\n.mb-2,\\n.my-2 {\\n  margin-bottom: 0.5rem !important;\\n}\\n\\n.ml-2,\\n.mx-2 {\\n  margin-left: 0.5rem !important;\\n}\\n\\n.m-3 {\\n  margin: 1rem !important;\\n}\\n\\n.mt-3,\\n.my-3 {\\n  margin-top: 1rem !important;\\n}\\n\\n.mr-3,\\n.mx-3 {\\n  margin-right: 1rem !important;\\n}\\n\\n.mb-3,\\n.my-3 {\\n  margin-bottom: 1rem !important;\\n}\\n\\n.ml-3,\\n.mx-3 {\\n  margin-left: 1rem !important;\\n}\\n\\n.m-4 {\\n  margin: 1.5rem !important;\\n}\\n\\n.mt-4,\\n.my-4 {\\n  margin-top: 1.5rem !important;\\n}\\n\\n.mr-4,\\n.mx-4 {\\n  margin-right: 1.5rem !important;\\n}\\n\\n.mb-4,\\n.my-4 {\\n  margin-bottom: 1.5rem !important;\\n}\\n\\n.ml-4,\\n.mx-4 {\\n  margin-left: 1.5rem !important;\\n}\\n\\n.m-5 {\\n  margin: 3rem !important;\\n}\\n\\n.mt-5,\\n.my-5 {\\n  margin-top: 3rem !important;\\n}\\n\\n.mr-5,\\n.mx-5 {\\n  margin-right: 3rem !important;\\n}\\n\\n.mb-5,\\n.my-5 {\\n  margin-bottom: 3rem !important;\\n}\\n\\n.ml-5,\\n.mx-5 {\\n  margin-left: 3rem !important;\\n}\\n\\n.p-0 {\\n  padding: 0 !important;\\n}\\n\\n.pt-0,\\n.py-0 {\\n  padding-top: 0 !important;\\n}\\n\\n.pr-0,\\n.px-0 {\\n  padding-right: 0 !important;\\n}\\n\\n.pb-0,\\n.py-0 {\\n  padding-bottom: 0 !important;\\n}\\n\\n.pl-0,\\n.px-0 {\\n  padding-left: 0 !important;\\n}\\n\\n.p-1 {\\n  padding: 0.25rem !important;\\n}\\n\\n.pt-1,\\n.py-1 {\\n  padding-top: 0.25rem !important;\\n}\\n\\n.pr-1,\\n.px-1 {\\n  padding-right: 0.25rem !important;\\n}\\n\\n.pb-1,\\n.py-1 {\\n  padding-bottom: 0.25rem !important;\\n}\\n\\n.pl-1,\\n.px-1 {\\n  padding-left: 0.25rem !important;\\n}\\n\\n.p-2 {\\n  padding: 0.5rem !important;\\n}\\n\\n.pt-2,\\n.py-2 {\\n  padding-top: 0.5rem !important;\\n}\\n\\n.pr-2,\\n.px-2 {\\n  padding-right: 0.5rem !important;\\n}\\n\\n.pb-2,\\n.py-2 {\\n  padding-bottom: 0.5rem !important;\\n}\\n\\n.pl-2,\\n.px-2 {\\n  padding-left: 0.5rem !important;\\n}\\n\\n.p-3 {\\n  padding: 1rem !important;\\n}\\n\\n.pt-3,\\n.py-3 {\\n  padding-top: 1rem !important;\\n}\\n\\n.pr-3,\\n.px-3 {\\n  padding-right: 1rem !important;\\n}\\n\\n.pb-3,\\n.py-3 {\\n  padding-bottom: 1rem !important;\\n}\\n\\n.pl-3,\\n.px-3 {\\n  padding-left: 1rem !important;\\n}\\n\\n.p-4 {\\n  padding: 1.5rem !important;\\n}\\n\\n.pt-4,\\n.py-4 {\\n  padding-top: 1.5rem !important;\\n}\\n\\n.pr-4,\\n.px-4 {\\n  padding-right: 1.5rem !important;\\n}\\n\\n.pb-4,\\n.py-4 {\\n  padding-bottom: 1.5rem !important;\\n}\\n\\n.pl-4,\\n.px-4 {\\n  padding-left: 1.5rem !important;\\n}\\n\\n.p-5 {\\n  padding: 3rem !important;\\n}\\n\\n.pt-5,\\n.py-5 {\\n  padding-top: 3rem !important;\\n}\\n\\n.pr-5,\\n.px-5 {\\n  padding-right: 3rem !important;\\n}\\n\\n.pb-5,\\n.py-5 {\\n  padding-bottom: 3rem !important;\\n}\\n\\n.pl-5,\\n.px-5 {\\n  padding-left: 3rem !important;\\n}\\n\\n.m-n1 {\\n  margin: -0.25rem !important;\\n}\\n\\n.mt-n1,\\n.my-n1 {\\n  margin-top: -0.25rem !important;\\n}\\n\\n.mr-n1,\\n.mx-n1 {\\n  margin-right: -0.25rem !important;\\n}\\n\\n.mb-n1,\\n.my-n1 {\\n  margin-bottom: -0.25rem !important;\\n}\\n\\n.ml-n1,\\n.mx-n1 {\\n  margin-left: -0.25rem !important;\\n}\\n\\n.m-n2 {\\n  margin: -0.5rem !important;\\n}\\n\\n.mt-n2,\\n.my-n2 {\\n  margin-top: -0.5rem !important;\\n}\\n\\n.mr-n2,\\n.mx-n2 {\\n  margin-right: -0.5rem !important;\\n}\\n\\n.mb-n2,\\n.my-n2 {\\n  margin-bottom: -0.5rem !important;\\n}\\n\\n.ml-n2,\\n.mx-n2 {\\n  margin-left: -0.5rem !important;\\n}\\n\\n.m-n3 {\\n  margin: -1rem !important;\\n}\\n\\n.mt-n3,\\n.my-n3 {\\n  margin-top: -1rem !important;\\n}\\n\\n.mr-n3,\\n.mx-n3 {\\n  margin-right: -1rem !important;\\n}\\n\\n.mb-n3,\\n.my-n3 {\\n  margin-bottom: -1rem !important;\\n}\\n\\n.ml-n3,\\n.mx-n3 {\\n  margin-left: -1rem !important;\\n}\\n\\n.m-n4 {\\n  margin: -1.5rem !important;\\n}\\n\\n.mt-n4,\\n.my-n4 {\\n  margin-top: -1.5rem !important;\\n}\\n\\n.mr-n4,\\n.mx-n4 {\\n  margin-right: -1.5rem !important;\\n}\\n\\n.mb-n4,\\n.my-n4 {\\n  margin-bottom: -1.5rem !important;\\n}\\n\\n.ml-n4,\\n.mx-n4 {\\n  margin-left: -1.5rem !important;\\n}\\n\\n.m-n5 {\\n  margin: -3rem !important;\\n}\\n\\n.mt-n5,\\n.my-n5 {\\n  margin-top: -3rem !important;\\n}\\n\\n.mr-n5,\\n.mx-n5 {\\n  margin-right: -3rem !important;\\n}\\n\\n.mb-n5,\\n.my-n5 {\\n  margin-bottom: -3rem !important;\\n}\\n\\n.ml-n5,\\n.mx-n5 {\\n  margin-left: -3rem !important;\\n}\\n\\n.m-auto {\\n  margin: auto !important;\\n}\\n\\n.mt-auto,\\n.my-auto {\\n  margin-top: auto !important;\\n}\\n\\n.mr-auto,\\n.mx-auto {\\n  margin-right: auto !important;\\n}\\n\\n.mb-auto,\\n.my-auto {\\n  margin-bottom: auto !important;\\n}\\n\\n.ml-auto,\\n.mx-auto {\\n  margin-left: auto !important;\\n}\\n\\n@media (min-width: 576px) {\\n  .m-sm-0 {\\n    margin: 0 !important;\\n  }\\n\\n  .mt-sm-0,\\n.my-sm-0 {\\n    margin-top: 0 !important;\\n  }\\n\\n  .mr-sm-0,\\n.mx-sm-0 {\\n    margin-right: 0 !important;\\n  }\\n\\n  .mb-sm-0,\\n.my-sm-0 {\\n    margin-bottom: 0 !important;\\n  }\\n\\n  .ml-sm-0,\\n.mx-sm-0 {\\n    margin-left: 0 !important;\\n  }\\n\\n  .m-sm-1 {\\n    margin: 0.25rem !important;\\n  }\\n\\n  .mt-sm-1,\\n.my-sm-1 {\\n    margin-top: 0.25rem !important;\\n  }\\n\\n  .mr-sm-1,\\n.mx-sm-1 {\\n    margin-right: 0.25rem !important;\\n  }\\n\\n  .mb-sm-1,\\n.my-sm-1 {\\n    margin-bottom: 0.25rem !important;\\n  }\\n\\n  .ml-sm-1,\\n.mx-sm-1 {\\n    margin-left: 0.25rem !important;\\n  }\\n\\n  .m-sm-2 {\\n    margin: 0.5rem !important;\\n  }\\n\\n  .mt-sm-2,\\n.my-sm-2 {\\n    margin-top: 0.5rem !important;\\n  }\\n\\n  .mr-sm-2,\\n.mx-sm-2 {\\n    margin-right: 0.5rem !important;\\n  }\\n\\n  .mb-sm-2,\\n.my-sm-2 {\\n    margin-bottom: 0.5rem !important;\\n  }\\n\\n  .ml-sm-2,\\n.mx-sm-2 {\\n    margin-left: 0.5rem !important;\\n  }\\n\\n  .m-sm-3 {\\n    margin: 1rem !important;\\n  }\\n\\n  .mt-sm-3,\\n.my-sm-3 {\\n    margin-top: 1rem !important;\\n  }\\n\\n  .mr-sm-3,\\n.mx-sm-3 {\\n    margin-right: 1rem !important;\\n  }\\n\\n  .mb-sm-3,\\n.my-sm-3 {\\n    margin-bottom: 1rem !important;\\n  }\\n\\n  .ml-sm-3,\\n.mx-sm-3 {\\n    margin-left: 1rem !important;\\n  }\\n\\n  .m-sm-4 {\\n    margin: 1.5rem !important;\\n  }\\n\\n  .mt-sm-4,\\n.my-sm-4 {\\n    margin-top: 1.5rem !important;\\n  }\\n\\n  .mr-sm-4,\\n.mx-sm-4 {\\n    margin-right: 1.5rem !important;\\n  }\\n\\n  .mb-sm-4,\\n.my-sm-4 {\\n    margin-bottom: 1.5rem !important;\\n  }\\n\\n  .ml-sm-4,\\n.mx-sm-4 {\\n    margin-left: 1.5rem !important;\\n  }\\n\\n  .m-sm-5 {\\n    margin: 3rem !important;\\n  }\\n\\n  .mt-sm-5,\\n.my-sm-5 {\\n    margin-top: 3rem !important;\\n  }\\n\\n  .mr-sm-5,\\n.mx-sm-5 {\\n    margin-right: 3rem !important;\\n  }\\n\\n  .mb-sm-5,\\n.my-sm-5 {\\n    margin-bottom: 3rem !important;\\n  }\\n\\n  .ml-sm-5,\\n.mx-sm-5 {\\n    margin-left: 3rem !important;\\n  }\\n\\n  .p-sm-0 {\\n    padding: 0 !important;\\n  }\\n\\n  .pt-sm-0,\\n.py-sm-0 {\\n    padding-top: 0 !important;\\n  }\\n\\n  .pr-sm-0,\\n.px-sm-0 {\\n    padding-right: 0 !important;\\n  }\\n\\n  .pb-sm-0,\\n.py-sm-0 {\\n    padding-bottom: 0 !important;\\n  }\\n\\n  .pl-sm-0,\\n.px-sm-0 {\\n    padding-left: 0 !important;\\n  }\\n\\n  .p-sm-1 {\\n    padding: 0.25rem !important;\\n  }\\n\\n  .pt-sm-1,\\n.py-sm-1 {\\n    padding-top: 0.25rem !important;\\n  }\\n\\n  .pr-sm-1,\\n.px-sm-1 {\\n    padding-right: 0.25rem !important;\\n  }\\n\\n  .pb-sm-1,\\n.py-sm-1 {\\n    padding-bottom: 0.25rem !important;\\n  }\\n\\n  .pl-sm-1,\\n.px-sm-1 {\\n    padding-left: 0.25rem !important;\\n  }\\n\\n  .p-sm-2 {\\n    padding: 0.5rem !important;\\n  }\\n\\n  .pt-sm-2,\\n.py-sm-2 {\\n    padding-top: 0.5rem !important;\\n  }\\n\\n  .pr-sm-2,\\n.px-sm-2 {\\n    padding-right: 0.5rem !important;\\n  }\\n\\n  .pb-sm-2,\\n.py-sm-2 {\\n    padding-bottom: 0.5rem !important;\\n  }\\n\\n  .pl-sm-2,\\n.px-sm-2 {\\n    padding-left: 0.5rem !important;\\n  }\\n\\n  .p-sm-3 {\\n    padding: 1rem !important;\\n  }\\n\\n  .pt-sm-3,\\n.py-sm-3 {\\n    padding-top: 1rem !important;\\n  }\\n\\n  .pr-sm-3,\\n.px-sm-3 {\\n    padding-right: 1rem !important;\\n  }\\n\\n  .pb-sm-3,\\n.py-sm-3 {\\n    padding-bottom: 1rem !important;\\n  }\\n\\n  .pl-sm-3,\\n.px-sm-3 {\\n    padding-left: 1rem !important;\\n  }\\n\\n  .p-sm-4 {\\n    padding: 1.5rem !important;\\n  }\\n\\n  .pt-sm-4,\\n.py-sm-4 {\\n    padding-top: 1.5rem !important;\\n  }\\n\\n  .pr-sm-4,\\n.px-sm-4 {\\n    padding-right: 1.5rem !important;\\n  }\\n\\n  .pb-sm-4,\\n.py-sm-4 {\\n    padding-bottom: 1.5rem !important;\\n  }\\n\\n  .pl-sm-4,\\n.px-sm-4 {\\n    padding-left: 1.5rem !important;\\n  }\\n\\n  .p-sm-5 {\\n    padding: 3rem !important;\\n  }\\n\\n  .pt-sm-5,\\n.py-sm-5 {\\n    padding-top: 3rem !important;\\n  }\\n\\n  .pr-sm-5,\\n.px-sm-5 {\\n    padding-right: 3rem !important;\\n  }\\n\\n  .pb-sm-5,\\n.py-sm-5 {\\n    padding-bottom: 3rem !important;\\n  }\\n\\n  .pl-sm-5,\\n.px-sm-5 {\\n    padding-left: 3rem !important;\\n  }\\n\\n  .m-sm-n1 {\\n    margin: -0.25rem !important;\\n  }\\n\\n  .mt-sm-n1,\\n.my-sm-n1 {\\n    margin-top: -0.25rem !important;\\n  }\\n\\n  .mr-sm-n1,\\n.mx-sm-n1 {\\n    margin-right: -0.25rem !important;\\n  }\\n\\n  .mb-sm-n1,\\n.my-sm-n1 {\\n    margin-bottom: -0.25rem !important;\\n  }\\n\\n  .ml-sm-n1,\\n.mx-sm-n1 {\\n    margin-left: -0.25rem !important;\\n  }\\n\\n  .m-sm-n2 {\\n    margin: -0.5rem !important;\\n  }\\n\\n  .mt-sm-n2,\\n.my-sm-n2 {\\n    margin-top: -0.5rem !important;\\n  }\\n\\n  .mr-sm-n2,\\n.mx-sm-n2 {\\n    margin-right: -0.5rem !important;\\n  }\\n\\n  .mb-sm-n2,\\n.my-sm-n2 {\\n    margin-bottom: -0.5rem !important;\\n  }\\n\\n  .ml-sm-n2,\\n.mx-sm-n2 {\\n    margin-left: -0.5rem !important;\\n  }\\n\\n  .m-sm-n3 {\\n    margin: -1rem !important;\\n  }\\n\\n  .mt-sm-n3,\\n.my-sm-n3 {\\n    margin-top: -1rem !important;\\n  }\\n\\n  .mr-sm-n3,\\n.mx-sm-n3 {\\n    margin-right: -1rem !important;\\n  }\\n\\n  .mb-sm-n3,\\n.my-sm-n3 {\\n    margin-bottom: -1rem !important;\\n  }\\n\\n  .ml-sm-n3,\\n.mx-sm-n3 {\\n    margin-left: -1rem !important;\\n  }\\n\\n  .m-sm-n4 {\\n    margin: -1.5rem !important;\\n  }\\n\\n  .mt-sm-n4,\\n.my-sm-n4 {\\n    margin-top: -1.5rem !important;\\n  }\\n\\n  .mr-sm-n4,\\n.mx-sm-n4 {\\n    margin-right: -1.5rem !important;\\n  }\\n\\n  .mb-sm-n4,\\n.my-sm-n4 {\\n    margin-bottom: -1.5rem !important;\\n  }\\n\\n  .ml-sm-n4,\\n.mx-sm-n4 {\\n    margin-left: -1.5rem !important;\\n  }\\n\\n  .m-sm-n5 {\\n    margin: -3rem !important;\\n  }\\n\\n  .mt-sm-n5,\\n.my-sm-n5 {\\n    margin-top: -3rem !important;\\n  }\\n\\n  .mr-sm-n5,\\n.mx-sm-n5 {\\n    margin-right: -3rem !important;\\n  }\\n\\n  .mb-sm-n5,\\n.my-sm-n5 {\\n    margin-bottom: -3rem !important;\\n  }\\n\\n  .ml-sm-n5,\\n.mx-sm-n5 {\\n    margin-left: -3rem !important;\\n  }\\n\\n  .m-sm-auto {\\n    margin: auto !important;\\n  }\\n\\n  .mt-sm-auto,\\n.my-sm-auto {\\n    margin-top: auto !important;\\n  }\\n\\n  .mr-sm-auto,\\n.mx-sm-auto {\\n    margin-right: auto !important;\\n  }\\n\\n  .mb-sm-auto,\\n.my-sm-auto {\\n    margin-bottom: auto !important;\\n  }\\n\\n  .ml-sm-auto,\\n.mx-sm-auto {\\n    margin-left: auto !important;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .m-md-0 {\\n    margin: 0 !important;\\n  }\\n\\n  .mt-md-0,\\n.my-md-0 {\\n    margin-top: 0 !important;\\n  }\\n\\n  .mr-md-0,\\n.mx-md-0 {\\n    margin-right: 0 !important;\\n  }\\n\\n  .mb-md-0,\\n.my-md-0 {\\n    margin-bottom: 0 !important;\\n  }\\n\\n  .ml-md-0,\\n.mx-md-0 {\\n    margin-left: 0 !important;\\n  }\\n\\n  .m-md-1 {\\n    margin: 0.25rem !important;\\n  }\\n\\n  .mt-md-1,\\n.my-md-1 {\\n    margin-top: 0.25rem !important;\\n  }\\n\\n  .mr-md-1,\\n.mx-md-1 {\\n    margin-right: 0.25rem !important;\\n  }\\n\\n  .mb-md-1,\\n.my-md-1 {\\n    margin-bottom: 0.25rem !important;\\n  }\\n\\n  .ml-md-1,\\n.mx-md-1 {\\n    margin-left: 0.25rem !important;\\n  }\\n\\n  .m-md-2 {\\n    margin: 0.5rem !important;\\n  }\\n\\n  .mt-md-2,\\n.my-md-2 {\\n    margin-top: 0.5rem !important;\\n  }\\n\\n  .mr-md-2,\\n.mx-md-2 {\\n    margin-right: 0.5rem !important;\\n  }\\n\\n  .mb-md-2,\\n.my-md-2 {\\n    margin-bottom: 0.5rem !important;\\n  }\\n\\n  .ml-md-2,\\n.mx-md-2 {\\n    margin-left: 0.5rem !important;\\n  }\\n\\n  .m-md-3 {\\n    margin: 1rem !important;\\n  }\\n\\n  .mt-md-3,\\n.my-md-3 {\\n    margin-top: 1rem !important;\\n  }\\n\\n  .mr-md-3,\\n.mx-md-3 {\\n    margin-right: 1rem !important;\\n  }\\n\\n  .mb-md-3,\\n.my-md-3 {\\n    margin-bottom: 1rem !important;\\n  }\\n\\n  .ml-md-3,\\n.mx-md-3 {\\n    margin-left: 1rem !important;\\n  }\\n\\n  .m-md-4 {\\n    margin: 1.5rem !important;\\n  }\\n\\n  .mt-md-4,\\n.my-md-4 {\\n    margin-top: 1.5rem !important;\\n  }\\n\\n  .mr-md-4,\\n.mx-md-4 {\\n    margin-right: 1.5rem !important;\\n  }\\n\\n  .mb-md-4,\\n.my-md-4 {\\n    margin-bottom: 1.5rem !important;\\n  }\\n\\n  .ml-md-4,\\n.mx-md-4 {\\n    margin-left: 1.5rem !important;\\n  }\\n\\n  .m-md-5 {\\n    margin: 3rem !important;\\n  }\\n\\n  .mt-md-5,\\n.my-md-5 {\\n    margin-top: 3rem !important;\\n  }\\n\\n  .mr-md-5,\\n.mx-md-5 {\\n    margin-right: 3rem !important;\\n  }\\n\\n  .mb-md-5,\\n.my-md-5 {\\n    margin-bottom: 3rem !important;\\n  }\\n\\n  .ml-md-5,\\n.mx-md-5 {\\n    margin-left: 3rem !important;\\n  }\\n\\n  .p-md-0 {\\n    padding: 0 !important;\\n  }\\n\\n  .pt-md-0,\\n.py-md-0 {\\n    padding-top: 0 !important;\\n  }\\n\\n  .pr-md-0,\\n.px-md-0 {\\n    padding-right: 0 !important;\\n  }\\n\\n  .pb-md-0,\\n.py-md-0 {\\n    padding-bottom: 0 !important;\\n  }\\n\\n  .pl-md-0,\\n.px-md-0 {\\n    padding-left: 0 !important;\\n  }\\n\\n  .p-md-1 {\\n    padding: 0.25rem !important;\\n  }\\n\\n  .pt-md-1,\\n.py-md-1 {\\n    padding-top: 0.25rem !important;\\n  }\\n\\n  .pr-md-1,\\n.px-md-1 {\\n    padding-right: 0.25rem !important;\\n  }\\n\\n  .pb-md-1,\\n.py-md-1 {\\n    padding-bottom: 0.25rem !important;\\n  }\\n\\n  .pl-md-1,\\n.px-md-1 {\\n    padding-left: 0.25rem !important;\\n  }\\n\\n  .p-md-2 {\\n    padding: 0.5rem !important;\\n  }\\n\\n  .pt-md-2,\\n.py-md-2 {\\n    padding-top: 0.5rem !important;\\n  }\\n\\n  .pr-md-2,\\n.px-md-2 {\\n    padding-right: 0.5rem !important;\\n  }\\n\\n  .pb-md-2,\\n.py-md-2 {\\n    padding-bottom: 0.5rem !important;\\n  }\\n\\n  .pl-md-2,\\n.px-md-2 {\\n    padding-left: 0.5rem !important;\\n  }\\n\\n  .p-md-3 {\\n    padding: 1rem !important;\\n  }\\n\\n  .pt-md-3,\\n.py-md-3 {\\n    padding-top: 1rem !important;\\n  }\\n\\n  .pr-md-3,\\n.px-md-3 {\\n    padding-right: 1rem !important;\\n  }\\n\\n  .pb-md-3,\\n.py-md-3 {\\n    padding-bottom: 1rem !important;\\n  }\\n\\n  .pl-md-3,\\n.px-md-3 {\\n    padding-left: 1rem !important;\\n  }\\n\\n  .p-md-4 {\\n    padding: 1.5rem !important;\\n  }\\n\\n  .pt-md-4,\\n.py-md-4 {\\n    padding-top: 1.5rem !important;\\n  }\\n\\n  .pr-md-4,\\n.px-md-4 {\\n    padding-right: 1.5rem !important;\\n  }\\n\\n  .pb-md-4,\\n.py-md-4 {\\n    padding-bottom: 1.5rem !important;\\n  }\\n\\n  .pl-md-4,\\n.px-md-4 {\\n    padding-left: 1.5rem !important;\\n  }\\n\\n  .p-md-5 {\\n    padding: 3rem !important;\\n  }\\n\\n  .pt-md-5,\\n.py-md-5 {\\n    padding-top: 3rem !important;\\n  }\\n\\n  .pr-md-5,\\n.px-md-5 {\\n    padding-right: 3rem !important;\\n  }\\n\\n  .pb-md-5,\\n.py-md-5 {\\n    padding-bottom: 3rem !important;\\n  }\\n\\n  .pl-md-5,\\n.px-md-5 {\\n    padding-left: 3rem !important;\\n  }\\n\\n  .m-md-n1 {\\n    margin: -0.25rem !important;\\n  }\\n\\n  .mt-md-n1,\\n.my-md-n1 {\\n    margin-top: -0.25rem !important;\\n  }\\n\\n  .mr-md-n1,\\n.mx-md-n1 {\\n    margin-right: -0.25rem !important;\\n  }\\n\\n  .mb-md-n1,\\n.my-md-n1 {\\n    margin-bottom: -0.25rem !important;\\n  }\\n\\n  .ml-md-n1,\\n.mx-md-n1 {\\n    margin-left: -0.25rem !important;\\n  }\\n\\n  .m-md-n2 {\\n    margin: -0.5rem !important;\\n  }\\n\\n  .mt-md-n2,\\n.my-md-n2 {\\n    margin-top: -0.5rem !important;\\n  }\\n\\n  .mr-md-n2,\\n.mx-md-n2 {\\n    margin-right: -0.5rem !important;\\n  }\\n\\n  .mb-md-n2,\\n.my-md-n2 {\\n    margin-bottom: -0.5rem !important;\\n  }\\n\\n  .ml-md-n2,\\n.mx-md-n2 {\\n    margin-left: -0.5rem !important;\\n  }\\n\\n  .m-md-n3 {\\n    margin: -1rem !important;\\n  }\\n\\n  .mt-md-n3,\\n.my-md-n3 {\\n    margin-top: -1rem !important;\\n  }\\n\\n  .mr-md-n3,\\n.mx-md-n3 {\\n    margin-right: -1rem !important;\\n  }\\n\\n  .mb-md-n3,\\n.my-md-n3 {\\n    margin-bottom: -1rem !important;\\n  }\\n\\n  .ml-md-n3,\\n.mx-md-n3 {\\n    margin-left: -1rem !important;\\n  }\\n\\n  .m-md-n4 {\\n    margin: -1.5rem !important;\\n  }\\n\\n  .mt-md-n4,\\n.my-md-n4 {\\n    margin-top: -1.5rem !important;\\n  }\\n\\n  .mr-md-n4,\\n.mx-md-n4 {\\n    margin-right: -1.5rem !important;\\n  }\\n\\n  .mb-md-n4,\\n.my-md-n4 {\\n    margin-bottom: -1.5rem !important;\\n  }\\n\\n  .ml-md-n4,\\n.mx-md-n4 {\\n    margin-left: -1.5rem !important;\\n  }\\n\\n  .m-md-n5 {\\n    margin: -3rem !important;\\n  }\\n\\n  .mt-md-n5,\\n.my-md-n5 {\\n    margin-top: -3rem !important;\\n  }\\n\\n  .mr-md-n5,\\n.mx-md-n5 {\\n    margin-right: -3rem !important;\\n  }\\n\\n  .mb-md-n5,\\n.my-md-n5 {\\n    margin-bottom: -3rem !important;\\n  }\\n\\n  .ml-md-n5,\\n.mx-md-n5 {\\n    margin-left: -3rem !important;\\n  }\\n\\n  .m-md-auto {\\n    margin: auto !important;\\n  }\\n\\n  .mt-md-auto,\\n.my-md-auto {\\n    margin-top: auto !important;\\n  }\\n\\n  .mr-md-auto,\\n.mx-md-auto {\\n    margin-right: auto !important;\\n  }\\n\\n  .mb-md-auto,\\n.my-md-auto {\\n    margin-bottom: auto !important;\\n  }\\n\\n  .ml-md-auto,\\n.mx-md-auto {\\n    margin-left: auto !important;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .m-lg-0 {\\n    margin: 0 !important;\\n  }\\n\\n  .mt-lg-0,\\n.my-lg-0 {\\n    margin-top: 0 !important;\\n  }\\n\\n  .mr-lg-0,\\n.mx-lg-0 {\\n    margin-right: 0 !important;\\n  }\\n\\n  .mb-lg-0,\\n.my-lg-0 {\\n    margin-bottom: 0 !important;\\n  }\\n\\n  .ml-lg-0,\\n.mx-lg-0 {\\n    margin-left: 0 !important;\\n  }\\n\\n  .m-lg-1 {\\n    margin: 0.25rem !important;\\n  }\\n\\n  .mt-lg-1,\\n.my-lg-1 {\\n    margin-top: 0.25rem !important;\\n  }\\n\\n  .mr-lg-1,\\n.mx-lg-1 {\\n    margin-right: 0.25rem !important;\\n  }\\n\\n  .mb-lg-1,\\n.my-lg-1 {\\n    margin-bottom: 0.25rem !important;\\n  }\\n\\n  .ml-lg-1,\\n.mx-lg-1 {\\n    margin-left: 0.25rem !important;\\n  }\\n\\n  .m-lg-2 {\\n    margin: 0.5rem !important;\\n  }\\n\\n  .mt-lg-2,\\n.my-lg-2 {\\n    margin-top: 0.5rem !important;\\n  }\\n\\n  .mr-lg-2,\\n.mx-lg-2 {\\n    margin-right: 0.5rem !important;\\n  }\\n\\n  .mb-lg-2,\\n.my-lg-2 {\\n    margin-bottom: 0.5rem !important;\\n  }\\n\\n  .ml-lg-2,\\n.mx-lg-2 {\\n    margin-left: 0.5rem !important;\\n  }\\n\\n  .m-lg-3 {\\n    margin: 1rem !important;\\n  }\\n\\n  .mt-lg-3,\\n.my-lg-3 {\\n    margin-top: 1rem !important;\\n  }\\n\\n  .mr-lg-3,\\n.mx-lg-3 {\\n    margin-right: 1rem !important;\\n  }\\n\\n  .mb-lg-3,\\n.my-lg-3 {\\n    margin-bottom: 1rem !important;\\n  }\\n\\n  .ml-lg-3,\\n.mx-lg-3 {\\n    margin-left: 1rem !important;\\n  }\\n\\n  .m-lg-4 {\\n    margin: 1.5rem !important;\\n  }\\n\\n  .mt-lg-4,\\n.my-lg-4 {\\n    margin-top: 1.5rem !important;\\n  }\\n\\n  .mr-lg-4,\\n.mx-lg-4 {\\n    margin-right: 1.5rem !important;\\n  }\\n\\n  .mb-lg-4,\\n.my-lg-4 {\\n    margin-bottom: 1.5rem !important;\\n  }\\n\\n  .ml-lg-4,\\n.mx-lg-4 {\\n    margin-left: 1.5rem !important;\\n  }\\n\\n  .m-lg-5 {\\n    margin: 3rem !important;\\n  }\\n\\n  .mt-lg-5,\\n.my-lg-5 {\\n    margin-top: 3rem !important;\\n  }\\n\\n  .mr-lg-5,\\n.mx-lg-5 {\\n    margin-right: 3rem !important;\\n  }\\n\\n  .mb-lg-5,\\n.my-lg-5 {\\n    margin-bottom: 3rem !important;\\n  }\\n\\n  .ml-lg-5,\\n.mx-lg-5 {\\n    margin-left: 3rem !important;\\n  }\\n\\n  .p-lg-0 {\\n    padding: 0 !important;\\n  }\\n\\n  .pt-lg-0,\\n.py-lg-0 {\\n    padding-top: 0 !important;\\n  }\\n\\n  .pr-lg-0,\\n.px-lg-0 {\\n    padding-right: 0 !important;\\n  }\\n\\n  .pb-lg-0,\\n.py-lg-0 {\\n    padding-bottom: 0 !important;\\n  }\\n\\n  .pl-lg-0,\\n.px-lg-0 {\\n    padding-left: 0 !important;\\n  }\\n\\n  .p-lg-1 {\\n    padding: 0.25rem !important;\\n  }\\n\\n  .pt-lg-1,\\n.py-lg-1 {\\n    padding-top: 0.25rem !important;\\n  }\\n\\n  .pr-lg-1,\\n.px-lg-1 {\\n    padding-right: 0.25rem !important;\\n  }\\n\\n  .pb-lg-1,\\n.py-lg-1 {\\n    padding-bottom: 0.25rem !important;\\n  }\\n\\n  .pl-lg-1,\\n.px-lg-1 {\\n    padding-left: 0.25rem !important;\\n  }\\n\\n  .p-lg-2 {\\n    padding: 0.5rem !important;\\n  }\\n\\n  .pt-lg-2,\\n.py-lg-2 {\\n    padding-top: 0.5rem !important;\\n  }\\n\\n  .pr-lg-2,\\n.px-lg-2 {\\n    padding-right: 0.5rem !important;\\n  }\\n\\n  .pb-lg-2,\\n.py-lg-2 {\\n    padding-bottom: 0.5rem !important;\\n  }\\n\\n  .pl-lg-2,\\n.px-lg-2 {\\n    padding-left: 0.5rem !important;\\n  }\\n\\n  .p-lg-3 {\\n    padding: 1rem !important;\\n  }\\n\\n  .pt-lg-3,\\n.py-lg-3 {\\n    padding-top: 1rem !important;\\n  }\\n\\n  .pr-lg-3,\\n.px-lg-3 {\\n    padding-right: 1rem !important;\\n  }\\n\\n  .pb-lg-3,\\n.py-lg-3 {\\n    padding-bottom: 1rem !important;\\n  }\\n\\n  .pl-lg-3,\\n.px-lg-3 {\\n    padding-left: 1rem !important;\\n  }\\n\\n  .p-lg-4 {\\n    padding: 1.5rem !important;\\n  }\\n\\n  .pt-lg-4,\\n.py-lg-4 {\\n    padding-top: 1.5rem !important;\\n  }\\n\\n  .pr-lg-4,\\n.px-lg-4 {\\n    padding-right: 1.5rem !important;\\n  }\\n\\n  .pb-lg-4,\\n.py-lg-4 {\\n    padding-bottom: 1.5rem !important;\\n  }\\n\\n  .pl-lg-4,\\n.px-lg-4 {\\n    padding-left: 1.5rem !important;\\n  }\\n\\n  .p-lg-5 {\\n    padding: 3rem !important;\\n  }\\n\\n  .pt-lg-5,\\n.py-lg-5 {\\n    padding-top: 3rem !important;\\n  }\\n\\n  .pr-lg-5,\\n.px-lg-5 {\\n    padding-right: 3rem !important;\\n  }\\n\\n  .pb-lg-5,\\n.py-lg-5 {\\n    padding-bottom: 3rem !important;\\n  }\\n\\n  .pl-lg-5,\\n.px-lg-5 {\\n    padding-left: 3rem !important;\\n  }\\n\\n  .m-lg-n1 {\\n    margin: -0.25rem !important;\\n  }\\n\\n  .mt-lg-n1,\\n.my-lg-n1 {\\n    margin-top: -0.25rem !important;\\n  }\\n\\n  .mr-lg-n1,\\n.mx-lg-n1 {\\n    margin-right: -0.25rem !important;\\n  }\\n\\n  .mb-lg-n1,\\n.my-lg-n1 {\\n    margin-bottom: -0.25rem !important;\\n  }\\n\\n  .ml-lg-n1,\\n.mx-lg-n1 {\\n    margin-left: -0.25rem !important;\\n  }\\n\\n  .m-lg-n2 {\\n    margin: -0.5rem !important;\\n  }\\n\\n  .mt-lg-n2,\\n.my-lg-n2 {\\n    margin-top: -0.5rem !important;\\n  }\\n\\n  .mr-lg-n2,\\n.mx-lg-n2 {\\n    margin-right: -0.5rem !important;\\n  }\\n\\n  .mb-lg-n2,\\n.my-lg-n2 {\\n    margin-bottom: -0.5rem !important;\\n  }\\n\\n  .ml-lg-n2,\\n.mx-lg-n2 {\\n    margin-left: -0.5rem !important;\\n  }\\n\\n  .m-lg-n3 {\\n    margin: -1rem !important;\\n  }\\n\\n  .mt-lg-n3,\\n.my-lg-n3 {\\n    margin-top: -1rem !important;\\n  }\\n\\n  .mr-lg-n3,\\n.mx-lg-n3 {\\n    margin-right: -1rem !important;\\n  }\\n\\n  .mb-lg-n3,\\n.my-lg-n3 {\\n    margin-bottom: -1rem !important;\\n  }\\n\\n  .ml-lg-n3,\\n.mx-lg-n3 {\\n    margin-left: -1rem !important;\\n  }\\n\\n  .m-lg-n4 {\\n    margin: -1.5rem !important;\\n  }\\n\\n  .mt-lg-n4,\\n.my-lg-n4 {\\n    margin-top: -1.5rem !important;\\n  }\\n\\n  .mr-lg-n4,\\n.mx-lg-n4 {\\n    margin-right: -1.5rem !important;\\n  }\\n\\n  .mb-lg-n4,\\n.my-lg-n4 {\\n    margin-bottom: -1.5rem !important;\\n  }\\n\\n  .ml-lg-n4,\\n.mx-lg-n4 {\\n    margin-left: -1.5rem !important;\\n  }\\n\\n  .m-lg-n5 {\\n    margin: -3rem !important;\\n  }\\n\\n  .mt-lg-n5,\\n.my-lg-n5 {\\n    margin-top: -3rem !important;\\n  }\\n\\n  .mr-lg-n5,\\n.mx-lg-n5 {\\n    margin-right: -3rem !important;\\n  }\\n\\n  .mb-lg-n5,\\n.my-lg-n5 {\\n    margin-bottom: -3rem !important;\\n  }\\n\\n  .ml-lg-n5,\\n.mx-lg-n5 {\\n    margin-left: -3rem !important;\\n  }\\n\\n  .m-lg-auto {\\n    margin: auto !important;\\n  }\\n\\n  .mt-lg-auto,\\n.my-lg-auto {\\n    margin-top: auto !important;\\n  }\\n\\n  .mr-lg-auto,\\n.mx-lg-auto {\\n    margin-right: auto !important;\\n  }\\n\\n  .mb-lg-auto,\\n.my-lg-auto {\\n    margin-bottom: auto !important;\\n  }\\n\\n  .ml-lg-auto,\\n.mx-lg-auto {\\n    margin-left: auto !important;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .m-xl-0 {\\n    margin: 0 !important;\\n  }\\n\\n  .mt-xl-0,\\n.my-xl-0 {\\n    margin-top: 0 !important;\\n  }\\n\\n  .mr-xl-0,\\n.mx-xl-0 {\\n    margin-right: 0 !important;\\n  }\\n\\n  .mb-xl-0,\\n.my-xl-0 {\\n    margin-bottom: 0 !important;\\n  }\\n\\n  .ml-xl-0,\\n.mx-xl-0 {\\n    margin-left: 0 !important;\\n  }\\n\\n  .m-xl-1 {\\n    margin: 0.25rem !important;\\n  }\\n\\n  .mt-xl-1,\\n.my-xl-1 {\\n    margin-top: 0.25rem !important;\\n  }\\n\\n  .mr-xl-1,\\n.mx-xl-1 {\\n    margin-right: 0.25rem !important;\\n  }\\n\\n  .mb-xl-1,\\n.my-xl-1 {\\n    margin-bottom: 0.25rem !important;\\n  }\\n\\n  .ml-xl-1,\\n.mx-xl-1 {\\n    margin-left: 0.25rem !important;\\n  }\\n\\n  .m-xl-2 {\\n    margin: 0.5rem !important;\\n  }\\n\\n  .mt-xl-2,\\n.my-xl-2 {\\n    margin-top: 0.5rem !important;\\n  }\\n\\n  .mr-xl-2,\\n.mx-xl-2 {\\n    margin-right: 0.5rem !important;\\n  }\\n\\n  .mb-xl-2,\\n.my-xl-2 {\\n    margin-bottom: 0.5rem !important;\\n  }\\n\\n  .ml-xl-2,\\n.mx-xl-2 {\\n    margin-left: 0.5rem !important;\\n  }\\n\\n  .m-xl-3 {\\n    margin: 1rem !important;\\n  }\\n\\n  .mt-xl-3,\\n.my-xl-3 {\\n    margin-top: 1rem !important;\\n  }\\n\\n  .mr-xl-3,\\n.mx-xl-3 {\\n    margin-right: 1rem !important;\\n  }\\n\\n  .mb-xl-3,\\n.my-xl-3 {\\n    margin-bottom: 1rem !important;\\n  }\\n\\n  .ml-xl-3,\\n.mx-xl-3 {\\n    margin-left: 1rem !important;\\n  }\\n\\n  .m-xl-4 {\\n    margin: 1.5rem !important;\\n  }\\n\\n  .mt-xl-4,\\n.my-xl-4 {\\n    margin-top: 1.5rem !important;\\n  }\\n\\n  .mr-xl-4,\\n.mx-xl-4 {\\n    margin-right: 1.5rem !important;\\n  }\\n\\n  .mb-xl-4,\\n.my-xl-4 {\\n    margin-bottom: 1.5rem !important;\\n  }\\n\\n  .ml-xl-4,\\n.mx-xl-4 {\\n    margin-left: 1.5rem !important;\\n  }\\n\\n  .m-xl-5 {\\n    margin: 3rem !important;\\n  }\\n\\n  .mt-xl-5,\\n.my-xl-5 {\\n    margin-top: 3rem !important;\\n  }\\n\\n  .mr-xl-5,\\n.mx-xl-5 {\\n    margin-right: 3rem !important;\\n  }\\n\\n  .mb-xl-5,\\n.my-xl-5 {\\n    margin-bottom: 3rem !important;\\n  }\\n\\n  .ml-xl-5,\\n.mx-xl-5 {\\n    margin-left: 3rem !important;\\n  }\\n\\n  .p-xl-0 {\\n    padding: 0 !important;\\n  }\\n\\n  .pt-xl-0,\\n.py-xl-0 {\\n    padding-top: 0 !important;\\n  }\\n\\n  .pr-xl-0,\\n.px-xl-0 {\\n    padding-right: 0 !important;\\n  }\\n\\n  .pb-xl-0,\\n.py-xl-0 {\\n    padding-bottom: 0 !important;\\n  }\\n\\n  .pl-xl-0,\\n.px-xl-0 {\\n    padding-left: 0 !important;\\n  }\\n\\n  .p-xl-1 {\\n    padding: 0.25rem !important;\\n  }\\n\\n  .pt-xl-1,\\n.py-xl-1 {\\n    padding-top: 0.25rem !important;\\n  }\\n\\n  .pr-xl-1,\\n.px-xl-1 {\\n    padding-right: 0.25rem !important;\\n  }\\n\\n  .pb-xl-1,\\n.py-xl-1 {\\n    padding-bottom: 0.25rem !important;\\n  }\\n\\n  .pl-xl-1,\\n.px-xl-1 {\\n    padding-left: 0.25rem !important;\\n  }\\n\\n  .p-xl-2 {\\n    padding: 0.5rem !important;\\n  }\\n\\n  .pt-xl-2,\\n.py-xl-2 {\\n    padding-top: 0.5rem !important;\\n  }\\n\\n  .pr-xl-2,\\n.px-xl-2 {\\n    padding-right: 0.5rem !important;\\n  }\\n\\n  .pb-xl-2,\\n.py-xl-2 {\\n    padding-bottom: 0.5rem !important;\\n  }\\n\\n  .pl-xl-2,\\n.px-xl-2 {\\n    padding-left: 0.5rem !important;\\n  }\\n\\n  .p-xl-3 {\\n    padding: 1rem !important;\\n  }\\n\\n  .pt-xl-3,\\n.py-xl-3 {\\n    padding-top: 1rem !important;\\n  }\\n\\n  .pr-xl-3,\\n.px-xl-3 {\\n    padding-right: 1rem !important;\\n  }\\n\\n  .pb-xl-3,\\n.py-xl-3 {\\n    padding-bottom: 1rem !important;\\n  }\\n\\n  .pl-xl-3,\\n.px-xl-3 {\\n    padding-left: 1rem !important;\\n  }\\n\\n  .p-xl-4 {\\n    padding: 1.5rem !important;\\n  }\\n\\n  .pt-xl-4,\\n.py-xl-4 {\\n    padding-top: 1.5rem !important;\\n  }\\n\\n  .pr-xl-4,\\n.px-xl-4 {\\n    padding-right: 1.5rem !important;\\n  }\\n\\n  .pb-xl-4,\\n.py-xl-4 {\\n    padding-bottom: 1.5rem !important;\\n  }\\n\\n  .pl-xl-4,\\n.px-xl-4 {\\n    padding-left: 1.5rem !important;\\n  }\\n\\n  .p-xl-5 {\\n    padding: 3rem !important;\\n  }\\n\\n  .pt-xl-5,\\n.py-xl-5 {\\n    padding-top: 3rem !important;\\n  }\\n\\n  .pr-xl-5,\\n.px-xl-5 {\\n    padding-right: 3rem !important;\\n  }\\n\\n  .pb-xl-5,\\n.py-xl-5 {\\n    padding-bottom: 3rem !important;\\n  }\\n\\n  .pl-xl-5,\\n.px-xl-5 {\\n    padding-left: 3rem !important;\\n  }\\n\\n  .m-xl-n1 {\\n    margin: -0.25rem !important;\\n  }\\n\\n  .mt-xl-n1,\\n.my-xl-n1 {\\n    margin-top: -0.25rem !important;\\n  }\\n\\n  .mr-xl-n1,\\n.mx-xl-n1 {\\n    margin-right: -0.25rem !important;\\n  }\\n\\n  .mb-xl-n1,\\n.my-xl-n1 {\\n    margin-bottom: -0.25rem !important;\\n  }\\n\\n  .ml-xl-n1,\\n.mx-xl-n1 {\\n    margin-left: -0.25rem !important;\\n  }\\n\\n  .m-xl-n2 {\\n    margin: -0.5rem !important;\\n  }\\n\\n  .mt-xl-n2,\\n.my-xl-n2 {\\n    margin-top: -0.5rem !important;\\n  }\\n\\n  .mr-xl-n2,\\n.mx-xl-n2 {\\n    margin-right: -0.5rem !important;\\n  }\\n\\n  .mb-xl-n2,\\n.my-xl-n2 {\\n    margin-bottom: -0.5rem !important;\\n  }\\n\\n  .ml-xl-n2,\\n.mx-xl-n2 {\\n    margin-left: -0.5rem !important;\\n  }\\n\\n  .m-xl-n3 {\\n    margin: -1rem !important;\\n  }\\n\\n  .mt-xl-n3,\\n.my-xl-n3 {\\n    margin-top: -1rem !important;\\n  }\\n\\n  .mr-xl-n3,\\n.mx-xl-n3 {\\n    margin-right: -1rem !important;\\n  }\\n\\n  .mb-xl-n3,\\n.my-xl-n3 {\\n    margin-bottom: -1rem !important;\\n  }\\n\\n  .ml-xl-n3,\\n.mx-xl-n3 {\\n    margin-left: -1rem !important;\\n  }\\n\\n  .m-xl-n4 {\\n    margin: -1.5rem !important;\\n  }\\n\\n  .mt-xl-n4,\\n.my-xl-n4 {\\n    margin-top: -1.5rem !important;\\n  }\\n\\n  .mr-xl-n4,\\n.mx-xl-n4 {\\n    margin-right: -1.5rem !important;\\n  }\\n\\n  .mb-xl-n4,\\n.my-xl-n4 {\\n    margin-bottom: -1.5rem !important;\\n  }\\n\\n  .ml-xl-n4,\\n.mx-xl-n4 {\\n    margin-left: -1.5rem !important;\\n  }\\n\\n  .m-xl-n5 {\\n    margin: -3rem !important;\\n  }\\n\\n  .mt-xl-n5,\\n.my-xl-n5 {\\n    margin-top: -3rem !important;\\n  }\\n\\n  .mr-xl-n5,\\n.mx-xl-n5 {\\n    margin-right: -3rem !important;\\n  }\\n\\n  .mb-xl-n5,\\n.my-xl-n5 {\\n    margin-bottom: -3rem !important;\\n  }\\n\\n  .ml-xl-n5,\\n.mx-xl-n5 {\\n    margin-left: -3rem !important;\\n  }\\n\\n  .m-xl-auto {\\n    margin: auto !important;\\n  }\\n\\n  .mt-xl-auto,\\n.my-xl-auto {\\n    margin-top: auto !important;\\n  }\\n\\n  .mr-xl-auto,\\n.mx-xl-auto {\\n    margin-right: auto !important;\\n  }\\n\\n  .mb-xl-auto,\\n.my-xl-auto {\\n    margin-bottom: auto !important;\\n  }\\n\\n  .ml-xl-auto,\\n.mx-xl-auto {\\n    margin-left: auto !important;\\n  }\\n}\\n.stretched-link::after {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 1;\\n  pointer-events: auto;\\n  content: \\\"\\\";\\n  background-color: rgba(0, 0, 0, 0);\\n}\\n\\n.text-monospace {\\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace !important;\\n}\\n\\n.text-justify {\\n  text-align: justify !important;\\n}\\n\\n.text-wrap {\\n  white-space: normal !important;\\n}\\n\\n.text-nowrap {\\n  white-space: nowrap !important;\\n}\\n\\n.text-truncate {\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n.text-left {\\n  text-align: left !important;\\n}\\n\\n.text-right {\\n  text-align: right !important;\\n}\\n\\n.text-center {\\n  text-align: center !important;\\n}\\n\\n@media (min-width: 576px) {\\n  .text-sm-left {\\n    text-align: left !important;\\n  }\\n\\n  .text-sm-right {\\n    text-align: right !important;\\n  }\\n\\n  .text-sm-center {\\n    text-align: center !important;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .text-md-left {\\n    text-align: left !important;\\n  }\\n\\n  .text-md-right {\\n    text-align: right !important;\\n  }\\n\\n  .text-md-center {\\n    text-align: center !important;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .text-lg-left {\\n    text-align: left !important;\\n  }\\n\\n  .text-lg-right {\\n    text-align: right !important;\\n  }\\n\\n  .text-lg-center {\\n    text-align: center !important;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .text-xl-left {\\n    text-align: left !important;\\n  }\\n\\n  .text-xl-right {\\n    text-align: right !important;\\n  }\\n\\n  .text-xl-center {\\n    text-align: center !important;\\n  }\\n}\\n.text-lowercase {\\n  text-transform: lowercase !important;\\n}\\n\\n.text-uppercase {\\n  text-transform: uppercase !important;\\n}\\n\\n.text-capitalize {\\n  text-transform: capitalize !important;\\n}\\n\\n.font-weight-light {\\n  font-weight: 300 !important;\\n}\\n\\n.font-weight-lighter {\\n  font-weight: lighter !important;\\n}\\n\\n.font-weight-normal {\\n  font-weight: 400 !important;\\n}\\n\\n.font-weight-bold {\\n  font-weight: 700 !important;\\n}\\n\\n.font-weight-bolder {\\n  font-weight: bolder !important;\\n}\\n\\n.font-italic {\\n  font-style: italic !important;\\n}\\n\\n.text-white {\\n  color: #fff !important;\\n}\\n\\n.text-primary {\\n  color: #3A3335 !important;\\n}\\n\\na.text-primary:hover, a.text-primary:focus {\\n  color: #110f10 !important;\\n}\\n\\n.text-secondary {\\n  color: #717568 !important;\\n}\\n\\na.text-secondary:hover, a.text-secondary:focus {\\n  color: #4a4d44 !important;\\n}\\n\\n.text-success {\\n  color: #42D9C8 !important;\\n}\\n\\na.text-success:hover, a.text-success:focus {\\n  color: #23ac9c !important;\\n}\\n\\n.text-info {\\n  color: #BACBA9 !important;\\n}\\n\\na.text-info:hover, a.text-info:focus {\\n  color: #94ae79 !important;\\n}\\n\\n.text-warning {\\n  color: #F1BF98 !important;\\n}\\n\\na.text-warning:hover, a.text-warning:focus {\\n  color: #e89555 !important;\\n}\\n\\n.text-danger {\\n  color: #D81E5B !important;\\n}\\n\\na.text-danger:hover, a.text-danger:focus {\\n  color: #95153f !important;\\n}\\n\\n.text-light {\\n  color: #f8f9fa !important;\\n}\\n\\na.text-light:hover, a.text-light:focus {\\n  color: #cbd3da !important;\\n}\\n\\n.text-dark {\\n  color: #343a40 !important;\\n}\\n\\na.text-dark:hover, a.text-dark:focus {\\n  color: #121416 !important;\\n}\\n\\n.text-body {\\n  color: #212529 !important;\\n}\\n\\n.text-muted {\\n  color: #6c757d !important;\\n}\\n\\n.text-black-50 {\\n  color: rgba(0, 0, 0, 0.5) !important;\\n}\\n\\n.text-white-50 {\\n  color: rgba(255, 255, 255, 0.5) !important;\\n}\\n\\n.text-hide {\\n  font: 0/0 a;\\n  color: transparent;\\n  text-shadow: none;\\n  background-color: transparent;\\n  border: 0;\\n}\\n\\n.text-decoration-none {\\n  text-decoration: none !important;\\n}\\n\\n.text-break {\\n  word-break: break-word !important;\\n  overflow-wrap: break-word !important;\\n}\\n\\n.text-reset {\\n  color: inherit !important;\\n}\\n\\n.visible {\\n  visibility: visible !important;\\n}\\n\\n.invisible {\\n  visibility: hidden !important;\\n}\\n\\n@media print {\\n  *,\\n*::before,\\n*::after {\\n    text-shadow: none !important;\\n    box-shadow: none !important;\\n  }\\n\\n  a:not(.btn) {\\n    text-decoration: underline;\\n  }\\n\\n  abbr[title]::after {\\n    content: \\\" (\\\" attr(title) \\\")\\\";\\n  }\\n\\n  pre {\\n    white-space: pre-wrap !important;\\n  }\\n\\n  pre,\\nblockquote {\\n    border: 1px solid #adb5bd;\\n    page-break-inside: avoid;\\n  }\\n\\n  thead {\\n    display: table-header-group;\\n  }\\n\\n  tr,\\nimg {\\n    page-break-inside: avoid;\\n  }\\n\\n  p,\\nh2,\\nh3 {\\n    orphans: 3;\\n    widows: 3;\\n  }\\n\\n  h2,\\nh3 {\\n    page-break-after: avoid;\\n  }\\n\\n  @page {\\n    size: a3;\\n  }\\n  body {\\n    min-width: 992px !important;\\n  }\\n\\n  .container {\\n    min-width: 992px !important;\\n  }\\n\\n  .navbar {\\n    display: none;\\n  }\\n\\n  .badge {\\n    border: 1px solid #000;\\n  }\\n\\n  .table {\\n    border-collapse: collapse !important;\\n  }\\n  .table td,\\n.table th {\\n    background-color: #fff !important;\\n  }\\n\\n  .table-bordered th,\\n.table-bordered td {\\n    border: 1px solid #dee2e6 !important;\\n  }\\n\\n  .table-dark {\\n    color: inherit;\\n  }\\n  .table-dark th,\\n.table-dark td,\\n.table-dark thead th,\\n.table-dark tbody + tbody {\\n    border-color: #dee2e6;\\n  }\\n\\n  .table .thead-dark th {\\n    color: inherit;\\n    border-color: #dee2e6;\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/custom.scss?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/postcss-loader/src??ref--8-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\np[data-v-0bc4212e] {\\n  font-size: 20px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/MainView.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/popup/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/popup/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\nhtml {\\n  width: 400px;\\n  height: 400px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/popup/App.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"953d58ce\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/MainView.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/popup/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/popup/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/popup/App.vue?vue&type=style&index=0&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"3e52ea0e\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/popup/App.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/MainView.vue":
/*!*************************************!*\
  !*** ./src/components/MainView.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MainView_vue_vue_type_template_id_0bc4212e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainView.vue?vue&type=template&id=0bc4212e&scoped=true& */ \"./src/components/MainView.vue?vue&type=template&id=0bc4212e&scoped=true&\");\n/* harmony import */ var _MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView.vue?vue&type=script&lang=js& */ \"./src/components/MainView.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _MainView_vue_vue_type_style_index_0_id_0bc4212e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css& */ \"./src/components/MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MainView_vue_vue_type_template_id_0bc4212e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MainView_vue_vue_type_template_id_0bc4212e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0bc4212e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/MainView.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/MainView.vue?");

/***/ }),

/***/ "./src/components/MainView.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/MainView.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/MainView.vue?");

/***/ }),

/***/ "./src/components/MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./src/components/MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_id_0bc4212e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=style&index=0&id=0bc4212e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_id_0bc4212e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_id_0bc4212e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_id_0bc4212e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_id_0bc4212e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_id_0bc4212e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/MainView.vue?");

/***/ }),

/***/ "./src/components/MainView.vue?vue&type=template&id=0bc4212e&scoped=true&":
/*!********************************************************************************!*\
  !*** ./src/components/MainView.vue?vue&type=template&id=0bc4212e&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_e26265aa_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"e26265aa-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=template&id=0bc4212e&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"e26265aa-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=template&id=0bc4212e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_e26265aa_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_e26265aa_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/MainView.vue?");

/***/ }),

/***/ "./src/popup/App.vue":
/*!***************************!*\
  !*** ./src/popup/App.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3a0a60d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3a0a60d6& */ \"./src/popup/App.vue?vue&type=template&id=3a0a60d6&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/popup/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./src/popup/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3a0a60d6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3a0a60d6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/popup/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/popup/App.vue?");

/***/ }),

/***/ "./src/popup/App.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/popup/App.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/popup/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/popup/App.vue?");

/***/ }),

/***/ "./src/popup/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************!*\
  !*** ./src/popup/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/popup/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/popup/App.vue?");

/***/ }),

/***/ "./src/popup/App.vue?vue&type=template&id=3a0a60d6&":
/*!**********************************************************!*\
  !*** ./src/popup/App.vue?vue&type=template&id=3a0a60d6& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_e26265aa_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3a0a60d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"e26265aa-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3a0a60d6& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"e26265aa-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/popup/App.vue?vue&type=template&id=3a0a60d6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_e26265aa_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3a0a60d6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_e26265aa_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3a0a60d6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/popup/App.vue?");

/***/ }),

/***/ "./src/popup/main.js":
/*!***************************!*\
  !*** ./src/popup/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_szymon_projekty_kot_vue_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ \"./src/popup/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ \"./src/popup/router.js\");\n/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/custom.scss */ \"./src/styles/custom.scss\");\n/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-vue */ \"./node_modules/bootstrap-vue/esm/index.js\");\n\n\n\n\n\n\n\n // import \"bootstrap/dist/css/bootstrap.css\";\n// import \"bootstrap-vue/dist/bootstrap-vue.css\";\n\n\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__[\"BootstrapVue\"]);\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__[\"BootstrapVueIcons\"]);\n/* eslint-disable no-new */\n\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  router: _router__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  el: '#app',\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./src/popup/main.js?");

/***/ }),

/***/ "./src/popup/router.js":
/*!*****************************!*\
  !*** ./src/popup/router.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MainView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/MainView.vue */ \"./src/components/MainView.vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _okta_okta_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-vue */ \"./node_modules/@okta/okta-vue/bundles/okta-vue.umd.js\");\n/* harmony import */ var _okta_okta_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_vue__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(_okta_okta_vue__WEBPACK_IMPORTED_MODULE_2___default.a, {\n  issuer: 'https://dev-333233.okta.com/oauth2/default',\n  clientId: '0oa5bmaa0ijloZhuW357',\n  redirectUri: 'https://ioepolmibkjplofldcaboodhoehjpoba.chromiumapp.org/implicit/callback',\n  scopes: ['openid', 'profile', 'email']\n});\nvar router = new vue_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n  mode: 'history',\n  routes: [{\n    path: '/implicit/callback',\n    component: _okta_okta_vue__WEBPACK_IMPORTED_MODULE_2___default.a.handleCallback()\n  }, {\n    path: '/',\n    component: _components_MainView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"] // meta: {\n    //   requiresAuth: true\n    // }\n\n  }, {\n    path: '/auth',\n    component: _components_MainView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    meta: {\n      requiresAuth: true\n    }\n  }]\n});\nrouter.beforeEach(vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype.$auth.authRedirectGuard());\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/popup/router.js?");

/***/ }),

/***/ "./src/styles/custom.scss":
/*!********************************!*\
  !*** ./src/styles/custom.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!../../node_modules/postcss-loader/src??ref--8-oneOf-3-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./custom.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/custom.scss\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"39100b92\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/custom.scss?");

/***/ }),

/***/ "./src/utils/loginState.js":
/*!*********************************!*\
  !*** ./src/utils/loginState.js ***!
  \*********************************/
/*! exports provided: checkIsLogged, logout, clearStoredData, login, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(browser) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIsLogged\", function() { return checkIsLogged; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearStoredData\", function() { return clearStoredData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n\n\n\n\n\n\n\nfunction checkIsLogged() {\n  return _checkIsLogged.apply(this, arguments);\n}\n\nfunction _checkIsLogged() {\n  _checkIsLogged = Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var tokens;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return browser.storage.sync.get(\"tokens\");\n\n          case 2:\n            tokens = _context.sent;\n\n            if (!(Object.keys(tokens).length === 0)) {\n              _context.next = 6;\n              break;\n            }\n\n            console.log(\"no tokens found in local storage\");\n            return _context.abrupt(\"return\", false);\n\n          case 6:\n            console.log(\"token: \".concat(JSON.stringify(tokens)));\n\n            if (!(Number(tokens.tokens.expire_at) > Date.now())) {\n              _context.next = 10;\n              break;\n            }\n\n            console.log(\"access token not expired\");\n            return _context.abrupt(\"return\", true);\n\n          case 10:\n            console.log(\"expire at: \".concat(tokens.tokens.expire_at, \" curr: \").concat(Date.now()));\n            console.log(\"access token expired, refreshing - to be implemented\");\n            _context.next = 14;\n            return this.clearStoredData();\n\n          case 14:\n            return _context.abrupt(\"return\", true);\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n  return _checkIsLogged.apply(this, arguments);\n}\n\nfunction logout() {\n  return _logout.apply(this, arguments);\n}\n\nfunction _logout() {\n  _logout = Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var fetch, tokens, accessToken, params, logoutResponse;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            fetch = window.fetch.bind(window);\n            _context2.prev = 1;\n            _context2.next = 4;\n            return browser.storage.sync.get(\"tokens\");\n\n          case 4:\n            tokens = _context2.sent;\n            accessToken = tokens === null || tokens === void 0 ? void 0 : tokens.tokens.AccessToken;\n            params = {\n              AccessToken: accessToken\n            };\n            _context2.next = 9;\n            return fetch(\"https://cognito-idp.us-west-2.amazonaws.com\", {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/x-amz-json-1.1\",\n                \"X-Amz-Target\": \"AWSCognitoIdentityProviderService.GlobalSignOut\"\n              },\n              body: JSON.stringify(params)\n            });\n\n          case 9:\n            logoutResponse = _context2.sent;\n            _context2.next = 12;\n            return logoutResponse.json();\n\n          case 12:\n            _context2.next = 14;\n            return clearStoredData();\n\n          case 14:\n            _context2.next = 19;\n            break;\n\n          case 16:\n            _context2.prev = 16;\n            _context2.t0 = _context2[\"catch\"](1);\n            console.log(\"could not log out \".concat(_context2.t0));\n\n          case 19:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[1, 16]]);\n  }));\n  return _logout.apply(this, arguments);\n}\n\nfunction clearStoredData() {\n  return _clearStoredData.apply(this, arguments);\n}\n\nfunction _clearStoredData() {\n  _clearStoredData = Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return browser.storage.sync.remove(\"tokens\");\n\n          case 2:\n            _context3.next = 4;\n            return browser.storage.sync.remove(\"userEmail\");\n\n          case 4:\n            _context3.next = 6;\n            return browser.storage.sync.remove(\"userName\");\n\n          case 6:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _clearStoredData.apply(this, arguments);\n}\n\nfunction login() {\n  return _login.apply(this, arguments);\n}\n\nfunction _login() {\n  _login = Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n    var fetch, params, authResponse, authData, tokens;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            //! test\n            fetch = window.fetch.bind(window);\n            params = {\n              AuthParameters: {\n                USERNAME: \"szym\",\n                PASSWORD: \"zaq1@WSX\"\n              },\n              AuthFlow: \"USER_PASSWORD_AUTH\",\n              ClientId: \"1rh7dr1vdiviu7k87fh9vm18q6\"\n            };\n            _context4.next = 4;\n            return fetch(\"https://cognito-idp.us-west-2.amazonaws.com\", {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/x-amz-json-1.1\",\n                \"X-Amz-Target\": \"AWSCognitoIdentityProviderService.InitiateAuth\"\n              },\n              body: JSON.stringify(params)\n            });\n\n          case 4:\n            authResponse = _context4.sent;\n            _context4.next = 7;\n            return authResponse.json();\n\n          case 7:\n            authData = _context4.sent;\n            tokens = authData.AuthenticationResult;\n            Object.assign(tokens, {\n              expire_at: \"\".concat(Date.now() + 3600 * 1000)\n            });\n            _context4.next = 12;\n            return browser.storage.sync.set({\n              tokens: tokens\n            });\n\n          case 12:\n            return _context4.abrupt(\"return\", tokens.AccessToken);\n\n          case 13:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _login.apply(this, arguments);\n}\n\nfunction getUser(_x) {\n  return _getUser.apply(this, arguments);\n}\n\nfunction _getUser() {\n  _getUser = Object(_home_szymon_projekty_kot_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(accessToken) {\n    var userResponse, userData, currUserName, currUserEmail;\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return fetch(\"https://cognito-idp.us-west-2.amazonaws.com\", {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/x-amz-json-1.1\",\n                \"X-Amz-Target\": \"AWSCognitoIdentityProviderService.GetUser\"\n              },\n              body: JSON.stringify({\n                AccessToken: accessToken\n              })\n            });\n\n          case 2:\n            userResponse = _context5.sent;\n            _context5.next = 5;\n            return userResponse.json();\n\n          case 5:\n            userData = _context5.sent;\n            console.log(userData);\n            currUserName = userData.Username;\n            currUserEmail = userData.UserAttributes.find(function (x) {\n              return x.Name === \"email\";\n            }).Value;\n            _context5.next = 11;\n            return browser.storage.sync.set({\n              userName: currUserName,\n              userEmail: currUserEmail\n            });\n\n          case 11:\n            return _context5.abrupt(\"return\", currUserName);\n\n          case 12:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _getUser.apply(this, arguments);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! webextension-polyfill */ \"./node_modules/webextension-polyfill/dist/browser-polyfill.js\")))\n\n//# sourceURL=webpack:///./src/utils/loginState.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/popup/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/szymon/projekty/kot-vue/src/popup/main.js */\"./src/popup/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/popup/main.js?");

/***/ })

/******/ });