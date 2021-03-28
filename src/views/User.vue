<!--
 * @Date: 2021-03-28 14:20:59
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-03-29 00:50:05
-->
<template>
  <div id="page">
    <div id="choose">
      <p id="ctext">选择用户组：</p>
      <a-select id="select" mode="tags" :token-separators="[',']" @change="handleChange">
        <a-select-option v-for="item in list" :key="item.name">
          {{ item.name }}
        </a-select-option>
      </a-select>
      <a-button type="primary" @click="search"> 查看用户 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          key: "1",
          name: "group1",
        },
        {
          key: "2",
          name: "group2",
        },
      ],
      searchlist:[]
    };
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
      this.searchlist = value
    },
    search() {
      console.log(this.searchlist);
    }
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
  flex:1;
}
</style>