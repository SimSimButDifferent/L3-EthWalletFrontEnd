"use client"

import React, { createContext, useState, useContext } from "react"
import { ethers, Contract, BrowserProvider } from "ethers"
import { contractAddresses, abi } from "../context"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"

const BalanceContext = createContext()

export const useBalance = () => useContext(BalanceContext)

export const BalanceProvider = ({ children }) => {
    const [balance, setBalance] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const { chainId } = useWeb3ModalAccount()

    const updateBalance = async () => {
        try {
            const provider = new BrowserProvider(window.ethereum)
            const contractAddress =
                chainId in contractAddresses
                    ? contractAddresses[chainId][0]
                    : null

            const getSigner = provider.getSigner()
            const signer = await getSigner
            const ethWallet = new Contract(contractAddress, abi, signer)
            console.log(signer)

            const balance = await ethWallet.getUserBalance()

            setBalance(balance)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching balance:", error)
        }
    }

    return (
        <BalanceContext.Provider value={{ balance, updateBalance, isLoading }}>
            {children}
        </BalanceContext.Provider>
    )
}
