<script setup lang="ts">
    import { AppRoutes } from "@/router/AppRoutes";
    import { RouterLink } from "vue-router";
    import { Logo, LogoutBtn } from "@/components";
</script>

<template>
    <div class="navbar">
        <Logo />
        <nav>
            <RouterLink :to="AppRoutes.HOME.path">Home</RouterLink>
            <RouterLink :to="AppRoutes.ABOUT.path">About</RouterLink>
            <RouterLink :to="AppRoutes.PRODUCTS.path">Products</RouterLink>
        </nav>
        <LogoutBtn />
    </div>
</template>


<style scoped lang="scss">
    @import "./Navbar.scss";
</style>