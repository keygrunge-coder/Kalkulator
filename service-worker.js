self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("calc").then(c=>{
      return c.addAll(["./","./index.html"]);
    })
  );
});