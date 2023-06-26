import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap/dist/js/bootstrap.min.js')
createApp(App).use(store).use(router).mount('#app')
