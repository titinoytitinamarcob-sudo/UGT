const CACHE_NAME="mamerto-matricula-v2";
const ASSETS=["/UGT/Matricula/","/UGT/Matricula/index.html","/UGT/Matricula/manifest.json"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))));self.clients.claim()});
self.addEventListener("fetch",event=>{const url=new URL(event.request.url);if(url.origin===self.location.origin&&event.request.method==="GET")event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)))});
