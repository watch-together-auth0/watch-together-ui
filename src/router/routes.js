import { authGuard } from '../auth/authGuard';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/Index.vue'),
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('pages/Home.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('pages/Search.vue'),
      },
      {
        path: '/watch/:id',
        name: 'watch',
        component: () => import('pages/Watch.vue'),
      },
      {
        path: '/chat/:id',
        name: 'chat',
        component: () => import('pages/Chat.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
