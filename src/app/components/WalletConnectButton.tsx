'use client';

import { useWallet } from '../hooks/useWallet';

const WalletConnectButton = () => {
  const { connectWallet, disconnectWallet, account, isConnected } = useWallet();

  return (
    <div className="p-6 flex items-center gap-4">
      {isConnected ? (
        <>
          <div className="font-mono text-green-400">{account?.slice(0, 6)}...{account?.slice(-4)}</div>
          <button
            onClick={disconnectWallet}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnectButton;
