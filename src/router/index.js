import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/not_found',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
    meta: {
      class: 'about',
      showResume: false
    }  
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0 })
      }, 1000)
    })
  },
  routes
})

export default router
