'use strict';

var cacheName = 'v1';

var cacheFiles = [
	'/',
  'https://fonts.googleapis.com/css?family=Raleway:400,400i,700'
];

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing...');
  function onInstall() {
    return caches.open(cacheName).then(function (cache) {
      console.log('[Service Worker] Caching files...');
      return cache.addAll(cacheFiles);
    });
  }

  event.waitUntil(onInstall(event));
  });

self.addEventListener('fetch', function (event) {
  console.log('[Service Worker] Fetching files...');
  var request = event.request;
  event.respondWith(fetch(request).catch(function (err) {
    return fetchCoreFile(request.url);
  }).catch(function (err) {
    return fetchCoreFile('/offline.html');
  }));
});
