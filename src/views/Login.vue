<!--
 * @Date: 2021-03-26 18:12:29
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-03-26 20:07:38
-->
<template>
  <div id="login">
    <p id=text>正在跳转...</p>
  </div>
</template>

<script>

export default {
  name: 'login',
  mounted() {
    location.href = "http://127.0.0.1:7070/api/v1/sso/login";
  },
  methods: {
  },
}
</script>

<style scoped>
#text
{
	font-size: 50px;
}
</style>