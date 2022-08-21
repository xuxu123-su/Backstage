<script lang='ts' setup>
  import { defineProps } from 'vue';

  defineProps({
    asideState: {
      type: Boolean
    }
  })
</script>

<template>
  <div class="logo">
    <img src="http://152.136.185.210/img/logo.1829caec.svg" alt="">
    <h2 v-show="!asideState" class="title">Vulgar-CMS</h2>
  </div>
</template>

<style lang='scss' scoped>
  .logo {
    display: flex;
    align-items: center;
    padding: 14px;
    height: 30px;
    overflow: hidden;
    word-break: break-all;

    img {
      height: 32px;
      margin-right: 8px;
    }

    .title {
      font-size: 20px;
      color: white;
    }
  }
</style>