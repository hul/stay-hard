<template>
    <main class="new-training">
        <h1>Nowy trening</h1>

        <label>
            Nazwa treningu:
            <input v-model="trainingName" placeholder="Np. FBW 1" />
        </label>

        <div class="exercises">
            <h2>Ćwiczenia</h2>
            <ExerciseEditor v-for="(_, index) in exercises" :key="index" v-model:exercise="exercises[index]"
                @remove="removeExercise(index)" />
            <button @click="addExercise">+ Dodaj ćwiczenie</button>
        </div>

        <button @click="handleSaveTraining">💾 Zapisz trening</button>
        <button @click="handleSaveTemplate">📋 Zapisz jako szablon</button>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { v4 as uuidv4 } from 'uuid'
import { saveTraining, saveTemplate } from '@/db'
import ExerciseEditor from '@/components/ExerciseEditor.vue'

const router = useRouter()

const trainingName = ref('')
const exercises = ref<any[]>([])

onMounted(() => {
  const saved = localStorage.getItem('templateToUse')
  if (saved) {
    const parsed = JSON.parse(saved)
    trainingName.value = parsed.name + ' (kopia)'
    exercises.value = parsed.exercises
    localStorage.removeItem('templateToUse')
  }
})

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

function handleSaveTraining() {
    const newTraining = {
        id: uuidv4(),
        name: trainingName.value,
        date: new Date().toISOString().slice(0, 10),
        exercises: JSON.parse(JSON.stringify(exercises.value))
    }

    saveTraining(newTraining).then(() => {
        alert('Trening zapisany!')
        router.push('/')
    })
}


function handleSaveTemplate() {
  const template = {
    name: trainingName.value,
    exercises: JSON.parse(JSON.stringify(exercises.value))
  }

  saveTemplate(template).then(() => {
    alert('Szablon zapisany!')
    router.push('/')
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