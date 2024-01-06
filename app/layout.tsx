import { ReactNode } from "react"
import Header from "@/components/Header"

import { Poppins } from "next/font/google"
import "./globals.css"
import { Web3ModalProvider } from "@/context/Web3Modal"

const inter = Poppins({ weight: ["200", "300", "400"], subsets: ["latin"] })

export const metadata = {
    title: "EthWallet App",
    description:
        "Deposit and hold ETH in this smart contract. This is for testing purposes and had not been audited.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Web3ModalProvider>
                    <Header />
                    {children}
                </Web3ModalProvider>
            </body>
        </html>
    )
}
