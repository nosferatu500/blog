<template lang="pug">
  #app
    navbar
    
    <!--Routes-->
    router-link(to='/')
    router-link(to='/news')
    router-link(to='/categories')
    router-link(to='/articles')
    router-link(to='/about')
    router-link(to='/contact')
    router-link(to='/subscribe')
    router-link(to='/purchase')

    <!--Home-->
      router-view(name="header")
      router-view(name="latestposts")
      router-view(name="categories")
      router-view(name="news")
      router-view(name="subscribe")
      
    footer-section

    <!--News-->
      
    <!--Categories-->
      
    <!--Articles-->
      
    <!--About-->
      
    <!--Contact-->
      
    <!--Subscribe-->
      
    <!--Purchase-->
      
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">

#app 
  // must for mobile build
  width: auto

</style>
