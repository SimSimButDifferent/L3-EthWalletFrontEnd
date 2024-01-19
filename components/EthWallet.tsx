"use client"

import { ethers, Contract, BrowserProvider } from "ethers"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"
import { contractAddresses, abi } from "../context"
import React, { useState } from "react"
import * as dotenv from "dotenv"
dotenv.config()

// const contractAddress = "0x0597071313ae58624FFbbDAB8643aD96E27eD3bc"
// const contractAddressLocal = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

export default function EthWallet() {
    const { address, chainId, isConnected } = useWeb3ModalAccount()

    const contractAddressLocal =
        chainId in contractAddresses ? contractAddresses[chainId][0] : null

    const [depositAmount, setDepositAmount] = useState("")
    const [withdrawAmount, setWithdrawAmount] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [userBalance, setUserBalance] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function deposit(value: any) {
        if (!isConnected) throw Error("User Disconnected")
        const provider = new BrowserProvider(window.ethereum)

        const getSigner = provider.getSigner()
        const signer = await getSigner
        const ethWallet = new Contract(contractAddressLocal, abi, signer)
        const tx = await ethWallet.deposit({ value: ethers.parseEther(value) })
        const receipt = await tx.wait()

        console.log(`${value.toString()} ETH Deposited!`)
        return receipt
    }

    async function withdraw(value: any) {
        if (!isConnected) throw Error("User Disconnected")
        const provider = new BrowserProvider(window.ethereum)

        const getSigner = provider.getSigner()
        const signer = await getSigner
        const ethWallet = new Contract(contractAddressLocal, abi, signer)
        const tx = await ethWallet.withdraw(ethers.parseEther(value))
        const receipt = await tx.wait()

        console.log(`${value.toString()} ETH Withdrawn!`)
        return receipt
    }

    async function getUserBalance() {
        const provider = new BrowserProvider(window.ethereum)

        const getSigner = provider.getSigner()
        const signer = await getSigner
        const ethWallet = new Contract(contractAddressLocal, abi, signer)
        console.log(signer)

        const balance = await ethWallet.getUserBalance()
        console.log(balance)

        setUserBalance(ethers.formatEther(balance)) // Format the balance for display
    }

    const handleDepositSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            await deposit(depositAmount)

            setSuccessMessage(`Successfully deposited ${depositAmount} ETH!`)
            setDepositAmount("") // Optional: Reset input field after successful deposit
            setTimeout(() => setSuccessMessage(""), 10000)
        } catch (error) {
            console.error("Error during deposit: ", error)
            setSuccessMessage("User Disconnected!")
        }
        setIsLoading(false)
    }

    const handleWithdrawSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            await withdraw(withdrawAmount)

            setSuccessMessage(`Successfully withdrawn ${withdrawAmount} ETH!`)
            setWithdrawAmount("") // Optional: Reset input field after successful deposit
            setTimeout(() => setSuccessMessage(""), 10000)
        } catch (error) {
            console.error("Error during withdraw: ", error)
            setSuccessMessage("User Disconnected!")
        }
        setIsLoading(false)
    }

    const handleGetUserBalance = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            await getUserBalance()

            setSuccessMessage(`User Balance: ${userBalance} ETH!`)
            setDepositAmount("") // Optional: Reset input field after successful deposit
            setTimeout(() => setSuccessMessage(""), 10000)
        } catch (error) {
            console.error("User does not exist!", error)
            setSuccessMessage("User does not exist!")
        }
        setIsLoading(false)
    }

    return (
        <div>
            <form onSubmit={handleDepositSubmit}>
                <div className="flex flex-col p-4">
                    <input
                        type="text"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        className="text-black text-xl text-align-center py-2"
                        placeholder="Deposit amount..."
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`px-4 pb-1 ${
                            isLoading
                                ? "bg-violet-600"
                                : "bg-sky-500 hover:bg-sky-400"
                        } text-white rounded-lg`}
                    >
                        Deposit
                    </button>
                </div>
            </form>
            <form onSubmit={handleWithdrawSubmit}>
                <div className="flex flex-col p-4">
                    <input
                        type="text"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        className="text-black text-xl text-align-center py-2"
                        placeholder="Withdraw amount..."
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`px-4 pb-1 ${
                            isLoading
                                ? "bg-violet-600"
                                : "bg-sky-500 hover:bg-sky-400"
                        } text-white rounded-lg`}
                    >
                        Withdraw
                    </button>
                </div>
            </form>
            <div className="flex flex-col justify-center">
                <button
                    onClick={handleGetUserBalance}
                    className="flex justify-center px-4 py-2 text-2xl bg-sky-500 hover:bg-sky-400 text-white rounded-lg"
                >
                    Get user balance
                </button>
            </div>
            {successMessage && (
                <div className="flex justify-center px-4 py-2 text-2xl bg-violet-500 rounded-lg animate-fadeOut">
                    {successMessage}
                </div>
            )}
        </div>
    )
}
