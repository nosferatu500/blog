<template lang="pug">
  section
    .container
      h1 Subscribe and stay in touch
      .columns
        .column.is-offset-2.is-6
          input(type="text" placeholder="Please Enter Your Email")
        .column.is-2
          button.button subscribe now
</template>

<style lang="sass" scoped>

section
  background: linear-gradient(to right, #565092, #237490)
  padding-top: 45px
  text-align: center
  padding-bottom: 65px
  h1 
    text-transform: uppercase
    color: #fff
    font-size: 16px
    padding-bottom: 25px
  input
    text-transform: uppercase
    border-radius: 8px
    padding: 10px
    font-size: 12px
    width: 100%
    line-height: 1.5
  button
    float: left
    text-transform: uppercase
    color: #fff
    font-size: 12px
    padding: 20px
    border-radius: 8px
    background-color: #308aa9
    border: none
    line-height: 0

</style>
