<template>
  <div>
    <header class="iconfont icon-fanhui" @click="top()">
        <h1>我的购物车</h1>
    </header>
    <div class="comtain">
      <ul>
        <li v-for="(item,i) in str" :key="i">
          <div class="com">
            <span id="name">名称:{{item.pname}}</span>
            <img :src="item.pimg">
            <span>数量:{{item.pnum}}件</span>
            <span>价格:{{item.pprice}}元</span>
            <em id="em" @click="sub(item.pid,i,item.pnum)">-</em>
            <input type="text" v-model="item.pnum">
            <em @click="plus(item.pid,i)">+</em>
            <p @click="del(item.pid,i)">删除购物车</p>
          </div>
        </li>
      </ul>
    </div>
    <footer>
      <span id="guji">共计: {{totle}}元</span>
      <span @click="sure()">立即支付</span>
    </footer>
  </div>
</template>
<script>
import axios from "axios";
import { Indicator } from "mint-ui";
export default {
  name: "Carlist",
  data() {
    return {
      data: "",
      str: []
    };
  },
  computed: {
    //总价计算
    totle() {
      var _this = this;
      //总价数量累加 sum
      var sum = 0;
      this.str.map((item, i) => {
        //遍历购物车的数据 进行筛选数量及价格
        sum += item.pnum * item.pprice;
      });
      return sum;
    },
  },
  methods: {
    sure() {
      //mint ui 插件 弹出信息
      function timer() {
        Indicator.open({
          text: "支付中,请您耐心等待...",
          spinnerType: "triple-bounce"
        });
      }
      setTimeout(timer, 500);
       function time() {
          Indicator.close();
      }
     setTimeout(time, 3000);
      function timer1() {
        Indicator.open({
          text: "支付失败!请确认您银行卡号是否充足...",
          spinnerType: "snake"
        });
      }
      setTimeout(timer1,4000) 
      setTimeout(time,7000);
    },
    plus(pid,i) {
      //增加购物车数量
      var _this = this
        axios({
            methods:'get',
            url:'http://jx.xuzhixiang.top/ap/api/add-product.php',
            params:{uid:1131,pid:pid,pnum:1}
        }).then(function(data){
         Number(_this.str[i].pnum++)
        }) 
    },
    sub(pid,i,pnum) {
      //减少购物车数量
      var _this = this;
      var numb = pnum-1;
      console.log(pid,i,numb)
      if(numb>=1){
        axios({
            methods:'get',
            url:'http://jx.xuzhixiang.top/ap/api/cart-update-num.php',
            params:{uid:1131,pid:pid,pnum:numb}
        }).then(function(data){
            Number(_this.str[i].pnum--)
        })  
      }if(numb<1){
        /*  axios({
            methods:'get',
            url:'http://jx.xuzhixiang.top/ap/api/cart-update-num.php',
            params:{uid:1131,pid:pid,pnum:1}
        }).then(function(data){
            Number(_this.str[i]=1)
        })   */
            alert('s')
      }
      
         
    }, 
    top() {
      this.$router.go(-1);
    },
    del(pid, i) {
      //第一个参数为商品的id 第二个参数为商品对应的下标
      var _this = this;
      axios({
        methods: "get",
        url: "http://jx.xuzhixiang.top/ap/api/cart-delete.php",
        params: { uid: 1131, pid: pid }
      }).then(function(data) {
        _this.str.splice(i, 1); //页面删除
      });
    }
  },
  mounted() {
    var _this = this;
    axios({
      methods: "get",
      url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
      params: { id: 1131 }
    }).then(function(data) {
      var data = data.data.data;
      _this.str = data;
    });
  },
};
</script>
<style scoped>
#em {
  background-color: rgb(243, 161, 8);
  width: 1rem;
  text-align: center;
  display: inline-block;
  color: #fff;
  margin-left: 6rem;
  margin-top: 1rem;
}
#guji{
  color: rgb(255, 0, 0);
}
em {
  background-color: rgb(243, 161, 8);
  width: 1rem;
  text-align: center;
  display: inline-block;
  color: #fff;
}
input {
  width: 4rem;
  text-indent: 27px;
}
.com {
  text-align: center;
  width: 24rem;
  margin-left: -2rem;
  border: 1px solid rgb(231, 77, 6);
  float: left;
}
.com p {
  width: 5rem;
  float: right;
  margin-right: 20px;
  background: rgb(241, 3, 3);
  color: #fff;
}
footer {
  height: 40px;
  background: bisque;
  color: #fff;
  text-align: center;
  width: 17rem;
  float: right;
}
.comtain {
  position: fixed;
  top: 40px;
  bottom: 55px;
  left: 0;
  right: 0;
  overflow-y: scroll;
}
footer span {
  width: 8rem;
  display: inline-block;
  float: left;
  height: 50px;
  line-height: 53px;
}
footer span:nth-child(1) {
  border-right: 1px solid red;
}
header {
  left: 0;
}
header h1{
    font-size: 2rem;
    position: absolute;
    top: -19px;
    left: 124px;
    color: rgb(210, 9, 236);
    text-shadow: 1px 1px 1px red;
    font-family: cursive;
}
footer {
  position: fixed;
  right: 0;
  height: 50px;
}
header {
  top: 0;
  font-size: 2rem;
}
footer {
  bottom: 0;
}
#name {
  text-align: center;
  display: block;
}
span {
  display: block;
}
ul {
  list-style: none;
}
img {
  width: 4rem;
  height: 4rem;
}
</style>

