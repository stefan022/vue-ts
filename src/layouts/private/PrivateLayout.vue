<script setup lang="ts">
    import { AppRoutes } from '@/router/AppRoutes';
    import { onBeforeMount } from 'vue';
    import { type Router, useRouter } from 'vue-router';
    import { Navbar } from '@/components';
    import MdContainer from "@/containers/MdContainer.vue"

    const userId = <string | null>localStorage.getItem('userId');
    const router: Router = useRouter();

    onBeforeMount(() => {
        if (!userId) {
            router.push(AppRoutes.LOGIN.path);
        }
    });
</script>


<template>
    <MdContainer>
        <Navbar />
        <RouterView></RouterView>
    </MdContainer>
</template>

<style scoped></style>