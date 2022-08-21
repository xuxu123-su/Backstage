<script lang='ts' setup>
  import { reactive, ref } from 'vue'
  import CardList from 'comps/local/CardList/index.vue'
  import DescriptionsList from 'comps/local/DescriptionsList/index.vue'

  // 技术栈
  const skill = reactive([
    { title: '编程语言', name: 'TypeScript 4.x + JavaScript' },
    { title: '构建工具', name: 'Vite 3.x' },
    { title: '前端框架', name: 'Vue 3.x' },
    { title: '路由工具', name: 'Vue Router 4.x' },
    { title: '状态管理', name: 'Pinia 2.x' },
    { title: 'UI 框架', name: 'Element Plus' },
    { title: 'CSS 预编译', name: 'Sass' },
    { title: 'HTTP 工具', name: 'Axios' },
  ])

  // 生产依赖
  const proTitle = ref<string>('生产环境依赖')
  const proRely = reactive([
    { name: 'vue', edition: '^3.2.37' },
    { name: 'vue-router', edition: '^4.1.3' },
    { name: 'pinia', edition: '^2.0.18' },
    { name: 'axios', edition: '^0.27.2' },
    { name: 'element-plus', edition: '^2.2.13' },
    { name: '@element-plus/icons', edition: '0.0.11' },
  ])

  // 开发依赖
  const devTitle = ref<string>('开发环境依赖')
  const devRely = reactive([
    { name: 'typescript', edition: '^4.1.3' },
    { name: '@types/node', edition: '^18.7.6' },
    { name: 'vite', edition: '^3.0.7' },
    { name: '@vitejs/plugin-vue', edition: '^3.0.3' },
    { name: 'sass', edition: '^1.54.4' },
    { name: 'sass-loader', edition: '^13.0.2' },
    { name: 'unplugin-auto-import', edition: '^0.11.1' },
    { name: 'unplugin-vue-components', edition: '^0.22.4' },
    { name: 'vue-tsc', edition: '^0.39.5' },
  ])
</script>

<template>
  <div class="core">
    <!-- 简介 -->
    <card-list>
      <template v-slot:title>关于</template>
      <template #default>后台管理系统基于 Vue3、Pinia、VueRouter、ElementPlus、TypeScript、Vite 等技术搭建。</template>
    </card-list>
    <!-- 技术栈 -->
    <card-list>
      <template v-slot:title>技术栈</template>
      <template #default>
        <div class="list">
          <div class="list-skill">
            <div class="skill-item" v-for="item in skill" :key="item.title">
              <span class="skill-item-text">{{ item.title }}：</span>
              <a class="skill-item-a" href="#">{{ item.name }}</a>
            </div>
          </div>
          <!-- 依赖 -->
          <div class="list-rely">
            <!-- 生产依赖 -->
            <div class="rely-pro">
              <descriptions-list :relyItem="proRely" :title="proTitle"/>
            </div>
            <!-- 开发依赖 -->
            <div class="rely-dev">
              <descriptions-list :relyItem="devRely" :title="devTitle"/>
            </div>
          </div>
        </div>
      </template>
    </card-list>
  </div>
</template>

<style lang='scss' scoped>
  .list-skill {
    margin: 0 0 20px 10px;

    .skill-item {
      display: flex;
      align-items: center;

      .skill-item-text {
        position: relative;
        display: inline-block;
        margin-right: 20px;
      }

      .skill-item-text::before {
        position: absolute;
        top: 40%;
        left: -12px;
        content: '';
        width: 5px;
        height: 5px;
        margin-right: 10px;
        background-color: #000;
      }

      .skill-item-a {
        color: #409eff;
      }

      .skill-item-a:hover {
        text-decoration: underline;
      }
    }
  }

  .list-rely {
    .rely-pro {
      margin-bottom: 30px;
    }
  }
</style>