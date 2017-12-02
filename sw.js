addEventListener('fetch', function (event) {
    console.log(event)
    if (/\.jpg$/.test(event.request.url)) {
        event.respondWidth(fetch('./images/img2.png'))
    }
})