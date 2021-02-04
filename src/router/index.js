import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Software Developer',
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
    meta: {
      class: 'about',
      showResume: true
    }  
    },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue"),
    meta: {
      class: 'about',
      showResume: false
    }  
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () =>
      import(/* webpackChunkName: "Skills" */ "../views/Skills.vue"),
    meta: {
      class: 'skills',
      showResume: false
    }  
    },
  {
    path: '/experience',
    name: 'Experience',
    component: () =>
      import(/* webpackChunkName: "Experience" */ "../views/Experience.vue"),
    meta: {
      class: 'experience',
      showResume: false
    }  
    },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
    meta: {
      class: 'contact',
      showResume: false
    }  
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
      meta: {
        class: 'about',
        showResume: false,
        notFound: true
      } 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }

        return false;
      }
    }
  },
  routes
})

export default router
