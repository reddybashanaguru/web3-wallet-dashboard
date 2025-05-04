'use client';

import { useEffect, useState } from "react";
import { getDaiContract } from "@/lib/getContract";
import { formatUnits } from "ethers";


const ContractReader = () => {
    const [supply, setSupply] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    
    useEffect(()=>{
        const fetchData = async () => {
            const contract = await getDaiContract();
            try {
                const totalSupply = await contract.totalSupply();
                const tokenName = await contract.name();
                setSupply(formatUnits(totalSupply, 18));
                setName(tokenName);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    },[]);

    return (
        <div className="bg-gray-900 p-4 rounded-lg mt-4">
          <h3 className="text-lg font-bold mb-2">DAI Token Info (Read On-Chain)</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Total Supply:</strong> {supply} DAI</p>
        </div>
      );

}   

export default ContractReader;
// This component fetches and displays the name and total supply of the DAI token contract.
// It uses the ethers.js library to interact with the Ethereum blockchain.
// The component is styled with Tailwind CSS classes for a modern look.
// The total supply is formatted to show 18 decimal places using the formatUnits function from ethers.js.
// The component is conditionally rendered based on the connection status of the wallet.