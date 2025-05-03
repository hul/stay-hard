<template>
    <main class="home">
        <h1 class="title">Twoje treningi</h1>
        <TrainingList :trainings="trainings" @delete="handleDelete" />
        <AddTrainingButton @create="handleCreate" />
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import TrainingList from '@/components/TrainingList.vue'
import AddTrainingButton from '@/components/AddTrainingButton.vue'
import { getAllTrainings, type Training, deleteTraining } from '@/db'

const router = useRouter()

const trainings = ref<Training[]>([])

onMounted(async () => {
    trainings.value = await getAllTrainings()
})

function handleCreate(type: 'template' | 'blank') {
    if (type === 'blank') {
        router.push('/new-training')
    } else {
        // Tu może być: router.push('/choose-template') w przyszłości
        alert('Opcja "Z szablonu" jeszcze nie gotowa')
    }
}

async function handleDelete(id: string) {
    if (confirm('Na pewno usunąć ten trening?')) {
        await deleteTraining(id)
        trainings.value = await getAllTrainings()
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