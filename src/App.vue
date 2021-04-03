<!--
 * @Date: 2021-03-20 18:13:09
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-03-31 10:24:23
-->
<template>
  <a-layout id="layout">
    <a-layout-sider v-model="collapsed" collapsible breakpoint="lg">
      <div class="logo"><p id="logotext">白泽</p></div>
      <a-menu
        theme="dark"
        :inlineIndent="12"
        :selectedKeys="[$route.path]"
        mode="inline"
        :inline-collapsed="collapsed"
        @click="menuClick"
      >
        <template v-for="item in list">
          <a-menu-item :key="item.path">
            <a-icon :type="item.icon" />
            <span>{{ item.title }}</span>
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
          overflow: 'auto',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      list: [
        {
          key: "1",
          title: "用户管理",
          path: "/user",
          icon: "user",
        },
        {
          key: "2",
          title: "设备管理",
          path: "/device",
          icon: "wallet",
        },
        {
          key: "3",
          title: "借出管理",
          path: "/borrow",
          icon: "export",
        },
        {
          key: "4",
          title: "登出",
          path: "/logout",
          icon: "logout",
        },
      ],
    };
  },
  methods: {
    menuClick({ key }) {
      this.$router.push({
        path: key,
      });
    },
  },
};
</script>
<style>
#layout {
  height: 100%;
}
#layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#layout .trigger:hover {
  color: #1890ff;
}

#layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
  color: #fff;
  line-height: 220%;
}
</style>
