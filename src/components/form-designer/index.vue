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
  }
  .el-aside {
    width: $aside-width;
    height: $aside-height;
    box-sizing: border-box;
    position: relative;
    &.left-aside {
      border-right: $border;
    }
    &.right-aside {
      border-left: $border;
    }
  }
  .el-main {
    height: $main-height;
    min-width: $main-min-width;
    padding: 0;
  }
}
</style>
