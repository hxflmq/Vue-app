<template>
  <section>
    <div class="content">
      <ul>
        <li v-for="(item,i) in data" :key="i">
          <router-link :to="'/detail/'+item.pid" tag="span">
            <h2>{{item.pdesc}}</h2>
            <img v-lazy="item.pimg">
            <p>名人专场:{{item.pname}}</p>
            <em>{{item.pprice}}元</em>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      data: ""
    };
  },
  mounted() {
    var _this = this;
    axios({
      methods: "get",
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: 1131, pagesize: 60 }
    }).then(function(data) {
      //console.log(data)
      var data = data.data.data;
      _this.data = data;
      //console.log(data)
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  display: flex;
  width: 100%;
  margin-left: -2.5rem;
  flex-wrap: wrap;
}
strong {
  color: aqua;
}
ul li {
  float: left;
  width: 49.5%;
  height: 20rem;
  text-align: center;
  border: 1px solid #f00;
}
ul li img {
  width: 54%;
  height: 40%;
}
ul li h2 {
  font-size: 0.7rem;
  width: 9rem;
  margin-left: 2.1rem;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
ul li p {
  font-size: 0.6rem;
  width: 8rem;
  margin-left: 2.1rem;
}
</style>
