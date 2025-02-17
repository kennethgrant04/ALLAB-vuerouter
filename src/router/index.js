import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Skills from '../views/Skills.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/skills', component: Skills },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
