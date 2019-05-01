import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./views/Main.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
    },
    {
      path: '/quiz',
      name: 'Quiz_session',
      component: () => import('./views/Quiz_session.vue'),
    },
    {
      path: '/quizresult',
      name: 'Quiz_result',
      component: () => import('./views/Quiz_result.vue'),
    },
    {
      path: '/rating',
      name: 'rating',
      component: () => import('./views/Rating.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue'),
    },
    {
      path: '/subjects',
      name: 'subjects',
      component: () => import('./views/Subjects.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  store.dispatch('fetchAccessToken');
  if (to.fullPath === '/signin') {
    if (store.state.accessToken!=null) {
      next('/');
    }
  }
  if (to.fullPath === '/profile') {
    if (store.state.accessToken==null) {
      next('/signin');
    }
  }
  next();
});

export default router;
