<!--
 * @Date: 2021-03-26 19:55:39
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-03-26 20:44:31
-->

<template>
  <div id="box">
    <p id="info">{{ info }}</p>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    if (Cookies.get("jwt_token") == undefined) {
      this.info = "没有登录，正在跳转...";
    } else {
      this.info = "登录成功，正在跳转...";
    }
  },
};
</script>

<style scoped>
#text
{
	font-size: 50px;
}
</style>