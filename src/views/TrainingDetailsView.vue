<template>
    <main class="details">
        <h1>Trening {{ training?.name }}</h1>
        <p><strong>Data:</strong> {{ training?.date }}</p>

        <div v-if="training">
            <div v-for="(ex, i) in training.exercises" :key="i" class="exercise">
                <h3>{{ ex.name }} <small>({{ ex.category }})</small></h3>
                <p v-if="ex.notes">{{ ex.notes }}</p>
                <ul>
                    <li v-for="(s, j) in ex.sets" :key="j">
                        {{ s.type === 'warmup' ? '🔸' : '🔹' }} {{ s.weight }} kg × {{ s.reps }} powt.
                    </li>
                </ul>
            </div>
        </div>

        <router-link to="/">← Wróć</router-link>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Training, getAllTrainings } from '@/db'

const route = useRoute()
const training = ref<Training | null>(null)

onMounted(async () => {
    const all = await getAllTrainings()
    training.value = all.find(t => t.id === route.params.id) || null
})
</script>

<style scoped>
.details {
    padding: 1rem;
}

.exercise {
    margin: 1rem 0;
}
</style>