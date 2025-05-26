import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst()
);

self.addEventListener('push', (event) => {
  const data = event.data?.json() || {
    title: '기본 제목',
    body: '기본 내용',
    url: '/'
  }

  const options = {
    body: data.body,
      icon: '/pwa-192x192.png',
    data: {
      url: data.url // 나중에 클릭 시 이동할 경로
    }
  }

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  )
})