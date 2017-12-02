addEventListener('fetch', function (event) {
    console.log(event)
    if (/\.jpg$/.test(event.request.url)) {
        event.respondWith(fetch('./images/img2.png'))
    }
})