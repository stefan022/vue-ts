import { currentDate } from "@/constants/currentDate";
import { auth, db } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const signUp = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        console.log(userCredential);

        const userId = userCredential.user.uid;
        const token = await userCredential.user.getIdToken();

        await setDoc(doc(db, "users", userId), {
            userId,
            firstName: "",
            lastName: "",
            username,
            email,
            sinceMember: currentDate,
            token
        });

        return true;

    } catch (error) {
        
        return false;
    }
};