const V="w1";
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{const u=e.request.url;
if(e.request.method!=="GET"||!(u.startsWith(self.location.origin)||u.startsWith("https://www.gstatic.com/")))return;
e.respondWith(fetch(e.request).then(r=>{const c=r.clone();if(r.ok)caches.open(V).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
