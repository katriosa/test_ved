import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import ForRouterTestPage from "@/pages/ForRouterTestPage.vue";

const routes = [
  { path: '/', component: MainPage },
  { path: '/other-route', component: ForRouterTestPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router).mount('#app')
