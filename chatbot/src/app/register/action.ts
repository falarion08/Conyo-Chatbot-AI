'use server';
import { firestore } from "../../../dbconfig";
import { RegistrationFormSchema } from "@/utils/definitions";
import { RegisterError } from "@/utils/types";

export async function validate(formData:FormData){
    // Validate fields
    const validationResult = RegistrationFormSchema.safeParse({
        firstName: formData.get("first-name"),
        lastName:formData.get("last-name"), 
        email:formData.get("email"),
        password:formData.get('password'),
        confirmPassword:formData.get("repeat-password")
    }); 
    if (!validationResult.success){

        return {errors:validationResult.error.flatten().fieldErrors}
    }
    
}

