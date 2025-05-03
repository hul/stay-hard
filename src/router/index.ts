import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewTrainingView from '@/views/NewTrainingView.vue'
import TrainingDetailsView from '@/views/TrainingDetailsView.vue'
import EditTrainingView from '@/views/EditTrainingView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/new-training', name: 'NewTraining', component: NewTrainingView },
  { path: '/training/:id', name: 'TrainingDetails', component: TrainingDetailsView },
  { path: '/training/:id/edit', name: 'EditTraining', component: EditTrainingView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
