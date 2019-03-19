<template>
    <div>
          <header class="iconfont icon-fanhui" @click="top()"></header>
       <ul>
               
                  <li v-for="(item,i) in str" :key="i">
                      <h2>{{item.pdesc}}</h2>
                       <img :src='item.pimg'>
                       <p>名人专场:{{item.pname}}</p>
                       <span>限时抢购价:<span id="prc">{{item.pprice}}</span>元</span>
                       <div id="ti">
                        <span @click="gou()">查看购物车</span>
                       <p id="pist">亲,您还在等些什么呢？快点加入购物车吧！</p>
                       <button @click="add()">加入购物车</button></div>
                  </li> 
              </ul>
    </div>
</template>
<script>
 import axios from 'axios'
export default {
    name:'Detail',
    data() {
        return {
            data:'',
            str:[],
        }
    },
    //页面完成之后加载 加载商品的详情
    mounted() {
       // console.log(this.$route.params.id)
        var _this = this
         axios({
            methods:'get',
            url:'http://jx.xuzhixiang.top/ap/api/detail.php',
            params:{id:_this.$route.params.id}
        }).then(function(data){
            var data = data.data.data;
            _this.str.push(data) 
        }) 
    },
    methods:{
     top(){
         this.$router.go(-1);  //记录返回上级
     },
     gou(){
         this.$router.push('/carlist')  //编程式路由跳转
     },
     add(){  //添加到购物车
          var _this = this
        axios({
            methods:'get',
            url:'http://jx.xuzhixiang.top/ap/api/add-product.php',
            params:{uid:1131,pid:_this.$route.params.id,pnum:1}
        }).then(function(data){
           //console.log(data)
        }) 
     }
    },
}
</script>
<style scoped>
#ti{
    position: relative;
}
#ti span{
    position: absolute;
    right: 0;
    background-color: rgb(94, 255, 0);
    color: #fff;
    border: 1px solid rgb(129, 177, 101)
}
ul{
    list-style: none;
    text-align: center;
    margin-left: -3rem;
    margin-top: -1rem;
}
#prc{
    color: rgb(230, 76, 5)
}
#pist{
    position: absolute;
    display: inline-block;
    width: 8rem;
    font-size: 0.2rem;
    left: 3rem;
    top: 1.5rem;
    color: rgb(206, 9, 255)
}
li img{
    border: 1px solid #000;
}
ul li p{
   color: rgb(238, 137, 5)
}
li h2{
    color: red;
}
.icon-fanhui{
    font-size: 2rem;
    height: 2rem;
}
button{
    width: 9rem;
    border: 0;
    height: 2rem;
    color: #fff;
    background: rgb(240, 97, 2);
   margin-left: 14rem;
    margin-top: 2.2rem;
}
</style>

