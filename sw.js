const CACHE_NAME = 'curling-tracker-v52';
const ASSETS_TO_CACHE = [
  '',
  'index.html',
  'manifest.json',
  'usa_curling_logo.png',
  'icons/favicon.ico',
  'icons/favicon-16x16.png',
  'icons/favicon-32x32.png',
  'icons/apple-touch-icon.png',
  'icons/icon-192x192.png',
  'icons/icon-512x512.png'
];

// External resources to cache
const EXTERNAL_CACHE = [
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://unpkg.com/papaparse@5.4.1/papaparse.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app assets');
        // Cache external resources first (these have full URLs)
        const externalPromises = EXTERNAL_CACHE.map(url => 
          cache.add(url).catch(err => console.log('Failed to cache:', url, err))
        );
        // Cache local assets relative to service worker location
        const localPromises = ASSETS_TO_CACHE.map(url => 
          cache.add(url).catch(err => console.log('Failed to cache:', url, err))
        );
        return Promise.all([...externalPromises, ...localPromises]);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses or chrome-extension requests
            if (!response || response.status !== 200) {
              return response;
            }
            
            // Don't cache cross-origin requests that aren't in our external list
            if (response.type !== 'basic' && !EXTERNAL_CACHE.includes(event.request.url)) {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Return cached index.html for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('index.html');
            }
          });
      })
  );
});

// Handle messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
