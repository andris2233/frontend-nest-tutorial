import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/PageHome.vue'),
      meta: { noAuth: false },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/PageLogin.vue'),
      meta: { noAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuth = store.getters['auth/isAuthenticated'];

  if (to.matched.every((record) => record.meta.noAuth)) {
    if (to.name === 'login' && isAuth) {
      next({ name: 'home' });
    } else {
      next();
    }
  } else if (isAuth) {
    next();
  } else {
    next({ name: 'login' });
  }
});

export default router;
