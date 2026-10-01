/* =========================================================
   ALL LEARNING HUB
   PWA SERVICE WORKER
   ========================================================= */

"use strict";

const CACHE_NAME = "all-learning-hub-v1";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json"
];

/* ---------------------------------------------------------
   INSTALL
--------------------------------------------------------- */

self.addEventListener("install", event => {

    console.log("[ALL LEARNING HUB] Service Worker installing...");

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(APP_FILES);
            })
            .then(() => {
                return self.skipWaiting();
            })
            .catch(error => {
                console.error(
                    "[ALL LEARNING HUB] Cache install error:",
                    error
                );
            })
    );
});


/* ---------------------------------------------------------
   ACTIVATE
--------------------------------------------------------- */

self.addEventListener("activate", event => {

    console.log("[ALL LEARNING HUB] Service Worker activated.");

    event.waitUntil(

        caches.keys()
            .then(cacheNames => {

                return Promise.all(

                    cacheNames
                        .filter(cacheName => {
                            return cacheName !== CACHE_NAME;
                        })
                        .map(cacheName => {
                            return caches.delete(cacheName);
                        })

                );

            })
            .then(() => {
                return self.clients.claim();
            })

    );
});


/* ---------------------------------------------------------
   FETCH
--------------------------------------------------------- */

self.addEventListener("fetch", event => {

    const request = event.request;

    /*
       केवल GET requests को handle करें
    */

    if (request.method !== "GET") {
        return;
    }

    event.respondWith(

        caches.match(request)
            .then(cachedResponse => {

                /*
                   अगर file cache में है,
                   पहले cached version दें
                */

                if (cachedResponse) {
                    return cachedResponse;
                }

                /*
                   Cache में नहीं है तो Internet से लाएं
                */

                return fetch(request)
                    .then(networkResponse => {

                        /*
                           Valid response को cache करें
                        */

                        if (
                            networkResponse &&
                            networkResponse.status === 200 &&
                            networkResponse.type === "basic"
                        ) {

                            const responseClone =
                                networkResponse.clone();

                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(
                                        request,
                                        responseClone
                                    );
                                });

                        }

                        return networkResponse;

                    })
                    .catch(() => {

                        /*
                           Internet बंद होने पर
                           main page वापस देने की कोशिश
                        */

                        return caches.match("./index.html");

                    });

            })

    );

});


/* ---------------------------------------------------------
   MESSAGE
--------------------------------------------------------- */

self.addEventListener("message", event => {

    if (!event.data) {
        return;
    }

    if (event.data.type === "SKIP_WAITING") {

        self.skipWaiting();

    }

});


/* ---------------------------------------------------------
   BACKGROUND SYNC SUPPORT
--------------------------------------------------------- */

self.addEventListener("sync", event => {

    if (event.tag === "learning-hub-sync") {

        console.log(
            "[ALL LEARNING HUB] Background sync triggered."
        );

    }

});


/* ---------------------------------------------------------
   PUSH SUPPORT
--------------------------------------------------------- */

self.addEventListener("push", event => {

    let data = {};

    try {

        data = event.data
            ? event.data.json()
            : {};

    } catch (error) {

        data = {
            title: "ALL LEARNING HUB",
            body: "New learning content available."
        };

    }

    const title =
        data.title || "ALL LEARNING HUB";

    const options = {

        body:
            data.body ||
            "Learn • Explore • Discover",

        icon: "./icon-192.png",

        badge:
            "./icon-192.png",

        vibrate: [
            100,
            50,
            100
        ],

        data: {
            url:
                data.url ||
                "./index.html"
        }

    };

    event.waitUntil(

        self.registration.showNotification(
            title,
            options
        )

    );

});


/* ---------------------------------------------------------
   NOTIFICATION CLICK
--------------------------------------------------------- */

self.addEventListener(
    "notificationclick",
    event => {

        event.notification.close();

        const targetURL =
            event.notification.data &&
            event.notification.data.url
                ? event.notification.data.url
                : "./index.html";

        event.waitUntil(

            clients.matchAll({
                type: "window",
                includeUncontrolled: true
            })
            .then(clientList => {

                for (const client of clientList) {

                    if (
                        "focus" in client &&
                        client.url.includes(
                            "ALL-LEARNING-HUB"
                        )
                    ) {

                        return client.focus();

                    }

                }

                if (clients.openWindow) {

                    return clients.openWindow(
                        targetURL
                    );

                }

            })

        );

    }
);
