const CACHE_NAME = 'cache-v1'
const URLS = ['/assets/index.js', '/assets/index.css']

this.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(URLS))
      .catch(err => {
        throw err
      })
  )
})

this.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(cacheNames.map(name => caches.delete(name)))
    })
  )
})

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response

      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then(response => {
        const isResponseError =
          !response || response.status !== 200 || response.type !== 'basic'

        if (isResponseError) return response

        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    })
  )
})
