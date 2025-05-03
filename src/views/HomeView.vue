<template>
    <main class="home">
        <h1 class="title">Twoje treningi</h1>
        <TrainingList :trainings="trainings" @delete="handleDelete" />
        <TemplatesList :templates="templates" @use="startFromTemplate" @delete="handleDeleteTemplate" />
        <AddTrainingButton @create="handleCreate" />
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import TrainingList from '@/components/TrainingList.vue'
import AddTrainingButton from '@/components/AddTrainingButton.vue'
import { getAllTrainings, type Training, deleteTraining, getTemplates, type TrainingTemplate, deleteTemplate } from '@/db'
import TemplatesList from '@/components/TemplatesList.vue'

const router = useRouter()

const trainings = ref<Training[]>([])
const templates = ref<any[]>([])

onMounted(async () => {
    trainings.value = await getAllTrainings()
    templates.value = await getTemplates()
})

function handleCreate(type: 'template' | 'blank') {
    if (type === 'blank') {
        router.push('/new-training')
    } else {
        router.push('/choose-template')
    }
}

async function handleDelete(id: string) {
    if (confirm('Na pewno usunąć ten trening?')) {
        await deleteTraining(id)
        trainings.value = await getAllTrainings()
    }
}

function startFromTemplate(template: TrainingTemplate) {
    localStorage.setItem('templateToUse', JSON.stringify(template))
    router.push('/new-training')
}

async function handleDeleteTemplate(id: string) {
    if (confirm('Usunąć szablon?')) {
        await deleteTemplate(id)
        templates.value = await getTemplates()
    }
}

</script>

<style scoped>
.home {
    padding: 1rem;
}

.title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
</style>