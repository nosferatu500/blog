<template lang="pug">
  section
    h1 categories
    .container
      .columns
        .column.is-4
          .s_item
            h1 Category 1
        .column.is-4
          .s_item
            h1 Category 2
        .column.is-4
          .s_item
            h1 Category 3
</template>

<style lang="sass" scoped>

section
  background-color: #495891
  text-align: center
  h1
    padding-top: 50px
    padding-bottom: 40px
    color: #fff
    text-transform: uppercase
    font-size: 16px
  .s_item
    background-image: url(../../../src/assets/img/latestposts/banner.png)
    background-size: cover
    text-align: center
    height: 230px
    border-radius: 16px
    margin: 20px
    margin-bottom: 50px
    h1
      text-transform: uppercase
      color: #fff
      font-size: 20px
      float: right
      padding-top: 190px
      padding-right: 30px
</style>
