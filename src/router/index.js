import Vue from 'vue';
import Router from 'vue-router';
import Sessions from '@/pages/Sessions';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sessions',
      component: Sessions,
    },
  ],
});
