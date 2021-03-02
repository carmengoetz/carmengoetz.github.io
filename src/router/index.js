import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Software Developer',
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: '/career',
    name: 'Career',
    component: () =>
      import(/* webpackChunkName: "Career" */ "../views/Career.vue"),
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () =>
      import(/* webpackChunkName: "Skills" */ "../views/Skills.vue"),
    },
  {
    path: '/projects',
    name: 'Projects',
    component: () =>
      import(/* webpackChunkName: "Projects" */ "../views/Projects.vue"),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
  {
    path: '/:catchAll(.*)',
    name: 'Whoops',
    component: () =>
      import(/* webpackChunkName: "Whoops" */ "../views/Whoops.vue"),
    meta: {
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
