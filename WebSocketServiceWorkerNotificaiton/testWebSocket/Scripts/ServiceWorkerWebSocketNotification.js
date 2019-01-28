//make sure that Service Workers are supported.
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/Scripts/sw.js')
        .then(function (registration) {
            console.log(registration);
        })
        .catch(function (e) {
            console.error(e);
        })
} else {
    console.log('Service Worker is not supported in this browser.');
}


Notification.requestPermission(function (result) {
    if (result === 'granted') {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.showNotification('Notification with ServiceWorker',
                {
                    body: 'test dfg fdg fdgf'
                }

                );
        });
    }
});



//function sendmessage()
//{

//  var t=  new Notification('Hello', { body: 'Yay!' });


//};




















//var CACHE_VERSION = 'app-v1';
//var CACHE_FILES = [
//    '/',
//    'Styles/main.css',
//    'https://fonts.googleapis.com/css?family=Roboto:100'
//];





//self.addEventListener('install', function (event) {
//    event.waitUntil(
//        caches.open(CACHE_VERSION)
//        .then(function (cache) {
//            console.log('Opened cache');
//            return cache.addAll(CACHE_FILES);
//        })
//    );
//});



//self.addEventListener('fetch', function (event) {
//    event.respondWith(
//        caches.match(event.request).then(function(res) {
//            if (res) {
//                return res;
//            }
//            requestBackend(event);
//        })
//    );
//});

//function requestBackend(event) {
//    var url = event.request.clone();
//    return fetch(url).then(function (res) {
//        //if not a valid response send the error
//        if (!res || res.status !== 200 || res.type !== 'basic') {
//            return res;
//        }

//        var response = res.clone();

//        caches.open(CACHE_VERSION).then(function (cache) {
//            cache.put(event.request, response);
//        });

//        return res;
//    })
//}




//self.addEventListener('activate', function (event) {
//    event.waitUntil(
//        caches.keys().then(function (keys) {
//            return Promise.all(keys.map(function (key, i) {
//                if (key !== CACHE_VERSION) {
//                    return caches.delete(keys[i]);
//                }
//            }))
//        })
//    )
//});
