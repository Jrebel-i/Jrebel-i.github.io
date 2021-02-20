/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Web/hexo/public/404.html","67348087f6f817163154e6d5f9f70225"],["D:/Web/hexo/public/archives/2021/01/index.html","5364763d4f3ed7f94e66b36983a96830"],["D:/Web/hexo/public/archives/2021/02/index.html","7702846e68df0ea7cbb46dea660821ba"],["D:/Web/hexo/public/archives/2021/index.html","f571e6413c53af23b435340aa78a53ce"],["D:/Web/hexo/public/archives/index.html","fc90ce37b504b11b6d0029c4467b43c8"],["D:/Web/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/Web/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/Web/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/Web/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/Web/hexo/public/bangumis/index.html","c26ce70c6f92e5342e7366e783f2e848"],["D:/Web/hexo/public/categories/index.html","99912f039e68ba340ac658e4a4759f6b"],["D:/Web/hexo/public/css/aplayerdiy.css","1013885041fc5d7ceffd853a357f9fd1"],["D:/Web/hexo/public/css/badge.css","4047f7bf45e5d0b702870762a1faabd4"],["D:/Web/hexo/public/css/chocolate.css","a983a5a303914e5be1e29ae0ce7580c1"],["D:/Web/hexo/public/css/fish.css","27ea9507cfe7910e2784a516be9f5f2f"],["D:/Web/hexo/public/css/index.css","df838eab38ad5986dbce5c5cae9ea7f8"],["D:/Web/hexo/public/css/mouse.css","37852889334fc34289c60bebfa07eff0"],["D:/Web/hexo/public/css/tag.css","088191c91935eb23e80973cf8de4fa39"],["D:/Web/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Web/hexo/public/gitcalendar/gitcalendar.css","a1db9e78a03ba862d74ea1f3e675386f"],["D:/Web/hexo/public/gitcalendar/gitcalendar.js","317228aab23ea3d1a3b2bac8118d7b97"],["D:/Web/hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Web/hexo/public/img/a2.jpg","9c691041363af82c5d7221855bcebe51"],["D:/Web/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Web/hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Web/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Web/hexo/public/img/funny.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Web/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Web/hexo/public/index.html","926d5c3255150d4a4af9a7e8116ee1d4"],["D:/Web/hexo/public/js/calendar.js","73b7d8e99213fc557dacff240265ad4f"],["D:/Web/hexo/public/js/chocolate.js","cb5551df29e6c323fe3e7ddf634b3931"],["D:/Web/hexo/public/js/languages.js","f44cc882705a586231f80aee4c399460"],["D:/Web/hexo/public/js/main.js","bcb975fcc4b9608ccfa3bc6004b38b65"],["D:/Web/hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Web/hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Web/hexo/public/js/title.js","96807a68be741645cf7fad1f8ac115bb"],["D:/Web/hexo/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/Web/hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Web/hexo/public/js/video.js","89ff62b65f192d8e45fc681b082fea3d"],["D:/Web/hexo/public/link/index.html","b62d44eb403011db21ee15a7d438f1e3"],["D:/Web/hexo/public/live2d-widget/README.html","7b33a5fd936e644734c8fa3781b043ab"],["D:/Web/hexo/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Web/hexo/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Web/hexo/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Web/hexo/public/live2d-widget/autoload.js","864a3e598bd47c726a5174342ce69b67"],["D:/Web/hexo/public/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["D:/Web/hexo/public/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["D:/Web/hexo/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Web/hexo/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Web/hexo/public/live2d-widget/waifu.css","15a5cb822d1cbc0241c00581c03d6c2b"],["D:/Web/hexo/public/messageboard/index.html","d77b3bd9c9dd37bf5490a34e99c19fad"],["D:/Web/hexo/public/onedrive/index.html","9736de9f335c63802ace7872b1312d91"],["D:/Web/hexo/public/posts/116b0f3c/index.html","bbfb3eb819e2d54aebd807e9e42065de"],["D:/Web/hexo/public/posts/56e0c1a5/index.html","884acbc7290c8b162baa2de46d4674d5"],["D:/Web/hexo/public/tags/index.html","e06ed1b21472d24ceef5397d0b45a1bf"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







