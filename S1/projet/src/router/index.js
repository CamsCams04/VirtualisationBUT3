import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import HawaiiView from '@/views/HawaiiView.vue'
import DestinationView from '@/views/DestinationView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ExperiencesView from '@/views/ExperiencesView.vue'
import DescriptionView from '@/views/DescriptionView.vue'
import PreferencesView from '@/views/PreferencesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/preferences',
      name: 'preferences',
      props: true,
      component: PreferencesView
    },
   /* {
      path: '/destination/3',
      name: 'hawaii',
      component: HawaiiView
    },*/
    {
      path: '/destination/:id',
      //name:'destination',
      props: true,
      component: DestinationView,
      children: [
        {
          redirect: {name: 'description'},
          path: '',
          //component: DestinationView,
          name: 'destination',
        },
        {
          name: 'description',
          path: 'description',
          component: DescriptionView
        },
        {
          name: 'experiences',
          path: 'experiences',
          component: ExperiencesView
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
