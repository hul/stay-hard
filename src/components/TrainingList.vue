<template>
  <ul class="training-list">
    <li v-for="t in trainings" :key="t.id" class="training-item">
      <router-link :to="`/training/${t.id}`" class="link">
        <strong>{{ t.date }}</strong> – {{ t.name }} - ({{ calculatePoints(t) }} pkt)
      </router-link>
      <button class="delete-btn" @click="$emit('delete', t.id)">🗑</button>
    </li>
  </ul>
</template>

<script setup lang="ts">

import type { Training } from '@/db';
import { calculatePoints } from '@/utils/points'

defineProps<{
  trainings: Training[]
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

.link {
  flex: 1;
  text-decoration: none;
  color: inherit;
}
</style>