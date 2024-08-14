import { loginUser } from "@/utils/userActions"
import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";


export default function Login() {
    return (
        <div className="h-[90vh] flex items-center justify-center">
            <div className="relative">
                <div className="bg-slate-700 rounded-lg min-w-72 w-[27vw]  px-5 pt-10 pb-20">
                    <p className="text-center font-sfpro font-bold text-xl mb-[10%]">Sign into your account</p>

                    <form action={loginUser} id="login-form" className="flex flex-col gap-6">

                        <div>
                            <Label htmlFor="username" value="Username" className="text-white font-sfpro font-bold  " />
                            <TextInput className="font-sfpro" color="dark" placeholder="Username" id="username" name="username" type="text" />
                        </div>
                        <div>
                            <Label htmlFor="password" value="Password" className="text-white font-sfpro font-bold  " />
                            <TextInput className="font-sfpro" color="dark" placeholder="Password" id="password" name="password" type="password" />
                        </div>
                        <Button color="regularTheme" className="mt-[5%]" type="submit">Sign In</Button>
                    </form>
                </div>
                    <p className="font-sfpro tracking-wide absolute bottom-10 text-sm text-center w-full">Don‘t have an Account? <Link className=" text-blue-500 hover:text-blue-400 active:text-blue-500 underline" href={"/register"}>Create an Account</Link></p>
            </div>

        </div>

    )
}