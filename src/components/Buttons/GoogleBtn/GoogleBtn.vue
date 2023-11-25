<script setup lang="ts">
    import { googleSignIn } from "../../../utils/googleSignIn";
    import { useRouter, type Router } from 'vue-router';

    const router: Router = useRouter();

    const handleGooglSignIn = () => {
        googleSignIn(router);
    };
</script>

<template>
    <button type="button" class="dg-btn" @click="handleGooglSignIn">
        <i class="pi pi-google google-icon"></i>
        <p>Sing In with Google</p>
    </button>
</template>

<style scoped lang="scss">
    @import "./GoogleBtn.scss";
</style>