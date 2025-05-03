<template>
    <section class="template-list">
      <h2>Szablony</h2>
      <ul>
        <li v-for="template in templates" :key="template.id">
          📋 {{ template.name }}
          <button @click="$emit('use', template)">Startuj</button>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup lang="ts">
    import type { TrainingTemplate } from '@/db';

  defineProps<{
    templates: TrainingTemplate[]
  }>()
  
  defineEmits<{
    (e: 'use', template: TrainingTemplate): void
  }>()
  </script>
  
  <style scoped>
  .template-list {
    margin-top: 2rem;
  }
  
  .template-list ul {
    list-style: none;
    padding: 0;
  }
  
  .template-list li {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  