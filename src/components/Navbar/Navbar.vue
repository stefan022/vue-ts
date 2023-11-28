<script setup lang="ts">
    import { AppRoutes } from "@/router/AppRoutes";
    import { RouterLink } from "vue-router";
    import { Logo, LogoutBtn } from "@/components";
    import { onBeforeMount, ref, type Ref } from "vue";

    const authToken = ref<string | null>(null);

    onBeforeMount(() => {
        const token = localStorage.getItem("token") as string;

        if (token === import.meta.env.VITE_ADMIN_TOKEN) {
            authToken.value = token;
        }
    });
</script>

<template>
    <div class="navbar">
        <Logo />
        <nav>
            <RouterLink :to="AppRoutes.HOME.path">Home</RouterLink>
            <RouterLink :to="AppRoutes.ABOUT.path">About</RouterLink>
            <RouterLink :to="AppRoutes.PRODUCTS.path">Products</RouterLink>
            <RouterLink
                :to="AppRoutes.DASHBOARD.path"
                v-if="authToken"
            >
                Dashboard
            </RouterLink>
        </nav>
        <LogoutBtn />
    </div>
</template>


<style scoped lang="scss">
    @import "./Navbar.scss";
</style>