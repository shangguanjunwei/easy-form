<template>
  <el-container class="el-container-demo">
    <!-- 顶部 -->
    <el-header>
      <header-vue />
    </el-header>

    <el-container>
      <!-- 左侧配置栏 -->
      <el-aside class="left-aside">
        <left-aside />
      </el-aside>

      <!-- 主要内容区 -->
      <el-main>
        <content />
      </el-main>

      <!-- 右侧配置栏 -->
      <el-aside class="right-aside">
        <right-aside />
      </el-aside>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import content from "./layout/content.vue";
import headerVue from "./layout/header.vue";
import rightAside from "./layout/right_aside.vue";
import leftAside from "./layout/left_aside.vue";
</script>

<style scoped lang="scss">
.el-container-demo {
  height: 100vh;
  .el-header {
    padding: 0;
    height: $header-height;
    box-sizing: border-box;
    border-bottom: $border;
    position: relative;
  }
  .el-aside {
    height: $aside-height;
    position: relative;
    &.left-aside {
      width: $left-aside-width;
    }
    &.right-aside {
      width: $right-aside-width;
    }
  }
  .el-main {
    height: $main-height;
    min-width: $main-min-width;
    box-sizing: border-box;
    position: relative;
    padding: 0;
    background-color: #eee;
  }
}
</style>
