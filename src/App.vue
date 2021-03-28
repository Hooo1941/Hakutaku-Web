<!--
 * @Date: 2021-03-20 18:13:09
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-03-29 00:31:35
-->
<template>
  <a-layout id="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo"><p id="logotext">白泽</p></div>
      <a-menu
        theme="dark"
        :inlineIndent="12"
        :defaultSelectedKeys="[$route.path]"
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
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
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
