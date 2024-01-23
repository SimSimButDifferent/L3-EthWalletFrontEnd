"use client"

import React from "react"

const Header: React.FC = () => {
    return (
        <nav>
            <div className="flex flex-cols-2 justify-end">
                <div className="p-2">
                    <w3m-button size="md" />
                </div>
                <div className="p-2">
                    <w3m-network-button />
                </div>
            </div>
        </nav>
    )
}
export default Header
