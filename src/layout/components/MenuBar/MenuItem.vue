<script lang='ts' setup>
  import menus from '../../../utils/menuData'

  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter()

  defineProps({
    asideState: {
      type: Boolean
    }
  })

  const toPath = (item: string) => {
    console.log(item)
    router.push({ name: item })
  }
</script>

<template>
  <el-menu
    default-active="index"
    class="el-menu"
    :collapse="asideState"
    :collapse-transition="false"
    text-color="#999"
  >
    <template v-for="menu in menus" :key="menu.path">
      <!-- 一级 -->
      <el-sub-menu v-if="menu.children" :index="menu.path">
        <template #title>
          <el-icon>
            <component :is="menu.meta.icon"/>
          </el-icon>
          <span>{{menu.meta.title}}</span>
        </template>
        <template v-for="item in menu.children" :key="item.path">
          <el-menu-item-group>
            <el-menu-item @click="toPath(item.name)" :index="item.path" class="menu-items">{{item.meta.title}}</el-menu-item>
          </el-menu-item-group>
        </template>
      </el-sub-menu>

      <el-menu-item
        v-else 
        :index="menu.path" 
        @click="toPath(menu.name)"
        class="item">
        <el-icon>
          <component :is="menu.meta.icon"/>
        </el-icon>
        <span>{{menu.meta.title}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<style lang='scss' scoped>
  .el-menu {
    width: 212px;
    background-color: #001529;
    border: none;
  }

  .menu-items {
    background-color: $subMenuBg !important;
  }
  
  .menu-items:hover {
    color: white !important;
  }

  .item:hover {
    background-color: #001529;
    color: white;
  }

  // li滑过背景
  ::v-deep(.el-sub-menu__title:hover) {
    background-color: #001529 !important;
    color: white !important;
  }

  // 活跃item样式
  ::v-deep(.el-menu-item.is-active) {
    background-color: $menuActiveText !important;
    color: white !important;
  }

  :deep(.el-menu-item-group__title) {
    padding: 0 !important;
  }
</style>