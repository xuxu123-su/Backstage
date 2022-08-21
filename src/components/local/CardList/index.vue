<script lang='ts' setup>

</script>

<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span><slot name="title"></slot></span>
        </div>
      </template>
      <div class="text"><slot></slot></div>
    </el-card>
  </div>
</template>

<style lang='scss' scoped>
  .box-card {
    width: 100%;
    margin-bottom: 20px;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
    }

    .text {
      font-size: 14px;
    }
  }

  :deep(.el-card__header) {
    padding: 10px 20px !important;
  }
</style>