<template>
  <div>
    <section id="login">
      <header>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      </header>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Log",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>

