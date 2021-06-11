import { createRouter, createWebHistory } from 'vue-router'

// Assignment of the routes for each view
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import (/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/library',
    name: 'library',
    component: () => import (/* webpackChunkName: "servicios" */ '../views/Library.vue')
  },
  {
    path: '/book',
    name: 'book',
    component: () => import (/* webpackChunkName: "book_Insert" */ '../views/Book_Insert.vue')
  },
  {
    path: '/book/:id',
    name: 'bookid',
    component: () => import (/* webpackChunkName: "bookid" */ '../views/BookId.vue')
  },
  {
    path: '/bookup/:id',
    name: 'bookidup',
    component: () => import (/* webpackChunkName: "bookid_update */ '../views/BookId_Update.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
