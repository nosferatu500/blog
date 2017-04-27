<template lang="pug">
  section
    .bar_section
      .container
        .nav_bar
          .columns
            .column.is-4
              ul
                li: a(@click="switchToPage('/')") Home
                li: a(@click="switchToPage('/news')") News
                li: a(@click="switchToPage('/categories')") Categories
                li: a(@click="switchToPage('/articles')") Articles
            .column.is-4
              h1 Blog
            .column.is-4
              ul
                li: a(@click="switchToPage('/about')") About
                li: a(@click="switchToPage('/contact')") Contact
                li: a(@click="switchToPage('/subscribe')") Subscribe
                li: a(@click="switchToPage('/purchase')") Purchase
</template>

<script>

export default {

  methods: {
    switchToPage (path) {
      this.$router.push({ path: path })
    }
  }
}

</script>

<style lang="sass" scoped>

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
        line-height: 1
        padding-bottom: 20px

</style>
