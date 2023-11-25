<script setup lang="ts">
    import { context } from '@/stores/context/context';

    const contextStore = context();

    const handleCloseToast = () => { 
        contextStore.toastInfo.isActive = false;
    };
</script>

<template>
    <div 
        :class="[
            'toast',
            { 'toast-success': contextStore.toastInfo.isActive && !contextStore.toastInfo.isError },
            { 'toast-error': contextStore.toastInfo.isActive && contextStore.toastInfo.isError },
            { 'active': contextStore.toastInfo.isActive },
        ]"
        @animationend="handleCloseToast"
    >
    <div 
            class="close"
            @click="handleCloseToast"
        >
            <i :class="[
                contextStore.toastInfo.isError 
                    ? `pi pi-times error` 
                    : `pi pi-times`,
                `close-btn`
            ]"></i>
        </div>
        <div class="content">
            <i :class="[
                contextStore.toastInfo.isError 
                    ? `pi pi-times-circle error` 
                    : `pi pi-check-circle`, 
                `content-icon`
            ]"></i>
            <p class="content-msg">{{ contextStore.toastInfo.message }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "./Toast.scss";
</style>