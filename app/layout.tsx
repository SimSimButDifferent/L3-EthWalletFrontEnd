import { ReactNode } from "react"
import { Web3ModalProvider } from "@/context/Web3Modal"

import Header from "@/components/Header"
import EthWallet from "@/components/EthWallet"
import { Poppins } from "next/font/google"
import "./globals.css"

const inter = Poppins({
    weight: ["200", "300", "400", "500", "600"],
    subsets: ["latin"],
})

export const metadata = {
    title: "EthWalletApp",
    description: "Simple EthWalletApp by simsimbutdifferent",
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="flex flex-col bg-[url(../public/Space-Background.jpg)] bg-cover bg-fixed">
                <Web3ModalProvider>
                    <Header />
                    <EthWallet />
                    <div className="flex justify-center">{children}</div>
                </Web3ModalProvider>
            </body>
        </html>
    )
}
