'use server';
import { firestore } from "../../../dbconfig";
import { RegistrationFormSchema } from "@/utils/definitions";
import { RegisterError } from "@/utils/types";
import { collection, addDoc, where, query, onSnapshot, DocumentData, getDocs } from "@firebase/firestore"


export async function validate(formData: FormData) {
    // Validate fields
    const validationResult = RegistrationFormSchema.safeParse({
        firstName: formData.get("first-name"),
        lastName: formData.get("last-name"),
        email: formData.get("email"),
        password: formData.get('password'),
        confirmPassword: formData.get("repeat-password")
    });
    if (!validationResult.success) {
        return { errors: validationResult.error.flatten().fieldErrors }
    } else {
        const q = query(
            collection(firestore, "Users"),
            where("email", "==", validationResult.data.email)
        );

        let users = await getDocs(q);
        if (!users.empty) {
            let error: RegisterError = { email: ["Email Address Already Registered"] };
            return{errors:error};
        }
        else{
            await addDoc(collection(firestore,"Users"),validationResult.data);         
        }
    }

}

