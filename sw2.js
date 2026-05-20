self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
3. Haz un **Commit** con el código de arriba en `index.html`.
