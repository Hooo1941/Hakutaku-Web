<!--
 * @Date: 2021-03-28 14:20:59
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-03-28 22:23:47
-->
<template>
  <div id="manage">
    <p id="welcome">
      欢迎{{ name }}<br />你的部门是：{{ group }}<br />你的职务是：{{ role }}
    </p>
    <a-button @click="goBorrow" type="primary">借出管理</a-button>
    <br />
    <br />
    <a-button @click="goDevice" type="primary" :disabled="dis"
      >设备管理</a-button
    >
    <br />
    <br />
    <a-button @click="goUser" type="primary" :disabled="dis">用户管理</a-button>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      name: "",
      group: "",
      role: "",
      dis: false,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.axios({
        url: "/user/info",
        methods: "get",
        headers: { "token": Cookies.get("jwt_token")},
      }).then((res) => {
        console.log(res);
        if (res.data.code === 0) {
          this.dis = res.data.body.Role == 3;
          this.name = res.data.body.Name;
          this.group = res.data.body.Group;
          switch (res.data.body.Role) {
            case 1:
              this.role = "管理员";
              break;
            case 2:
              this.role = "组长";
              break;
            case 3:
              this.role = "普通职员";
              break;
            default:
              break;
          }
        }
      });
    },
    goDevice: function () {
      location.href = "/Device";
    },
    goBorrow: function () {
      location.href = "/Borrow";
    },
    goUser: function () {
      location.href = "/User";
    },
  },
};
</script>

<style scoped>
</style>