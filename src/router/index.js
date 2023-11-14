import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/pages/Login.vue'
import Register from '../views/pages/Register.vue'
import Home from '../views/pages/Home.vue'
import News from '../views/pages/News.vue'
import PoliticalFigure from '../views/pages/PoliticalFigure.vue'
import DetailFigure from '../views/pages/DetailFigure.vue'
import Sentiment from '../views/pages/Sentiment.vue'
import DetailNews from '../views/pages/DetailNews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      meta: { sidebar: false },
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      meta: { sidebar: false },
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      meta: { sidebar: true },
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      meta: { sidebar: true },
      component: News
    },
    {
      path: '/political-figure',
      name: 'PoliticalFigure',
      meta: { sidebar: true },
      component: PoliticalFigure
    },
    {
      path: '/detail-figure',
      name: 'DetailFigure',
      meta: { sidebar: true },
      component: DetailFigure
    },
    {
      path: '/sentiment',
      name: 'Sentiment',
      meta: { sidebar: true },
      component: Sentiment
    },
    {
      path: '/detail-news',
      name: 'DetailNews',
      meta: { sidebar: true },
      component: DetailNews
    }
  ]
})

router.beforeEach((to, from) => {
  if (['Login', 'Register'].includes(to.name) && localStorage.getItem('user') !== null) {
    return { name: 'News' }
  } else if (!['Login', 'Register'].includes(to.name) && localStorage.getItem('user') === null) {
    return { name: 'Login' }
  }
})

export default router
