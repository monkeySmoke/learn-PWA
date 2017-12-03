var cachName = 'PWA-V1';

// service worker 安装过程中缓存我们已知的文件
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cachName)
            .then(function (cache) {
                cache.addAll([
                    './main.js',
                    './images/img2.png',
                    './index.html'
                ])
            })
    )
})

//service worker 获取任何请求获取的新资源
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request, {ignoreSearch: true})
            .then(function (response) {
                if (response) {
                    return response
                }
                var requestToCache = event.request.clone()
                return fetch(requestToCache).then(function (response) {
                    if (!response || response.status !== 200) {
                        return response
                    }
                    var responseToCache = response.clone()
                    caches.open(cachName)
                        .then(function (cache) {
                            cache.put(requestToCache, responseToCache)
                        })
                    return response
                })
            })
    )
})