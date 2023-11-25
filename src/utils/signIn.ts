import { AppRoutes } from '@/router/AppRoutes';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/firebase/config';
import { DocumentSnapshot, doc, getDoc } from 'firebase/firestore';
import { type Router } from 'vue-router';

export const signIn = async (router: Router, email: string, password: string): Promise<boolean> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user: DocumentSnapshot = await getDoc(doc(db, "users", userCredential.user.uid));

        localStorage.setItem("token", user.data()!.token);
        localStorage.setItem("userId", userCredential.user.uid);

        router.push(AppRoutes.HOME.path);

        return true;

    } catch (error) {
        return false;
    }
};