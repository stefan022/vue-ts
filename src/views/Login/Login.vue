<script setup lang="ts">
    import { AppRoutes } from '@/router/AppRoutes';
    import { ref } from 'vue';
    import { RouterLink, useRouter, type Router } from 'vue-router';
    import { signIn } from "@/utils/signIn";
    import { GoogleBtn, HorizontalRule, Spinner } from '@/components';
    import type { Password } from "@/ts/types/Password";
    import { context } from '@/stores/context/context';

    const router: Router = useRouter();
    
    const contextStore = context();

    const email = ref<string>();
    const password = ref<string>();
    const isVisible = ref<boolean>(false);
    const passwordType = ref<Password>("password");
    const isLoading = ref<boolean>(false);

    const handleSignIn = async () => { 
        isLoading.value = true;

		const isSuccess = await signIn(router, email.value as string, password.value as string);

        isLoading.value = false;
        contextStore.toastInfo.isActive = true;

        email.value = "";
        password.value = "";

        if (!isSuccess) {
            isLoading.value = false;

            contextStore.toastInfo.isError = true;
            contextStore.toastInfo.message = "Invalid email address or password";

            return;
        }

        contextStore.toastInfo.isError = false;
        contextStore.toastInfo.message = "Login successfully";
        router.push(AppRoutes.HOME.path);
    };

    const toggleVisiblePassword = () => {
        isVisible.value = !isVisible.value;
        passwordType.value = isVisible.value ? "text" : "password";
    };
</script>

<template>
    <form @submit.prevent="handleSignIn">
        <h2>Sign in to your account</h2>
        <div class="field-container">
            <input
                v-model="email"
                class="field"
                type="text"
                placeholder="example@gmail.com"
            >
        </div>
        <div class="field-container">
            <input
                v-model="password"
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
        <button type="submit" class="dg-btn">Sign In</button>
        <div class="question">
            Don't have an account?
            <RouterLink :to="AppRoutes.REGISTER.path">Sign Up</RouterLink>
        </div>
        <HorizontalRule />
        <GoogleBtn />
    </form>
    <Spinner v-show="isLoading"/>
</template>

<style scoped lang="scss">
    @import "./Login.scss";
</style>