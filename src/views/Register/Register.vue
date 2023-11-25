<script setup lang="ts">
    import { AppRoutes } from "@/router/AppRoutes";
    import { ref } from 'vue';
    import { RouterLink, useRouter } from 'vue-router';
    import { ErrorMessage, Spinner } from "@/components";
    import { validationSchema } from "@/utils/validationSchema";
    import { context } from "@/stores/context/context";
    import { signUp } from "@/utils/signUp";
    import type { Password } from "@/ts/types/Password";
    import type { IErrorMessage } from "@/ts/interfaces/IErrorMessage";
    import { initErrorMsg } from "@/constants/initErrorMsg";

    const router = useRouter();
    const contextStore = context();

    const usernameRef = ref<string>("");
    const emailRef = ref<string>("");
    const passwordRef = ref<string>("");
    const isVisible = ref<boolean>(false);
    const passwordType = ref<Password>("password");
    const errorMsg = ref<IErrorMessage>(initErrorMsg);
    const isLoading = ref<boolean>(false);

    const handleSignUp = async () => { 
        const values = validationSchema({ username: usernameRef.value, email: emailRef.value, password: passwordRef.value });
        errorMsg.value = values;

        contextStore.toastInfo.isActive = true;

        if (!values.username.isError && !values.email.isError && !values.password.isError) {
            isLoading.value = true;
            contextStore.toastInfo.isActive = false;

            await signUp(usernameRef.value, emailRef.value, passwordRef.value);

            isLoading.value = false;
            contextStore.toastInfo.isActive = true;
            contextStore.toastInfo.isError = false;
            contextStore.toastInfo.message = "Register successfully";
            router.push(AppRoutes.LOGIN.path);

            return;
        }

        contextStore.toastInfo.isError = true;
        contextStore.toastInfo.message = "Sorry, the form is not valid. Please try again!";
    };

    const toggleVisiblePassword = () => {
        isVisible.value = !isVisible.value;
        passwordType.value = isVisible.value ? "text" : "password";
    };
</script>

<template>
    <form @submit.prevent="handleSignUp">
        <h2>Sign up to your account</h2>
        <div class="field-container">
            <input
                v-model="usernameRef"
                class="field"
                type="text"
                placeholder="example022"
            >
            <ErrorMessage v-show="errorMsg.username.isError" :msg="errorMsg.username.message"/>
        </div>
        <div class="field-container">
            <input
                v-model="emailRef"
                class="field"
                type="text"
                placeholder="example@gmail.com"
            >
            <ErrorMessage v-show="errorMsg.email.isError" :msg="errorMsg.email.message"/>
        </div>
        <div class="field-container">
            <div>
                <input
                    v-model="passwordRef"
                    class="field"
                    :type="passwordType"
                    placeholder="*********"
                >
                <i 
                    @click="toggleVisiblePassword"
                    :class="{ 'pi pi-eye password': isVisible, 'pi pi-eye-slash password': !isVisible }"
                >
                </i>
            </div>
            <ErrorMessage v-show="errorMsg.password.isError" :msg="errorMsg.password.message"/>
        </div>
        <button class="dg-btn">Sign Up</button>
        <div class="question">
            Have an account?
            <RouterLink :to="AppRoutes.LOGIN.path">Sign In</RouterLink>
        </div>
    </form>
    <Spinner v-show="isLoading"/> 
</template>

<style scoped lang="scss">
    @import "./Register.scss";
</style>