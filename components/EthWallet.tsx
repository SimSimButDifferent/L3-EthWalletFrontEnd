"use client"

import { ethers, Contract, BrowserProvider } from "ethers"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"
import { contractAddresses, abi } from "../context"

import React, { useState } from "react"
import * as dotenv from "dotenv"

dotenv.config()

const EthWallet: React.FC = () => {
    const { address, chainId, isConnected } = useWeb3ModalAccount()

    const contractAddress =
        chainId in contractAddresses ? contractAddresses[chainId][0] : null

    const [depositAmount, setDepositAmount] = useState("")
    const [withdrawAmount, setWithdrawAmount] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    async function deposit(value: any) {
        if (!isConnected) throw Error("User Disconnected")
        const provider = new BrowserProvider(window.ethereum)

        const getSigner = provider.getSigner()
        const signer = await getSigner
        const ethWallet = new Contract(contractAddress, abi, signer)
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
        const ethWallet = new Contract(contractAddress, abi, signer)
        const tx = await ethWallet.withdraw(ethers.parseEther(value))
        const receipt = await tx.wait()

        console.log(`${value.toString()} ETH Withdrawn!`)
        return receipt
    }

    async function getUserBalance() {
        const provider = new BrowserProvider(window.ethereum)

        const getSigner = provider.getSigner()
        const signer = await getSigner
        const ethWallet = new Contract(contractAddress, abi, signer)
        console.log(signer)

        const balance = await ethWallet.getUserBalance()

        return balance.toString()
    }

    const handleDepositSubmit = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
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
            const balance = await getUserBalance()

            setSuccessMessage(
                `User Balance: ${ethers.formatEther(balance)} ETH!`,
            )

            setTimeout(() => setSuccessMessage(""), 10000)
        } catch (error) {
            console.error("User does not exist!", error)
            setSuccessMessage("User does not exist!")
        }
        setIsLoading(false)
    }

    return (
        <div className="">
            <form onSubmit={handleDepositSubmit}>
                <div className="p-4">
                    <h1 className="text-6xl text-center rounded-lg border border-transparent px-5 py-4 transition-colors border-neutral-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
                        Eth Wallet App
                    </h1>
                </div>
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
            <div className="flex flex-col justify-center pt-8">
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

export default EthWallet
