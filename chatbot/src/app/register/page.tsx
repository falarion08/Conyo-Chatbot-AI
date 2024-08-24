"use client";

import { Button, Checkbox, Label, TextInput, Tooltip } from "flowbite-react";
import Link from "next/link";
import { Flowbite } from "flowbite-react";
import customTheme from "@/utils/customTheme";
import { validate } from "./action";
import { useState } from "react";
import { RegisterError } from "@/utils/types";


export default function Page() {

    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState<RegisterError | undefined>();

    async function registerUserForm(formData: FormData) {
        const error = await validate(formData);
        setError(error?.errors);

        if (error !== undefined) {

        } else {
            setError(undefined);
        }
    }

    return (
        <div className="min-h-[90vh] flex justify-center items-center">
            <div className="bg-slate-700 rounded-lg min-w-72 w-[27vw]  px-5 pt-10 pb-10 my-10">
                <h1 className="font-bold font-sfpro text-xl text-center mb-2">Create an Account</h1>

                <form action={registerUserForm} id="register-form" className="flex max-w-md flex-col gap-4">
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <div className="mb-2 block">
                                <Label color={"white"} className="font-sfpro font-bold text-base" htmlFor="first-name" value="First Name" />
                            </div>
                            <TextInput name="first-name" className="font-sfpro" id="first-name" type="text" shadow />
                        </div>
                        <div className="flex-1">
                            <div className="mb-2 block">
                                <Label color={"white"} className="font-sfpro font-bold text-base" htmlFor="last-name" value="Last Name" />
                            </div>
                            <TextInput name="last-name" className="font-sfpro" id="last-name" type="text" shadow />
                        </div>

                    </div>
                    <h1 className="text-xs font-light font-poppins whitespace-pre-wrap  text-red-500">{error?.firstName ? error.firstName : error?.lastName && error.lastName}</h1>

                    <div>
                        <div className="mb-2 block">
                            <Label color={"white"} className="font-sfpro font-bold text-base" htmlFor="email2" value="Your email" />
                            <span className="text-xs font-light font-poppins whitespace-pre-wrap  text-red-500 ml-5">{error?.email}</span>

                        </div>
                        <TextInput name="email" className="font-sfpro" id="email2" type="email" placeholder="name@mail.com" shadow />
                    </div>
                    <div>
                        <div className="mb-2 flex flex-row items-center">
                            <Label color={"white"} className="font-sfpro font-bold text-base" htmlFor="password2" value="Your password" />
                            <Tooltip className=" whitespace-pre-wrap text-xs font-poppins" content={`
Password must be:
- Minimum of 8 characters
- Maximum of 64 characters
- Must contain at least 1 lowercase english character
- Must contain at least 1 uppercase english character
- Must contain at least 1 special character
                            `}>
                                <svg className="w-5 h-5 ml-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </Tooltip>
                        </div>
                        <TextInput name="password" className="font-sfpro" id="password2" type="password" min={"8"} shadow />
                        <span className="text-xs font-light font-poppins whitespace-pre-wrap  text-red-500">{error?.password}</span>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label color={"white"} className="font-sfpro font-bold text-base" htmlFor="repeat-password" value="Repeat password" />
                            <span className="text-xs font-light font-poppins whitespace-pre-wrap  text-red-500 ml-5">{error?.confirm}</span>
                        </div>
                        <TextInput name="repeat-password" className="font-sfpro" id="repeat-password" type="password" min={8} shadow />
                    </div>

                    <Button type="submit" color="regularTheme" className="mt-[5%]">Register new account</Button>
                </form>
            </div>
        </div>
    )
}