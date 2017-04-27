<template lang="pug">
  section
    .bar_section
      .container
        .nav_bar
          .columns
            .column.is-4
              ul
                li: a(href="/") Home
                li: a(href="/news") News
                li: a(href="/categories") Categories
                li: a(href="/articles") Articles
            .column.is-4
              h1 Blog
            .column.is-4
              ul
                li: a(href="/about") About
                li: a(href="/contact") Contact
                li: a(href="/subscribe") Subscribe
                li: a(href="/purchase") Purchase
</template>

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
