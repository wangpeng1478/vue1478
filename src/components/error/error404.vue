<template>
  <div class="error404">
    <h1 style="color:red">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'error404',
  data () {
    return {
      msg: '404'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
