<script setup lang="ts">    
    import { AppRoutes } from "../../router/AppRoutes";
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        <h3>Sorry, page not found!</h3>
        <RouterLink :to="AppRoutes.HOME.path">Back to Home page &lArr;</RouterLink>
    </div>
</template>

<style scoped lang="scss">
    @import "./NotFound.scss";
</style>