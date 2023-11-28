<script setup lang="ts">
    import { AppRoutes } from "../../router/AppRoutes.ts";
</script>

<template>
    <div class="dashboard">
        <div class="dashboard-msg">
            <h2>Hello Admin xD</h2>
            <h1>Welcome to Dashboard</h1>
        </div>
        <RouterLink :to="AppRoutes.HOME.path">Back to Home page</RouterLink>
    </div>
</template>

<style scoped lang="scss">
    @import "./Dashboard.scss";
</style>