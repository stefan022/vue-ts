<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { AppRoutes } from "../../router/AppRoutes";
</script>

<template>
    <div className='not-authorized'>
        <div className='not-authorized__container'>
            <i class="pi pi-exclamation-circle not-authorized__container-icon"></i>
            <h2 className='not-authorized__container-status'>Access Denied</h2>
        </div>
        <div className='not-authorized__msg'>
            <h3>You are not authorized to access this page.</h3>
        </div>
        <RouterLink :to="AppRoutes.HOME.path" className='not-authorized__link'>
            Back to Home page &lArr;
        </RouterLink>
    </div>
</template>

<style scoped lang="scss">
    @import "./NotAuthorized.scss";
</style>