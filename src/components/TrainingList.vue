<template>
    <ul class="training-list">
      <li v-for="t in trainings" :key="t.id" class="training-item">
        <strong>{{ t.date }}</strong> – {{ t.name }}
      </li>
    </ul>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    trainings: { id: string; date: string; name: string }[]
  }>()
  </script>
  
  <style scoped>
  .training-list {
    list-style: none;
    padding: 0;
  }
  .training-item {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ddd;
  }
  </style>
  