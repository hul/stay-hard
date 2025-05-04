<template>
    <section class="template-list">
        <h2>Szablony</h2>
        <ul>
            <li v-for="template in templates" :key="template.id">
                📋 {{ template.name }}
                <div class="buttons">
                    <button @click="$emit('use', template)">Startuj</button>
                    <button @click="$emit('edit', template.id)">✏️</button>
                    <button @click="$emit('delete', template.id)">🗑</button>
                </div>
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
    (e: 'use', template: TrainingTemplate): void,
    (e: 'delete', id: string): void,
    (e: 'edit', id: string): void,
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

.buttons {
    display: flex;
    gap: 0.5rem;
}
</style>