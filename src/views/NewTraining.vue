<template>
    <main class="new-training">
        <h1>Nowy trening</h1>

        <label>
            Nazwa treningu:
            <input v-model="trainingName" placeholder="Np. FBW 1" />
        </label>

        <div class="exercises">
            <h2>Ćwiczenia</h2>
            <ExerciseEditor v-for="(exercise, index) in exercises" :key="index" v-model:exercise="exercises[index]"
                @remove="removeExercise(index)" />
            <button @click="addExercise">+ Dodaj ćwiczenie</button>
        </div>

        <button @click="saveTraining">💾 Zapisz trening</button>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExerciseEditor from '@/components/ExerciseEditor.vue'

const trainingName = ref('')
const exercises = ref<any[]>([])

function addExercise() {
    exercises.value.push({
        name: '',
        category: '',
        notes: '',
        sets: []
    })
}

function removeExercise(index: number) {
    exercises.value.splice(index, 1)
}

function saveTraining() {
    console.log('Zapisuję trening:', {
        name: trainingName.value,
        exercises: exercises.value
    })
}
</script>

<style scoped>
.new-training {
    padding: 1rem;
}

label {
    display: block;
    margin-bottom: 1rem;
}

h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

button {
    padding: 0.6rem;
    font-weight: bold;
    margin-top: 1rem;
}
</style>