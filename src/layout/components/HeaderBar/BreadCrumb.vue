<script lang='ts' setup>
  import { ArrowRight } from '@element-plus/icons-vue'
  import { Ref, ref, watch } from 'vue'
  import { useRoute, RouteLocationMatched } from 'vue-router'

  const route = useRoute()

  const breadcrumb:Ref<RouteLocationMatched[]> = ref([])

  // 获取路由信息
  const getBreadCrumb = () => {
    let matched = route.matched.filter((item) => item.meta && item.meta.title && item.children.length !== 1)
    // const first = matched[0]
    // if (first.path !== '/index') {
    //   matched = [{ path: '/index', meta: { title: '系统管理' } } as any].concat(matched)
    // }
    breadcrumb.value = matched
    console.log(matched)
  }
  getBreadCrumb()

  // 监控路由进行面包屑变化
  watch(() => route.path, () => {
    getBreadCrumb()
  })
</script>

<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang='scss' scoped>

</style>