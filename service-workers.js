const CACHE_NAME = "simon-v1";
const FILES = [
  "/",
  "/index.html",
  "/styles.css",
  "/game.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});