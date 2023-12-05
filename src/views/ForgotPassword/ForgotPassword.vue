<script setup lang="ts">
    import { ref } from "vue";
    import { RouterLink } from "vue-router";
    import { HorizontalRule, Spinner } from "../../components";
    import { AppRoutes } from "../../router/AppRoutes.ts";
    import { resetPassword } from "../../utils/resetPassword.ts";
    import { validateEmail } from "../../utils/helpers/regexValidation.ts";
    import { context } from "../../stores/context/context.ts";

    const email = ref<string>("");
    const isLoading = ref<boolean>(false);
    const contextStore = context();

    const handleResetPassword = async () => { 
        isLoading.value = true;

        if (!validateEmail.test(email.value)) {
            isLoading.value = false;
            email.value = "";

            contextStore.toastInfo.isActive = true;
            contextStore.toastInfo.message = "Invalid email address";
            contextStore.toastInfo.isError = true;

            return;
        };

        await resetPassword(email.value);

        isLoading.value = false;
        email.value = "";

        contextStore.toastInfo.isError = false;
        contextStore.toastInfo.isActive = true;
        contextStore.toastInfo.message = "Check your email address";
    };
</script>

<template>
    <form @submit.prevent="handleResetPassword">
        <h2>Reset your Password</h2>
        <div class="field-container">
            <input
                v-model="email"
                class="field"
                type="text"
                placeholder="example@gmail.com"
            >
        </div>
        <button type="submit" class="dg-btn">Send instructions</button>
        <HorizontalRule />
        <div class="go-back">
            <p>Back to</p>
            <RouterLink :to="AppRoutes.LOGIN.path">Sign In</RouterLink>
        </div>
    </form>
    <Spinner v-show="isLoading"/>
</template>

<style lang="scss" scoped>
    @import "./ForgotPassword.scss";
</style>