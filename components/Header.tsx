"use client"

import React, { useEffect, useState } from "react"

const Header: React.FC = () => {
    return (
        <nav>
            <div className="flex flex-cols-2 justify-end">
                <div className="py-2 px-2">
                    <w3m-button size="md" />
                </div>
                <div className="py-2 px-2">
                    <w3m-network-button />
                </div>
            </div>
        </nav>
    )
}
export default Header
