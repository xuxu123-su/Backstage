<script lang='ts' setup>
  import { defineProps } from "vue";

  defineProps({
    relyItem: {
      type: Array
    },

    title: {
      type: String
    }
  })
</script>

<template>
  <div class="desc">
    <el-descriptions
      :title="title"
      :column="2"
      :size="6"
      border
    >
      <el-descriptions-item v-for="(item, index) in relyItem" :key="index">
        <template #label>{{ item.name }}</template>
        <el-tag>{{ item.edition }}</el-tag> 
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style lang='scss' scoped>
</style>