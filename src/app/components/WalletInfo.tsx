'use client';

import { useEffect, useState } from "react";
import { useWallet } from "../hooks/useWallet";
import { formatEther } from "ethers";

const WalletInfo = () => {
    const { account, provider, isConnected } = useWallet();
    const [balance, setBalance] = useState<string | null>(null);

    const fetchBalance = async () => {
        if (provider && account) {
            try {
            const balance = await provider.getBalance(account);
            setBalance(formatEther(balance));
            } catch (error) {
            console.error("Error fetching balance:", error);
            }
        }
        };
    
    useEffect(() => {
        fetchBalance();
        const interval = setInterval(()=>{
            fetchBalance();
        },10000)
    }, [provider, account]);
    
    if(!isConnected || !account) return null;

    return (
        <div className="p-4 border border-gray-700 rounded-lg mt-4 text-center bg-gray-800">
        {isConnected ? (
           <>
                <div className="text-sm text-gray-400">Connected Wallet:</div>
                <div className="text-md font-mono mb-2 text-green-400">
                    {account.slice(0, 6)}...{account.slice(-4)}
                </div>
                <div className="text-sm text-gray-400">ETH Balance:</div>
                <div className="text-lg text-yellow-400">{balance ? `${balance} ETH` : 'Loading...'}</div>
           </>
        ) : (
            <div className="font-mono text-red-400">Wallet not connected</div>
        )}
        </div>
    );
}

export default WalletInfo;
// This component displays the connected wallet address and its ETH balance.
// It uses the useWallet hook to get the wallet context and fetches the balance using ethers.js.
// The balance is updated every 10 seconds using setInterval.
// The component is styled with Tailwind CSS classes for a modern look.
// The balance is formatted to show only 4 decimal places using the formatEther function from ethers.js.
// The component is conditionally rendered based on the connection status of the wallet.