<template>
    <header class="app-header">
        <router-link to="/" class="logo-link">
            <img src="/stay-hard-512x512-white.png" alt="Stay Hard" class="logo" />
        </router-link>
    </header>
</template>

<style scoped>
.app-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 128px;
    border-bottom: 1px solid #eee;
    padding: 0.5rem;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 10;
}

.logo {
    height: 120px;
    width: auto;
}

.logo-link {
    text-decoration: none;
}
</style>