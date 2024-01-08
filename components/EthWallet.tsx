import { ethers, Contract, BrowserProvider} from "ethers";
// import { useWeb3ModalProvider, useWeb3ModalAccount } from "@web3modal/ethers/react"
import abi from "../context/abi.json";
import React from "react";
import * as dotenv from 'dotenv';
dotenv.config();



const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL



const contractAddress = '0x0597071313ae58624FFbbDAB8643aD96E27eD3bc';

const EthWallet = () => {
    // const { address, chainId, isConnected } = useWeb3ModalAccount()
    // const { walletProvider } = useWeb3ModalProvider()
    
    async function deposit(value) {
      // if(!isConnected) throw Error("User Disconnected")

      //const provider = new BrowserProvider(walletProvider)
      const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL)
      
      const getSigner = provider.getSigner()
      const signer = await getSigner
      const ethWallet = new Contract(contractAddress, abi, signer)
      const deposit = await ethWallet.deposit({value: value})

      console.log(`${value.toString()} ETH Deposited!`)
    }

    return (
      <div>
        <div className="p-10 rounded-xl"><input className="text-black text-xl text-align-center" placeholder="Deposit amount..."></input></div>
      </div>
    ) 
}
export default EthWallet