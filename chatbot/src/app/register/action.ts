'use server';
import { firestore } from "../../../dbconfig";
import { RegistrationFormSchema } from "@/utils/definitions";
import { RegisterError, User } from "@/utils/types";
import { collection, addDoc, where, query, onSnapshot, DocumentData, getDocs, doc, setDoc, updateDoc } from "@firebase/firestore"
import bycrpt from "bcrypt"
import { v4 as uuidv4 } from "uuid"

interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export async function validate(formData: FormData) {
    const users: DocumentData[] = [];
    // Validate fields
    const validationResult = RegistrationFormSchema.safeParse({
        firstName: formData.get("first-name"),
        lastName: formData.get("last-name"),
        email: formData.get("email"),
        password: formData.get('password'),
        confirmPassword: formData.get("repeat-password")
    });
    if (!validationResult.success) {
        // Returns error message obtained from zod
        return { errors: validationResult.error.flatten().fieldErrors }
    } else {
        const q = query(
            collection(firestore, "Users"),
            where("email", "==", validationResult.data.email)
        );

        let usersSnapshot = await getDocs(q);
        usersSnapshot.forEach((user) => {
            users.push(user.data());
        })
        // Create a new unverified user when they are not found in the database
        if (users.length === 0) {
            const newUserRef = doc(collection(firestore, "Users"));
            const newUser = await createNewUser(validationResult.data,newUserRef.id);
            await setDoc(newUserRef, newUser);
        } else {
            // Returns a warning that the user already is verified when trying to register the same email address.
            if (users[0].isVerified) {
                let error: RegisterError = { email: ["Email Address Already Registered"] };
                return { errors: error };
            }
            else {

                const userRef = doc(firestore,"Users",users[0].id);
                const saltRounds = 13;

                // Update verification token and token expiration when attempting to register again as an unverified user
                await updateDoc(userRef,{
                    verifyToken: await bycrpt.hash(uuidv4(), saltRounds),
                    verifyTokenExpire: Date.now() + (1000 * 60 * 10)// 10 minutes
                })
            }
        }
    }

}

async function createNewUser(userData: RegisterData, userID:string) {

    const saltRounds = 13;
    const newUser: User = {
        id:userID,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: await bycrpt.hash(userData.password, saltRounds),
        isVerified: false,
        verifyToken: await bycrpt.hash(uuidv4(), saltRounds),
        verifyTokenExpire: Date.now() + (1000 * 60 * 10)// 10 minutes
    }

    return newUser;

}

