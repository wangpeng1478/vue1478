<template>
  <div id="app">
    <router-view></router-view>
    <ul>
      <li><router-link to="/">hello</router-link></li>
      <li><router-link to="/index">index</router-link></li>
      <li><router-link to="/news">news</router-link></li>
      <li><router-link to="/404">404</router-link></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'hello',
      captcha_image_content:'',
      captcha_key:''
    }
  },
  methods:{
  	 key(){
  	   let _this = this;
  	 }
  },
  mounted(){
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:60px;
}
</style>
