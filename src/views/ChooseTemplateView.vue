<template>
    <main class="template-view">
        <h1>Wybierz szablon treningu</h1>
        <ul>
            <li v-for="template in templates" :key="template.id">
                <button @click="useTemplate(template)">📋 {{ template.name }}</button>
            </li>
        </ul>
        <router-link to="/">← Anuluj</router-link>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getTemplates } from '@/db'

const router = useRouter()
const templates = ref<any[]>([])

onMounted(async () => {
    templates.value = await getTemplates()
})

function useTemplate(template: any) {
    localStorage.setItem('templateToUse', JSON.stringify(template))
    router.push('/new-training')
}
</script>

<style scoped>
.template-view {
    padding: 1rem;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 0.5rem 0;
}

button {
    width: 100%;
    padding: 0.7rem;
    font-size: 1rem;
}
</style>