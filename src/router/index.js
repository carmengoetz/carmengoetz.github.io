import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Software Developer',
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
    meta: {
      class: 'about'
    }  
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue"),
    meta: {
      class: 'about'
    }  
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () =>
      import(/* webpackChunkName: "Skills" */ "../views/Skills.vue"),
    meta: {
      class: 'skills'
    }  
    },
  {
    path: '/projects',
    name: 'Projects',
    component: () =>
      import(/* webpackChunkName: "Projects" */ "../views/Projects.vue"),
    meta: {
      class: 'projects'
    }  
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
    meta: {
      class: 'contact'
    }  
  },
  {
    path: '/:catchAll(.*)',
    name: 'Whoops',
    component: () =>
      import(/* webpackChunkName: "Whoops" */ "../views/Whoops.vue"),
    meta: {
      class: 'test',
      notFound: true
    }
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
