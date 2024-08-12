import { loginUser } from "@/utils/userActions"
import { Button, Label, TextInput } from "flowbite-react";
export default function Login(){
    return(
        <div className="h-[90vh] flex items-center justify-center">
            <div>
                <div className="bg-slate-700 rounded-lg w-96 px-5 pt-10 pb-20">
                    <p className="text-center font-sfpro font-bold text-xl mb-[10%]">Sign into your account</p>

                    <form action={loginUser} id="login-form" className="flex flex-col gap-6">
                        
                        <div>
                        <Label htmlFor="username" value="Username" className="text-white font-sfpro font-bold text-lg "/>
                        <TextInput  className="font-sfpro text-base" placeholder="Username" id="username" name="username" type="text"/>
                        </div>
                        <div>
                        <Label htmlFor="password" value="Password" className="text-white font-sfpro font-bold text-lg "/>
                        <TextInput className="font-sfpro text-base" placeholder="Password" id="password" name="password" type="password" />
                        </div>
                        <Button color={"sucess"}>Sign In</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}