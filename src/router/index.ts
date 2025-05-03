import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewTrainingView from '@/views/NewTrainingView.vue'
import TrainingDetailsView from '@/views/TrainingDetailsView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/new-training', name: 'NewTraining', component: NewTrainingView },
  { path: '/training/:id', name: 'TrainingDetails', component: TrainingDetailsView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
