import { currentDate } from "@/constants/currentDate";
import { provider } from "@/constants/provider";
import { auth, db } from "@/firebase/config";
import { AppRoutes } from "@/router/AppRoutes";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import type { Router } from "vue-router";

export const googleSignIn = async (router: Router): Promise<void> => {
    try {
        const userCredential = await signInWithPopup(auth, provider);

        const fullName = userCredential.user.displayName!.split(" ");
        const email = userCredential.user.email!;
        const username = email.split("@")[0];
        const firstName = fullName[0];
        const lastName = fullName[1];
        const userId = userCredential.user.uid;

        const token = await userCredential.user.getIdToken();

        setDoc(doc(db, "users", userId), {
            userId,
            firstName,
            lastName,
            username,
            email,
            sinceMember: currentDate,
            token
        });

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        router.push(AppRoutes.HOME.path);

    } catch (error) {
        console.log(error);
    }
};