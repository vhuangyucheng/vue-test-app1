<script setup>
const active = ref(0)
</script>

<template>
<!--  <van-row class="my-top">-->
<!--    <van-col span="6" offset="2"><van-icon name="arrow-left" /></van-col>-->
<!--    <van-col span="8" ><div>what page</div></van-col>-->
<!--    <van-col span="8"></van-col>-->
<!--  </van-row>-->
  <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />
  <RouterView />
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/HomePage">标签</van-tabbar-item>
    <van-tabbar-item icon="search" to="/closeTicket">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/listMachine">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/addTicket">标签</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
.my-top {
  color: #1c2127;
  font-size: 20px;
  line-height: 50px;
}
</style>

