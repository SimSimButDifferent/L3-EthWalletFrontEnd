"use client"

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react"

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "cf80e8dfdf111fd756361f3117399405"

// 2. Set chains
const mainnet = {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
}

const sepolia = {
    chainId: 11155111,
    name: "Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.etherscan.io",
    rpcUrl: "https://rpc.sepolia.org",

}

const localhost = {
    chainId: 31337,
    name: "Localhost 8545",
    currency: "ETH",
    explorerUrl: "",
    rpcUrl: "http://localhost:8545",
}

// 3. Create modal
const metadata = {
    name: "Eth Wallet",
    description: "Simple Eth Wallet app created by Simeon Campbell",
    url: "https://mywebsite.com",
    icons: ["https://avatars.mywebsite.com/"],
}

createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet, sepolia, localhost],
    projectId,
})

import { ReactNode } from "react"

export function Web3ModalProvider({ children }: { children: ReactNode }) {
    return children
}
