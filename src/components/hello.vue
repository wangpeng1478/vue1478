<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img @click="key" :src="captcha_image_content" alt="yan">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
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
  	 	axios({
              method:'post',
              url:'/api/admincode'
           })
          .then(function (res) {
             console.log(res)
             _this.captcha_image_content = res.data.captcha_image_content
          })
          .catch(function (err) {
              console.log(err)
          })
  	 }
  },
  mounted(){
  	this.key();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    background-color: #eee;
  }
</style>
