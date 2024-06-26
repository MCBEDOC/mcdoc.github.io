importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
const routing = workbox.routing,
    strategies = workbox.strategies;
workbox.routing.registerRoute(/.(?:css|js|jsx|json|txt|xml)(?|$)/, new workbox.strategies.StaleWhileRevalidate({
    cacheName: "assets",
    plugins: [new workbox.expiration.Plugin({
        maxEntries: 1e3,
        maxAgeSeconds: 31536e3
    })]
})), workbox.routing.registerRoute(/.(?:png|jpg|jpeg|gif|webp|ico|woff2)$/, new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [new workbox.expiration.Plugin({
        maxEntries: 1e3,
        maxAgeSeconds: 31536e3
    })]
})), workbox.routing.registerRoute(/(\/)$/, new workbox.strategies.StaleWhileRevalidate({
    cacheName: "startPage",
    plugins: [new workbox.expiration.Plugin({
        maxEntries: 1e3,
        maxAgeSeconds: 31536e3
    })]
}));