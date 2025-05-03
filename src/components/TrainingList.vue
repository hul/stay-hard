<template>
    <ul class="training-list">
      <li v-for="t in trainings" :key="t.id" class="training-item">
        <strong>{{ t.date }}</strong> – {{ t.name }}
        <button class="delete-btn" @click="$emit('delete', t.id)">🗑</button>
      </li>
    </ul>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    trainings: { id: string; date: string; name: string }[]
  }>()
  
  defineEmits<{
    (e: 'delete', id: string): void
  }>()
  </script>
  
  <style scoped>
  .training-list {
    list-style: none;
    padding: 0;
  }
  
  .training-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ddd;
  }
  
  .delete-btn {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: red;
  }
  </style>
  