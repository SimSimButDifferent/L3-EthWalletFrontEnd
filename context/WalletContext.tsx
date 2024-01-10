import React, { useState, useEffect, useCallback } from "react"

const WalletContext = React.createContext({
    isConnected: false,
    account: null,
    balance: "0",
    connectWallet: () => {},
    disconnectWallet: () => {},
    fetchBalance: () => {},
});

export const WalletProvider = ({children}) => {
    const [isConnected, setIsConnected] = useState(false)
}