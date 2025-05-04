'use client';

import { useWallet } from '../hooks/useWallet';
import { useState } from 'react';
import { TypedDataDomain, TypedDataField } from 'ethers';


const domain: TypedDataDomain = {
    name: 'TypedDataSigner',  
    version: '1',
    chainId: 1, // Mainnet
    verifyingContract: '0x1234567890abcdef1234567890abcdef12345678', // Replace with your contract address
};

const types: Record<string, TypedDataField[]> = {
    Person:[
     {name: 'wallet', type: 'address'},
     {name: 'purpose', type: 'string'},
    ],
};


const value = {
    wallet: '0x1234567890abcdef1234567890abcdef12345678', // Replace with your wallet address
    purpose: 'Login to Dapp and Prove ownership of this wallet',
};

const TypedDatasigner = () => {
    const { signer, account, isConnected } = useWallet();
    const [signature, setSignature] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);

    const handleSignTypedData = async () => {
        if (!signer || !account) {
            alert("Please connect your wallet");
            return;
        }
        try {
            setStatus('Signing structured data...');
            const sig = await signer.signTypedData(domain, types, value);
            setSignature(sig);
            setStatus('Message signed successfully!');
        } catch (error: any) {
            console.error("Error signing message:", error);
            setStatus("Error signing message");
        }
    };

    if(!isConnected) return null;
    return (
        <div className="bg-gray-800 p-4 rounded-lg mt-4">
      <h3 className="text-lg font-bold mb-2">Sign Typed Data (EIP-712)</h3>
      <button
        onClick={handleSignTypedData}
        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white"
      >
        Sign Typed Message
      </button>
      <div className="mt-2 text-sm text-gray-400">{status}</div>
      {signature && (
        <div className="mt-2 text-sm break-all text-yellow-400">
          Signature: {signature}
        </div>
      )}
    </div>
    )
}

export default TypedDatasigner;
// This component allows the user to sign a typed message using their wallet EIP-712.
// It uses the ethers.js library to create a structured data signature.
// The component defines a domain and types for the structured data, and then uses the signTypedData method to sign it.
// The signature is displayed to the user after signing.