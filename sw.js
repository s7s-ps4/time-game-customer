// خدمة بسيطة عشان المتصفح يسمح بتثبيت الصفحة كتطبيق (من غير تخزين بيانات)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
