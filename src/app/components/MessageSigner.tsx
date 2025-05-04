'use client';

import { useWallet } from '../hooks/useWallet';
import { useState } from 'react';

// This component allows the user to sign a message using their wallet EIP-191.


const MessageSigner = () => {
    const { signer, account, isConnected } = useWallet();
    const [signature, setSignature] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);

    const handleSign = async () => {
        if (!signer || !account) {
            alert("Please connect your wallet");
            return;
        }
        const message = `I am proving the ownership of address: ${account}!`;
        try {
            setStatus('Signing...');
            const sig = await signer.signMessage(message);
            setSignature(sig);
            setStatus('Message signed successfully!');
        } catch (error: any) {
            console.error("Error signing message:", error);
            setStatus("Error signing message");
        }
    };
  
     if(!isConnected) return null;

     return(
            <div className="bg-gray-800 p-4 rounded-lg mt-4">
                <h3 className="text-lg font-bold mb-2">Sign a Message (EIP-191)</h3>
                <button
                    onClick={handleSign}
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
                >
                    Sign Message
                </button>
                <div className="mt-2 text-sm text-gray-400">{status}</div>
                {signature && (
                    <div className="mt-2 text-sm break-all text-yellow-400">
                    Signature: {signature}
                    </div>
                )}
            </div>
     );
};

export default MessageSigner;