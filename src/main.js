import './assets/css/main.css'
import './assets/css/bootstrap.min.css'
import './assets/css/chat.css'
import './assets/fonts/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
