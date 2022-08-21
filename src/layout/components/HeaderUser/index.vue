<script lang='ts' setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const signOut = () => {
    router.push({ name: 'login' })
  }
</script>

<template>
  <div class="authod">
    <div class="authod-left">
      <el-icon size="20px"><Bell /></el-icon>
      <el-icon size="20px" style="margin-left: 20px;"><ChatDotRound /></el-icon>
    </div>
    <!-- 用户头像 -->
    <div class="authod-right">
      <el-dropdown>
        <div class="authod-avatar">
          <el-avatar
            :size="24" 
            src="http://152.136.185.210/img/logo.1829caec.svg" 
            style="margin-right: 15px;vertical-align: middle;"
          />
          <span>Vulgar</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="signOut">退出系统</el-dropdown-item>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang='scss' scoped>
  .authod {
    display: flex;

    .authod-left {
      display: flex;
      align-items: center;
      margin-right: 30px;
    }

    .authod-right {
      .authod-avatar {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-top: 22%;
      }
    }
  }
</style>