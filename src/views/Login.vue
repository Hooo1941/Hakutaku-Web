<!--
 * @Date: 2021-03-26 18:12:29
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-04-07 08:09:01
-->
<template>
  <div id="login">
    <p id="text">正在跳转...</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  mounted() {
    location.href = axios.defaults.baseURL + "/sso/login";
  },
  methods: {},
};
</script>

<style scoped>
#text {
  font-size: 50px;
}
</style>