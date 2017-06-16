<template>
  <div>
    <el-menu theme="dark"  class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link to="/">推荐</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/hundreds">百家</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/local">本地</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/image">图片</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/entertainment">娱乐</router-link></el-menu-item>
    </el-menu>
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>
<script>
</script>
<style>
</style>
