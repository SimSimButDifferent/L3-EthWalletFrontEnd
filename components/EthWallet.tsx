'use client'

import { ethers, Contract, BrowserProvider} from "ethers";
import abi from "../context/abi.json";
import React, {useState} from "react";
import * as dotenv from 'dotenv';
dotenv.config();

const contractAddress = '0x0597071313ae58624FFbbDAB8643aD96E27eD3bc';
const contractAddressLocal = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export default function EthWallet(){

    const [depositAmount, setDepositAmount] = useState('')

    async function deposit(value: any) {
      
      const provider = new BrowserProvider(window.ethereum)
      
      const getSigner = provider.getSigner()
      const signer = await getSigner
      const ethWallet = new Contract(contractAddress, abi, signer)
      const tx = await ethWallet.deposit({value: ethers.parseEther(value)})
      tx.wait()

      console.log(`${value.toString()} ETH Deposited!`)
    }

    const handleDepositSubmit = async (event) => {
      event.preventDefault();
      try {
        await deposit(depositAmount);
        // Optionally, you can add code here to handle a successful deposit,
        // such as displaying a success message.
      } catch (error) {
        // Here, you can handle errors that may occur during the deposit process.
        // This could include displaying an error message to the user.
        console.error("Error during deposit: ", error);
      }
    };

    return (
      <form onSubmit={handleDepositSubmit}>
        <div className="flex flex-col p-10">
          <input
            type="text"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            className="text-black text-xl text-align-center py-2"
            placeholder="Deposit amount..."
          />
          <button type="submit" className="px-4 pb-1 bg-sky-500 text-white rounded-lg hover:bg-sky-400">
            Deposit
          </button>
        </div>
      </form>
    ) 
}
