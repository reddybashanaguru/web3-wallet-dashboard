'use client';

import { useState } from "react";
import { useWallet } from "../hooks/useWallet";
import { parseEther } from 'ethers';

const SendTransactionForm = () => {
    const { signer, isConnected } = useWallet();
    const [toAddress, setToAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("");

    const sendTransaction = async()=>{
        if(!signer){
            alert("Please connect your wallet");
            return;
        }
        if(!toAddress || !amount) {
            setStatus("Please fill all fields");
            return;
        }
        try {
            setStatus('Sending transaction...');
            const tx = await signer.sendTransaction({
                to: toAddress,
                value: parseEther(amount)
            });
            await tx.wait();
            setStatus(`Transaction sent! Hash: ${tx.hash}`);
            setTimeout(() => {
                setStatus('Transaction Successful ✅');
            }, 2000);
        } catch (error: any) {
            console.error("Error sending transaction:", error);
            setStatus("Error sending transaction");
        }
    }
 if(!isConnected) return null;
    return(
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-lg mb-2 font-semibold">Send ETH</h2>
        <input
          type="text"
          placeholder="Recipient Address"
          className="w-full mb-2 px-3 py-2 rounded bg-gray-700 text-white"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount in ETH"
          className="w-full mb-2 px-3 py-2 rounded bg-gray-700 text-white"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={sendTransaction}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Send Transaction
        </button>
        {status && <p className="mt-2 text-sm text-gray-300">{status}</p>}
      </div>
    );
};

export default SendTransactionForm;
// This component allows users to send ETH to a specified address.
// It uses the useWallet hook to access the signer and check if the wallet is connected.
// The user can input the recipient address and the amount of ETH to send.
// Upon clicking the "Send Transaction" button, it triggers the sendTransaction function.
// The function checks if the signer is available, validates the input fields, and sends the transaction using ethers.js.