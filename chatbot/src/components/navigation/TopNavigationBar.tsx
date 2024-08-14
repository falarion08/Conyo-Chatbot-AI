import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink } from "flowbite-react";
import { Button } from "flowbite-react";

export default function TopNavigationBar(props: any) {
    return (
        <Navbar fluid rounded className="bg-transparent ">
            <NavbarBrand>
                <span className="self-center font-sfpro text-2xl font-bold tracking-wider">ROBCHAT AI</span>
            </NavbarBrand>

            <div className="font-poppins text-sm  flex flex-row items-center">
                <Link href={"login"} className="font-poppins font-semibold tracking-wide mr-4 hover:underline">Sign In</Link>
                <Button as={Link} href={"register"} className="font-poppins font-semibold text-sm bg-[#087830] tracking-wide hover:bg-green-500 active:bg-[#087830]">Register</Button>
            </div>

        </Navbar>
    )
}