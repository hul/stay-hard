<template>
    <div class="set-editor">
        <select v-model="set.type">
            <option value="warmup">Rozgrzewka</option>
            <option value="work">Praca</option>
        </select>
        <input type="number" v-model.number="set.weight" placeholder="kg" />
        <input type="number" v-model.number="set.reps" placeholder="powtórzenia" />
        <button @click="$emit('remove')">❌</button>
    </div>
</template>

<script setup lang="ts">
defineProps<{ set: any }>()
defineEmits(['update:set', 'remove'])
</script>

<style scoped>
.set-editor {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.3rem 0;
}

.set-editor select,
.set-editor input {
    flex: 1 1 30%;
    min-width: 80px;
}

.set-editor button {
    flex: 0 0 auto;
    padding: 0.3rem 0.5rem;
}
</style>
