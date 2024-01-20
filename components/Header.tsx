"use client"

import React, { useEffect, useState } from "react"
import ethers from "ethers"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"
import * as dotenv from "dotenv"
import { dot } from "node:test/reporters"
import { useBalance } from "@/context/BalanceContext"
dotenv.config()

// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

const Header: React.FC = () => {
    // const { address, chainId, isConnected } = useWeb3ModalAccount()

    // const [walletBalance, setWalletBalance] = useState("0")

    // useEffect(() => {
    //     const fetchBalance = async () => {
    //         const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${ETHERSCAN_API_KEY}`

    //         try {
    //             const response = await fetch(url)
    //             const data = await response.json()
    //             const balanceInWei = data.result
    //             const balanceInEther = ethers.formatEther(balanceInWei)
    //             setWalletBalance(balanceInEther)
    //         } catch (error) {
    //             console.error("Error fetching balance:", error)
    //         }
    //     }

    //     fetchBalance()
    // }, [])

    return (
        <nav className="bg-violet-900 bg-opacity-30">
            <div className="flex flex-cols-2 justify-end">
                <div className="py-2 px-2">
                    <w3m-button size="md" />
                </div>
                <div className="py-2 px-2">
                    <w3m-network-button />
                </div>
            </div>
        </nav>
    )
}
export default Header
