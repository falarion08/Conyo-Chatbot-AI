import localFont from 'next/font/local'
import { Poppins } from "next/font/google"

export const sf_pro = localFont({
    src: [
        {
            path: "../../public/fonts/SFPRODISPLAYREGULAR.otf",
            weight: "400",
        },
        {
            path: "../../public/fonts/SFPRODISPLAYBOLD.otf",
            weight:"700"
        }
    ],
    variable: "--font-sfpro"
});

export const poppins = Poppins({ 
    subsets: ["latin"],
    weight: ["400","700"],
    variable: "--font-poppins" 
});