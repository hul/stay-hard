<template>
    <main class="edit-training">
      <h1>Edytuj trening</h1>
  
      <label>
        Nazwa treningu:
        <input v-model="training.name" />
      </label>
  
      <ExerciseEditor
        v-for="(exercise, index) in training.exercises"
        :key="index"
        v-model:exercise="training.exercises[index]"
        @remove="removeExercise(index)"
      />
  
      <button @click="addExercise">+ Dodaj ćwiczenie</button>
      <button @click="handleSave">💾 Zapisz zmiany</button>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getAllTrainings, saveTraining, Training } from '@/db'
  import { v4 as uuidv4 } from 'uuid'
  import ExerciseEditor from '@/components/ExerciseEditor.vue'
  
  const route = useRoute()
  const router = useRouter()
  const training = ref<Training>({
    id: '',
    name: '',
    date: '',
    exercises: []
  })
  
  onMounted(async () => {
    const all = await getAllTrainings()
    const found = all.find(t => t.id === route.params.id)
    if (found) training.value = structuredClone(found) // lub JSON.parse(JSON.stringify(...))
  })
  
  function addExercise() {
    training.value.exercises.push({
      name: '',
      category: '',
      notes: '',
      sets: []
    })
  }
  
  function removeExercise(index: number) {
    training.value.exercises.splice(index, 1)
  }
  
  function handleSave() {
    saveTraining(JSON.parse(JSON.stringify(training.value))).then(() => {
      alert('Trening zaktualizowany!')
      router.push('/')
    })
  }
  </script>
  
  <style scoped>
  .edit-training {
    padding: 1rem;
  }
  </style>
  