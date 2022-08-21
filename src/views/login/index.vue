<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue'
  import type { FormInstance } from 'element-plus'
  import { User, Lock, Unlock } from '@element-plus/icons'
  import { useRouter } from 'vue-router'
  import { toRaw } from '@vue/reactivity'

  onMounted(() => {
    const getUser = localStorage.hasOwnProperty('user')
    const getPass = localStorage.hasOwnProperty('pass')
    const user = localStorage.getItem('user')
    const pass = localStorage.getItem('pass')
    if (getUser && getPass) {
      ruleForm.username = user || ''
      ruleForm.password = pass || ''
      ruleForm.type = true
    }
  })

  const router = useRouter()

  const ruleFormRef = ref<FormInstance>()

  const validateUsername = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the user name'))
    } else if (value !== 'admin') {
      callback(new Error('Please enter the correct user name'))
    } else {
      if (ruleForm.username !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('username', () => null)
      }
      callback()
    }
  }

  const validatePassword = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the Password'))
    } else if (value !== '123456') {
      callback(new Error('Please enter the correct Password'))
    } else {
      if (ruleForm.password !== null) {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('password', () => null)
      }
      callback()
    }
  }

  const ruleForm = reactive({
    username: '',
    password: '',
    type: false
  })

  const rules = reactive({
    username: [{ validator: validateUsername, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }],
  })

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid:boolean) => {
      if (valid) {
        const rule = toRaw(ruleForm)
        if (rule.type) {
          localStorage.setItem('user', rule.username)
          localStorage.setItem('pass', rule.password)
        }
        router.push({ name: 'index' })
      } else {
        return false
      }
    })
  }
</script>

<template>
<div class="login">
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
  >
  <div class="form">
    <!-- title -->
    <div class="form-title">
      <h3>后台管理系统</h3>
    </div>
    <!-- 账号密码 -->
    <el-form-item prop="username">
      <el-input 
        :prefix-icon="User" 
        v-model="ruleForm.username" 
        autocomplete="off"
        placeholder="用户名/手机号"
       />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        :prefix-icon="Lock" 
        v-model="ruleForm.password" 
        placeholder="密码"
        show-password
      />
    </el-form-item>
    <el-form-item>
      <div class="control">
        <el-checkbox v-model="ruleForm.type" label="记住密码" />
        <span class="control-span">忘记密码?</span>
      </div>
    </el-form-item>
    <!-- submit -->
    <el-form-item>
      <el-button style="width: 100%;" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form-item>
    <div class="register">
      没有账号，<span class="register-span">立即注册</span>
    </div>
  </div>
  </el-form>
</div>
  
</template>

<style lang='scss' scoped>
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: url('http://152.136.185.210/img/login-bg.5825f033.svg');

    .title {
      text-align: center;
    }
  }

  .form {
    position: relative;
    width: 280px;
    max-width: 100%;
    padding: 0 35px 15px;
    margin: 0 auto 150px;
    overflow: hidden;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%);

    .form-title {
      text-align: center;
      margin-top: 30px;
    }

    .form-icon {
      position: absolute;
      right: 10px;
      cursor: pointer;
    }
  }

  .control {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: -10px 0 0;

    .control-span {
      color: #999;
      cursor: pointer;
    }

    .control-span:hover {
      color: #409eff;
    }
  }

  .register {
    text-align: center;
    font-size: 14px;
    color: #999;

    .register-span {
      cursor: pointer;
      color: #40a0ff9d;
    }

    .register-span:hover {
      color: #409eff;
    }
  }
</style>