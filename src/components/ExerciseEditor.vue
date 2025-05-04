<template>
    <div class="exercise-editor">
        <input v-model="exercise.name" placeholder="Nazwa ćwiczenia" />
        <input v-model="exercise.category" placeholder="Kategoria (np. Plecy)" />
        <input v-model="exercise.notes" placeholder="Notatki (np. Pull 5)" />

        <div class="sets">
            <h4>Serie</h4>
            <SetEditor v-for="(_, i) in exercise.sets" :key="i" v-model:set="exercise.sets[i]"
                @remove="removeSet(i)" />
            <button @click="addSet">+ Dodaj serię</button>
        </div>

        <button @click="$emit('remove')">🗑 Usuń ćwiczenie</button>
    </div>
</template>

<script setup lang="ts">
import SetEditor from './SetEditor.vue'

const props = defineProps<{ exercise: any }>()
const emit = defineEmits(['update:exercise', 'remove'])

function addSet() {
    props.exercise.sets.push({
        type: 'work',
        weight: 0,
        reps: 0
    })
}

function removeSet(index: number) {
    props.exercise.sets.splice(index, 1)
}
</script>

<style scoped>
.exercise-editor {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    background: #f9f9f9;
}

input,
select {
    margin: 0.3rem 0;
    padding: 0.4rem;
}

button {
    margin-top: 0.5rem;
}
</style>