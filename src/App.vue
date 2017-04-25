<template lang="pug">
  #app
    router-view
    router-view(name="latestposts")
    router-view(name="categories")
    router-view(name="news")
    router-view(name="subscribe")
    router-view(name="footer")
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
