<!--
 * @Date: 2021-04-09 23:11:11
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-04-10 00:36:13
-->
<template>
  <div id="login">
    <p id="text">正在登录...</p>
  </div>
</template>

<script>
//import axios from "axios";
import Cookie from "js-cookie";
export default {
  name: "login",
  mounted() {
    if (Cookie.get("jwt_token") == undefined) {
      //location.href = axios.defaults.baseURL + "/sso/login";
      Cookie.set("jwt_token", "1234567890");
    }
    location.href = "phonesuccess/" + Cookie.get("jwt_token");
  },
};
</script>

<style scoped>
#text {
  font-size: 20px;
}
</style>