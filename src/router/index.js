import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import TourView from '@/views/Tour.vue'
import NotFound from '@/views/404.vue'
import data from '@/db.json'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:id',
    name: 'tour',
    component: TourView,
    beforeEnter: (to) => {
      const id = parseInt(to.params.id);
      const localData = data.tours;
      const exist = localData.some((tour) => tour.id === id);

      if(!exist) return { name: 'not-found'};
    }
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not-found', 
    component: NotFound 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href 

export default router
