<script setup lang="ts">
    import { onBeforeMount } from 'vue';
    import { type Router, useRouter } from 'vue-router';
    import { AppRoutes } from "@/router/AppRoutes";

    const token = <string | null>localStorage.getItem('token');
    const router: Router = useRouter();

    onBeforeMount(() => {
        if (token !== import.meta.env.VITE_ADMIN_TOKEN) {
            router.push(AppRoutes.NOT_AUTHORIZED.path);
        }
    });
</script>

<template>
    <div>
        <RouterView></RouterView>
    </div>
</template>

<style scoped></style>