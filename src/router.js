import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import(/* webpackChunkName: "albums" */ './views/Albums.vue'),
    },
    {
      path: '/artists',
      name: 'artists',
      component: () => import(/* webpackChunkName: "artists" */ './views/Artists.vue'),
    },
    {
      path: '/musics',
      name: 'musics',
      component: () => import(/* webpackChunkName: "artists" */ './views/Musics.vue'),
    },
    {
      path: '/playlists',
      name: 'playlists',
      component: () => import(/* webpackChunkName: "artists" */ './views/Playlists.vue'),
    },
  ],
});
