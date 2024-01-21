"use client"

import React, { createContext, useState, useContext } from "react"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

const BalanceContext = createContext()
const { address, chainId, isConnected } = useWeb3ModalAccount()

export const useBalance = () => useContext(BalanceContext)

export const BalanceProvider = ({ children }) => {
    const [balance, setBalance] = useState("")

    const updateBalance = async () => {
        const url = `https://api-sepolia.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${ETHERSCAN_API_KEY}`

        try {
            const response = await fetch(url)
            const data = await response.json()
            const balanceInWei = data.result
            const balanceInEther = ethers.formatEther(balanceInWei)
            setBalance(balanceInEther)
        } catch (error) {
            console.error("Error fetching balance:", error)
        }
    }

    return (
        <BalanceContext.Provider value={{ balance, updateBalance }}>
            {children}
        </BalanceContext.Provider>
    )
}
