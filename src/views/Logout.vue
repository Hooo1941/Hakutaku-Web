<!--
 * @Date: 2021-03-29 00:20:54
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-04-04 01:03:51
-->
<template>
  <p>正在登出。</p>
</template>

<script>
import Cookie from "js-cookie";

export default {
  mounted() {
    Cookie.remove("jwt_token");
    location.href = "/login";
  },
};
</script>

<style scoped>
</style>