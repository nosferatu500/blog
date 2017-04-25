import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import LatestsPosts from '@/components/LatestsPosts'
import Categories from '@/components/Categories'
import News from '@/components/News'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Header,
        latestposts: LatestsPosts,
        categories: Categories,
        news: News,
        subscribe: Subscribe,
        footer: Footer
      }
    }
  ]
})
