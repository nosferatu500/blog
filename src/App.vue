<template lang="pug">
  #app
    img(src="./assets/logo.png")
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">

#app 
  font-family: Hammersmith_One
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
  // must for mobile build
  width: auto
  
@media screen and (max-width: 400px)
  #app
    margin-top: 30px
    img
      width: 50%
</style>
