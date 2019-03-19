<template>
    <section>
          <header>
              <div class="head-top">
                  <div class="head-left">
                    <img src="../assets/logo.png" alt="" srcset="">
                  </div>
                  <div class="head-serch">
                    <input type="text" placeholder="iPhone XS直降399">
                  </div>
                  <div class="head-right">
                    <span class="iconfont icon-gouwuche" id="gou" @click="gou()"></span>
                  </div>
               </div>
          </header>
          <div class="content">
          <router-view></router-view>
          </div>
          <footer>
            <router-link id="font-v" to="/home" tag="span" class="iconfont icon-shouye">首页</router-link>
            <router-link id="font-v" to="/find" tag="span" class="iconfont icon-fenlei">分类</router-link>
            <router-link id="font-v" to="/mesg" tag="span" class="iconfont icon-youxuan">优选</router-link>
            <router-link id="font-v" to="/carlist" tag="span" class="iconfont icon-gouwuche gou">购物车</router-link>
            <router-link id="font-v" to="/about" tag="span" class="iconfont icon-profile">我的</router-link>
      </footer>
   </section>
</template>

<script>
 import axios from 'axios'

export default {
  name: 'Index',
  data () {
    return {
    
    }
  },
  methods:{
    gou(){
      this.$router.push('/carlist')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin: 0;
  padding: 0;
}
#gou{
  font-size: 2rem;
  margin: 0 9px;
}
 section{
     height: 100vh;
    display: flex;
    flex-direction: column;
 }
 .gou{
   font-size: 1rem;
 }
.content{
   position: fixed;
    top: 40px;
    bottom: 55px;
    left: 0;
    right: 0;
    overflow-y: scroll;
 }
 header,footer{
    position: fixed;
    left: 0;
    right: 0;
    height: 50px;
 }
 header{
    top: 0
 }
 footer{
   bottom: 0;
 }
.head-left{
    width: 2.5rem;
    float: left;
 }
 .head-serch{
      float: left;
      width: 19rem;
      height: 40px;
      line-height: 40px;
 } 
 .head-serch input{
    width: 19rem;
    height: 24px;
    outline: none;
    border-radius: 16px;
    text-indent: 12px;
 }
 footer span {
  float: left;
  text-align: center;
  width: 20%;
  line-height: 25px;
  color: rgb(212, 207, 207);
  display: flex;
  flex-direction: column;
}
/*  .head-right{
   float: right;
 } */
</style>
