<!--
 * @Date: 2021-03-21 19:28:37
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-04-03 17:05:09
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
        查看设备
      </a-button>
    </div>
    <br />
    <div id="table">
      <a-table
        :columns="columns"
        :data-source="tablelist"
        :loading="loading"
        bordered
      >
        <template slot="ID" slot-scope="text">
          <a href="/borrow">{{ text }}</a>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "序号",
    dataIndex: "ID",
    key: "ID",
    scopedSlots: { customRender: "ID" },
  },
  {
    title: "设备名",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "所属部门",
    dataIndex: "Group",
    key: "Group",
  },
  {
    title: "是否借出",
    dataIndex: "Borrowed",
    key: "Borrowed",
    // scopedSlots: { customRender: "Borrowed" },
    // customRender: (text, row, index) => {
    //   console.log(text, row, index);
    //   return { children: text };
    // },
  },
  //   {
  //     title: "预计归还时间",
  //     dataIndex: "Time",
  //     key: "Time",
  //   },
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
    customrow() {
      return {
        on: {
          click: (ID) => {
            console.log(ID);
          },
        },
      };
    },
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
        url: "/device/list",
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
            if (res.data.body[i].Borrowed === true)
              res.data.body[i].Borrowed = "是";
            else res.data.body[i].Borrowed = "否";
          }
          console.log(res);
        }
        this.tablelist = res.data.body;
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