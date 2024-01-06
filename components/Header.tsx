import React from "react"

const Header: React.FC = () => {
    return (
        <nav className="bg-violet-900 bg-opacity-30">
            <div className="flex flex-cols-2 justify-end">
                <div className="py-2 px-2">
                    <w3m-button size="md"/>
                </div>
                <div className="py-2 px-2">
                    <w3m-network-button />
                </div>
            </div>
        </nav>
    )
}
export default Header
