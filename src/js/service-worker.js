
// Cache نام کش که برای ذخیره‌سازی منابع استفاده می‌شود
const CACHE_NAME = 'offline-cache-v1';
const urlsToCache = [
  '/',
  '../../inde.html',
  '../style/app.css',
  './app.js',
];

// نصب سرویس ورکر و کش کردن منابع
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// فعال‌سازی سرویس‌ورکر
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// سرویس‌ورکر درخواست‌ها را از کش بررسی می‌کند
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // اگر در کش بود، پاسخ از کش داده می‌شود
      }
      return fetch(event.request); // اگر نبود، درخواست به سرور ارسال می‌شود
    })
  );
});
