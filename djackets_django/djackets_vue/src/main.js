import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

// process.env.VUE_APP_LOCAL = require('/home/vadim/Desktop/APIKEYS')
// console.log('hello')
process.env.VUE_APP_STRIPE_API_PUBLIC_KEY = 'pk_test_51JTkmMGlXmiZRjg2xkYxSsSKA6PlXbrtH2t84lFtuAOzTyt7zra5wxZXh7pdhzAV9jF7qWNvnm16UGXuPJTdNvbH00WOWNIQOy'

createApp(App).use(store).use(router, axios).mount('#app')
