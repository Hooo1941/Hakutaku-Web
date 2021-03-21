<!--
 * @Date: 2021-03-21 19:28:37
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-03-21 19:38:50
-->
<template>
<DeviceTable id="dt"/>
</template>

<script>
import DeviceTable from "@/components/DeviceTable";

export default {
	name: 'Device',
	components: {
		DeviceTable
	}
}
</script>

<style>
#dt {
	margin:0 10% 0 10%;
}
</style>