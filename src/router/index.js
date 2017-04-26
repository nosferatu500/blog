import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Home/Header'
import LatestsPosts from '@/components/Home/LatestsPosts'
import Categories from '@/components/Home/Categories'
import News from '@/components/Home/News'
import Subscribe from '@/components/Home/Subscribe'
import Footer from '@/components/Home/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        latestposts: LatestsPosts,
        categories: Categories,
        news: News,
        subscribe: Subscribe,
        footer: Footer
      }
    },
    {
      path: '/news',
      components: {
      }
    },
    {
      path: '/categories',
      components: {
      }
    },
    {
      path: '/articles',
      components: {
      }
    },
    {
      path: '/contact',
      components: {
      }
    },
    {
      path: '/subscribe',
      components: {
      }
    },
    {
      path: '/purchase',
      components: {
      }
    }
  ]
})
