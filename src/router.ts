import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import Dashboard from '@/components/Dashboard.vue';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home',
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
      requiresAuth: true,
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isAuthenticated()) {
    return {
      name: 'Login',
      query: {
        redirect: to.fullPath,
      }
    }
  }
});

router.afterEach((to) => {

  nextTick(() => {
    document.title = `Taters | ${to.meta.title}`
  })
})

export default router;
