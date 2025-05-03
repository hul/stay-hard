<template>
    <div class="add-training">
      <button @click="open = !open" class="main-button">➕ Dodaj trening</button>
      <div v-if="open" class="options">
        <button @click="select('template')">Z szablonu</button>
        <button @click="select('blank')">Od zera</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const emit = defineEmits<{
    (e: 'create', type: 'template' | 'blank'): void
  }>()
  
  const open = ref(false)
  
  function select(type: 'template' | 'blank') {
    emit('create', type)
    open.value = false
  }
  </script>
  
  <style scoped>
  .add-training {
    margin-top: 2rem;
  }
  .main-button {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
  }
  .options {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .options button {
    padding: 0.4rem;
    font-size: 1rem;
  }
  </style>
  