// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from '../store'
import Interceptors from './utils/Interceptors'
import VueApexCharts from 'vue3-apexcharts'
import VueAwesomePaginate from 'vue-awesome-paginate'

Interceptors()

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueApexCharts)
app.use(VueAwesomePaginate)
// app.use(vuetify)

app.mount('#app')
