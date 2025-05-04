<template>
    <main class="edit-template">
      <h1>Edytuj szablon</h1>
  
      <label>
        Nazwa szablonu:
        <input v-model="template.name" />
      </label>
  
      <ExerciseEditor
        v-for="(_, index) in template.exercises"
        :key="index"
        v-model:exercise="template.exercises[index]"
        @remove="removeExercise(index)"
      />
  
      <button @click="addExercise">+ Dodaj ćwiczenie</button>
      <button @click="handleSave">💾 Zapisz zmiany</button>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getTemplates, saveTemplate, type TrainingTemplate } from '@/db'
  import ExerciseEditor from '@/components/ExerciseEditor.vue'
  
  const route = useRoute()
  const router = useRouter()
  const template = ref<TrainingTemplate>({
    id: '',
    name: '',
    exercises: []
  })
  
  onMounted(async () => {
    const templates = await getTemplates()
    const found = templates.find(t => t.id === route.params.id)
    if (found) template.value = JSON.parse(JSON.stringify(found))
  })
  
  function addExercise() {
    template.value.exercises.push({
      name: '',
      category: '',
      notes: '',
      sets: []
    })
  }
  
  function removeExercise(index: number) {
    template.value.exercises.splice(index, 1)
  }
  
  function handleSave() {
    saveTemplate(template.value).then(() => {
      alert('Szablon zaktualizowany!')
      router.push('/')
    })
  }
  </script>
  
  <style scoped>
  .edit-template {
    padding: 1rem;
  }
  </style>
  