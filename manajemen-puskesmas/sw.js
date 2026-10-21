const CACHE='manajemen-puskesmas-ngalupolo-v4';
const FILES=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('manajemen-puskesmas-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  const isAppPage=e.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/manajemen-puskesmas/');
  if(isAppPage){
    e.respondWith(fetch(e.request).then(res=>{
      if(res.ok&&url.origin===location.origin)caches.open(CACHE).then(c=>c.put(e.request,res.clone()));
      return res;
    }).catch(()=>caches.match(e.request).then(hit=>hit||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{
    if(res.ok&&url.origin===location.origin)caches.open(CACHE).then(c=>c.put(e.request,res.clone()));
    return res;
  }).catch(()=>caches.match('./index.html'))));
});