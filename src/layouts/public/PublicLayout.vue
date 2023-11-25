<script setup lang="ts">
    import { AppRoutes } from '@/router/AppRoutes';
    import { onBeforeMount } from "vue";
    import { RouterView, useRouter } from 'vue-router';

    const userId = <string | null>localStorage.getItem("userId");
    const router = useRouter();
    
    onBeforeMount(() => {
        if (userId) {
            router.push(AppRoutes.HOME.path);
        }
    });
</script>

<template>
    <div>
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
    div {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>