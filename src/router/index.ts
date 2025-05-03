import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import NewTrainingView from '@/views/NewTraining.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/new-training', name: 'NewTraining', component: NewTrainingView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
