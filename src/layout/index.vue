<script lang='ts' setup>
  import LogoBar from './components/LogoBar/index.vue'
  import MenuBar from './components/MenuBar/index.vue'
  import AppMain from './components/AppMain/index.vue'
  import HeaderBar from './components/HeaderBar/index.vue'
  import HeaderUser from './components/HeaderUser/index.vue'

  import { Expand, Fold } from '@element-plus/icons-vue'
  import { ref, computed } from 'vue';

  import { isMobile } from '../utils/mobile'

  // header头部折叠判断
  const asideState = ref<boolean>(false)

  // 侧边栏宽度
  const autoWidth = computed(() => {
    // isMobile 判断是否移动端
    if (asideState.value && isMobile()) {
      return '0px'
    } else if (asideState.value) {
      return '64px'
    } else {
      return '212px'
    }
  })
</script>

<template>
  <div class="layout">
    <!-- 侧边栏 -->
    <el-container>
      <el-aside :style="'width:' + autoWidth">
        <logo-bar :asideState="asideState"/>
        <menu-bar :asideState="asideState"/>
      </el-aside>
      <!-- 右边内容 -->
      <el-container>
        <!-- 头部 -->
        <el-header>
          <el-row>
            <div class="row-left">
              <!-- 侧边栏展开折叠按钮 -->
              <el-icon class="exfold" @click="() => (asideState = !asideState)">
                <component :is="asideState ? Fold : Expand"/>
              </el-icon>
              <!-- 面包屑 -->
              <header-bar />
            </div>
            <div class="row-right">
              <!-- 用户头像 -->
              <header-user />
            </div>
          </el-row>
        </el-header>
        <!-- 内容 -->
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    display: flex;
    height: 100vh;

    .el-header {
      background-color: #fff;
      color: var(--el-text-color-primary);
      text-align: center;
      line-height: 60px;
    }

    .el-row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .row-left,
      .row-right {
        display: flex;
        align-items: center;
        margin-right: 30px;
      }
    }

    .el-aside {
      background-color: $menuBg;
      color: var(--el-text-color-primary);
      text-align: center;
      line-height: 200px;

      transition: width .5s;
      -webkit-transition: width .5s;
      -moz-transition: width .5s;
      -webkit-transition: width .5s;
      -o-transition: width .5s;
    }

    .exfold {
      cursor: pointer;
      font-size: 26px;
      margin-right: 15px;
    }

    .el-main {
      background-color: #e9eef3;
      color: var(--el-text-color-primary);
    }
  }
</style>