<template>
    <main class="home">
        <h1 class="title">Twoje treningi</h1>
        <TrainingList :trainings="trainings" />
        <AddTrainingButton @create="handleCreate" />
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import TrainingList from '@/components/TrainingList.vue'
import AddTrainingButton from '@/components/AddTrainingButton.vue'

const trainings = [
    { id: '1', date: '2025-05-02', name: 'FBW 1' },
    { id: '2', date: '2025-04-23', name: 'FBW 1' },
    { id: '3', date: '2025-04-17', name: 'FBW 1' }
]

const router = useRouter()

function handleCreate(type: 'template' | 'blank') {
    if (type === 'blank') {
        router.push('/new-training')
    } else {
        // Tu może być: router.push('/choose-template') w przyszłości
        alert('Opcja "Z szablonu" jeszcze nie gotowa')
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