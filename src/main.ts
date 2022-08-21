import { createApp } from 'vue'
import './assets/css/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import * as ELIcons from '@element-plus/icons'

const app = createApp(App)

for (const name in ELIcons) {
  app.component(name, (ELIcons as any)[name])
}

app.use(router).use(store).mount('#app')