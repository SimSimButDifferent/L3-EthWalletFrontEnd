"use client"

import { ReactNode, useState } from "react"
import { Web3ModalProvider } from "@/context/Web3Modal"
import { BalanceProvider } from "@/context/BalanceContext"
import Header from "@/components/Header"
import EthWallet from "@/components/EthWallet"
import { Poppins } from "next/font/google"
import "./globals.css"

const inter = Poppins({
    weight: ["200", "300", "400", "500", "600"],
    subsets: ["latin"],
})

export default function RootLayout({ children }: { children: ReactNode }) {
    const [balance, setBalance] = useState("")

    return (
        <html lang="en">
            <body className="flex flex-col justify-between bg-[url(../public/Space-Background.jpg)]">
                <Web3ModalProvider>
                    <Header />
                    <EthWallet />
                    {children}
                </Web3ModalProvider>
            </body>
        </html>
    )
}
