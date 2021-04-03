<template>
  <div id="page">
    <div id="choose">
      <p id="ctext">输入设备ID：</p>
      <a-input-number id="inputNumber" v-model="DeviceID" :min="1" />
      <p id="ctext">选择用户组：</p>
      <a-select
        id="select"
        @change="handleChangeGroup"
        mode="tags"
        :token-separators="[',']"
        :disabled="role == 3"
      >
        <a-select-option v-for="item in list" :key="item">
          {{ item }}
        </a-select-option>
      </a-select>
      <p id="ctext">选择用户：</p>
      <a-select id="select" @change="handleChangeUser" :disabled="role == 3">
        <a-select-option v-for="item in users" :key="item.ID">
          {{ item.Name }}
        </a-select-option>
      </a-select>
      <a-checkbox-group
        id="ctext"
        v-model="checkedList"
        :options="plainOptions"
      />
      <a-button type="primary" @click="search" :disabled="role == 3">
        搜索
      </a-button>
    </div>
    <br />
    <div id="table">
      <a-table :columns="columns" :data-source="tablelist" :loading="loading" />
    </div>
  </div>
</template>

<script>
const plainOptions = ["借出", "借入", "未归还"];
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
      users: [],
      tablelist: [],
      columns,
      loading: false,
      role: 3,
      DeviceID: 4,
      plainOptions,
      uid: 0,
      checkedList: [],
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
    handleChangeGroup(value) {
      console.log(`selected ${value}`);
      this.axios({
        url: "/user/list",
        method: "post",
        headers: { token: Cookies.get("jwt_token") },
        data: {
          groups: value,
        },
      }).then((res) => {
        console.log(res);
        this.users = res.data.body;
        this.users.unshift({ ID: 0, Name: "全部用户" });
      });
    },
    handleChangeUser(value) {
      this.uid = value;
    },
    search() {
      this.loading = true;
      let params = {};
      if (this.DeviceID != undefined) params.DeviceID = this.DeviceID;
      if (this.uid != 0) {
        if (this.checkedList.indexOf("借入") > -1)
          params.ToID = parseInt(this.uid);
        if (this.checkedList.indexOf("借出") > -1)
          params.FromID = parseInt(this.uid);
      }
      if (this.checkedList.indexOf("未归还") > -1) params.Returned = true;
      this.axios({
        url: "/borrow/list",
        method: "post",
        headers: { token: Cookies.get("jwt_token") },
        data: params,
      }).then((res) => {
        console.log(res);
        this.tablelist = res.data.body
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