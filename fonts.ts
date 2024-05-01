import { Poppins, Montserrat, Playfair_Display } from "next/font/google"

export const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ['latin'],
    variable: '--font-poppins',
})
export const montserrat = Montserrat({
    weight: ["400", "600", "700"],
    subsets: ['latin'],
    variable: '--font-poppins',
})
export const playFairDisplay = Playfair_Display({
    weight: ["400", "600", "700"],
    subsets: ['latin'],
    variable: '--font-playfair-display',
})