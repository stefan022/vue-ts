<script setup lang="ts">
    import { useRouter, type Router } from 'vue-router';
    import { AppRoutes } from '@/router/AppRoutes';
    import { context } from '@/stores/context/context';

    const router: Router = useRouter();
    const contextStore = context();

    const handleLogout = () => { 
        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        contextStore.toastInfo.isActive = true;
        contextStore.toastInfo.message = "Logout successfully";
        router.push(AppRoutes.LOGIN.path);
    };
</script>

<template>
    <button class="dg-btn" @click="handleLogout">Logout</button>
</template>

<style scoped></style>