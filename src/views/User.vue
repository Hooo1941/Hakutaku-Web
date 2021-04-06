<!--
 * @Date: 2021-03-28 14:20:59
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-04-06 21:02:19
-->
<template>
  <div id="page">
    <div id="choose">
      <p id="ctext">选择用户组：</p>
      <a-select
        id="select"
        mode="tags"
        :token-separators="[',']"
        @change="handleChange"
        :disabled="role != 1"
      >
        <a-select-option v-for="item in list" :key="item">
          {{ item }}
        </a-select-option>
      </a-select>
      <a-button type="primary" @click="search" :disabled="role == 3">
        查看用户
      </a-button>
    </div>
    <br />
    <div id="table">
      <a-table :columns="columns" :data-source="tablelist" :loading="loading" />
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "序号",
    dataIndex: "ID",
    key: "ID",
  },
  {
    title: "姓名",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "部门",
    dataIndex: "Group",
    key: "Group",
  },
  {
    title: "职务",
    dataIndex: "Role",
    key: "Role",
  },
];

import Cookies from "js-cookie";
export default {
  data() {
    return {
      list: [],
      searchlist: [],
      tablelist: [],
      columns,
      loading: false,
      role: 3,
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
        headers: { token: Cookies.get("jwt_token") },
      }).then((res) => {
        console.log(res);
        if (res.data.code === 0) {
          this.role = res.data.body.Role;
        }
      });
      this.axios({
        url: "/user/group",
        methods: "get",
        headers: { token: Cookies.get("jwt_token") },
      }).then((res) => {
        console.log(res);
        if (res.data.code === 0) {
          this.list = res.data.body;
        }
      });
    },
    handleChange(value) {
      console.log(`selected ${value}`);
      this.searchlist = value;
    },
    search() {
      this.loading = true;
      console.log(this.searchlist);
      this.axios({
        url: "/user/list",
        method: "post",
        headers: { token: Cookies.get("jwt_token") },
        data: {
          groups: this.searchlist,
        },
      }).then((res) => {
        console.log(res);
        var len = res.data.body.length;
        if (len != 0) {
          for (var i = 0; i < len; i++) {
            switch (res.data.body[i].Role) {
              case 1:
                res.data.body[i].Role = "超级管理员";
                break;
              case 2:
                res.data.body[i].Role = "部门管理员";
                break;
              default:
                res.data.body[i].Role = "员工";
                break;
            }
          }
          console.log(res);
        }
        this.tablelist = res.data.body;
        this.tablelist.splice(this.tablelist.findIndex(e => e.id === 0), 1)
        console.log(res);
        this.loading = false;
      });
    },
  },
};
</script>

<style scoped>
#choose {
  display: flex;
}
#ctext {
  padding: 0px;
  margin: 0px;
  /*border-top: solid;*/
  text-align: center;
  line-height: 33px;
}
#select {
  flex: 1;
}
</style>