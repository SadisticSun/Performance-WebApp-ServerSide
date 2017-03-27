self.addEventListener('install', function(event){
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('fetch', function(event){
  console.log('Service worker is running');
  console.log(event.request.url);
});
