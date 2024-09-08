"use client";
import { Toast } from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";
import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";


export default function EmailSentToast() {
    return (
        <Toast className="absolute left-[40%]">
            <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <div className="pl-4 text-sm font-sfpro text-black">Verification email sent successfully.</div>
        </Toast>
    )
}