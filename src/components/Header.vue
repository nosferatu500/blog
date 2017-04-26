<template lang="pug">
  header
    .bar_section
      .container
        .nav_bar
          .columns
            .column.is-4
              ul
                li: a(href="#") Home
                li: a(href="#") News
                li: a(href="#") Categories
                li: a(href="#") Articles
            .column.is-4
              h1 Blog
            .column.is-4
              ul
                li: a(href="#") About
                li: a(href="#") Contact
                li: a(href="#") Subscribe
                li: a(href="#") Purchase
    .column.is-6.is-offset-3
      .banner    
        .columns
          .column.is-4
            img(src="../../src/assets/img/avatar.jpg", alt="")
          .column.is-8
            h1 Vitaly Shvetsov
            p  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati error corrupti ipsa, labore? Id numquam soluta cupiditate! Doloribus ea, nisi sint, illo dicta deserunt obcaecati quasi architecto perferendis nam dolorum.
            <button class="button is-primary is-outlined">Read more</button>

</template>

<script>
  import { mapGetters } from 'vuex'

export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue-Eclipse App.',
        msg2: 'Based on Vue.js. Created for You.'
      }
    },
    computed: mapGetters({
      modules: 'allModules'
    }),
    created () {
      this.$store.dispatch('getAllModules')
    }
}
</script>

<style lang="sass" scoped>

header
  background-image: url(../../src/assets/img/banner_header.png) 
  background-size: cover
  height: 500px
  .bar_section
    background-image: url(../../src/assets/img/navbar_header.png)
    background-size: cover
    .nav_bar
      padding-top: 25px
      li
        list-style-type: none
        display: inline-block
        padding-right: 50px
        &:nth-child(4)
          padding-right: 0
        a
          font-size: 14px
          color: #fff
          text-transform: uppercase
      h1
        text-transform: uppercase
        text-align: center
        font-size: 28px
        color: #fff
  .banner
    background-color: #fff
    padding: 0 0px
    margin-top: 100px
    border-radius: 8px
    height: 255px    
    .is-4
      padding-top: 0
      padding-right: 0
      padding-bottom: 0
      margin-bottom: 0
      img
        height: 255px
        width: auto
        border-top-left-radius: 8px
        border-bottom-left-radius: 8px
        background-size: cover
    .is-8
      padding-left: 0
      padding-bottom: 0
      margin-bottom: 0
      text-align: center
      h1
        padding: 0
        margin: 0
        padding-top: 10px
        padding-bottom: 10px
        font-size: 20px
      p
        padding: 0 25px
        margin: 0
        font-size: 14px
        line-height: 2
      button
        margin-top: 40px
        text-transform: uppercase

.column.is-6.is-offset-3
  text-align: center
  img.splash
    padding-top: 70px
    padding-left: 27px
    position: absolute
  h1.test
    padding: 0
    margin: 0
    padding-top: 76px
    padding-left: 484px
    position: absolute
    font-size: 13px
    text-transform: uppercase
    color: #fff

</style>
