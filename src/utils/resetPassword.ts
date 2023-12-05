import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/config";
import { AppRoutes } from "@/router/AppRoutes";
import router from "@/router";

export const resetPassword = async (email: string): Promise<void> => {
    await sendPasswordResetEmail(auth, email);

    router.push(AppRoutes.LOGIN.path);
};