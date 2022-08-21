<script lang="ts" setup>
  import MenuItem from './MenuItem.vue'
  
  import { defineProps } from 'vue';

  defineProps({
    asideState: {
      type: Boolean
    }
  })
</script>

<template>
  <div class="menu">
    <menu-item :asideState="asideState"/>
  </div>
</template>

<style lang="scss" scoped>
  .menu {
    width: 100%;
    height: calc(100% - 58px);
  }
</style>
