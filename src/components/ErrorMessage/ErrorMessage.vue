<script setup lang="ts">
    defineProps<{ msg: string | undefined }>();
</script>

<template>
    <div class="error">
        <i class="pi pi-exclamation-circle error-icon"></i>
        <p class="error-msg">{{ msg }}</p>
    </div>
</template>

<style scoped lang="scss">
   @import "./ErrorMessage.scss";
</style>