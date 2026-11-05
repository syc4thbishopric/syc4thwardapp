// The site used to install an offline-caching service worker (next-pwa). Browsers that still
// have it will fetch this file on their next visit; it clears the old caches and removes itself
// so visitors always get live pages.
self.addEventListener("install", () => self.skipWaiting())

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: "window" })
      clients.forEach((client) => client.navigate(client.url))
    })()
  )
})
