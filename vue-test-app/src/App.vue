<script setup>
const active = ref(0)
</script>

<template>
  <RouterView />
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/HomePage">标签</van-tabbar-item>
    <van-tabbar-item icon="search" to="/CateList">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped></style>

