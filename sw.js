const CACHE = 'ecolink-zambeze-v4';
const ASSETS = [
  './', './index.html', './style.css', './app.js', './css/style.css', './js/app.js', './manifest.json',
  './logo-ecolink-zambeze.png', './logo.svg', './assets/logo-ecolink-zambeze.png', './assets/logo.svg',
  './banner-pensar-grande.png', './login-slide.jpg', './hero-ecolink.svg', './collection-truck.svg', './community.svg', './recycling.svg',
  './assets/img/banner-pensar-grande.png', './assets/img/login-slide.jpg', './assets/img/hero-ecolink.svg', './assets/img/collection-truck.svg', './assets/img/community.svg', './assets/img/recycling.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
