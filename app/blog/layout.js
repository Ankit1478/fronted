'use client';

import localFont from "next/font/local"

import Footer from "@/components/footer"

import { cn } from "@/lib/utils"

// Font files can be colocated inside of `pages`
const fontMiller = localFont({
    src: "../../assets/fonts/MillerText-Roman.woff2",
    variable: "--font-miller",
  })

export default function Layout({
    children
}) {
    return (
        <div className={cn(
            "overflow-y-auto font-miller",
            fontMiller.variable
        )}>
            {children}
            <Footer />
        </div>
    )
}