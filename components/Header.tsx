"use client"

import React from "react"

const Header: React.FC = () => {
    return (
        <nav>
            <div>
                <div className="flex flex-cols-3 justify-end">
                    <div className="p-2">
                        <div className="flex px-2 py-1 font-normal text-lg align-center border-opacity-15 border border-gray-300 rounded-full opacity-90">
                            User Contract Balance: 0 ETH
                        </div>
                    </div>
                    <div className="p-2">
                        <w3m-button size="md" />
                    </div>
                    <div className="p-2">
                        <w3m-network-button />
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header
