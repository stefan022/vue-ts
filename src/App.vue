<script setup lang="ts">
    import { RouterView } from "vue-router";
    import { Toast } from "@/components";
</script>

<template>
    <div>
        <RouterView />
        <teleport to="#app">
            <Toast />
        </teleport>
    </div>
</template>

<style scoped></style>
