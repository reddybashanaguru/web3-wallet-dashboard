## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/reddybashanaguru/web3-wallet-dashboard.git
cd web3-wallet-dashboard
npm install
npm run dev

# 🌐 Web3 Frontend DApp – Next.js + TypeScript + Ethers.js

This is a full-stack Web3 decentralized application (DApp) frontend built with modern tools like **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Ethers.js**, interacting with Ethereum-compatible blockchains and supporting wallet connections via MetaMask and WalletConnect.

---

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Blockchain SDK**: Ethers.js
- **Wallet Integration**: wagmi + viem (MetaMask, WalletConnect)
- **Styling**: Tailwind CSS
- **State & UX**: Custom React Context + Hooks

---

## 📌 Features Implemented

### ✅ Wallet Connection
- Connect/disconnect MetaMask and WalletConnect using wagmi client.
- Show connected wallet address and ENS (if available).
- Display balance of connected wallet.
  
### ✅ Ethers.js Integration
- Created custom provider and signer using Ethers.js.
- Read from smart contracts (e.g., `name`, `symbol`, etc.).
- Send signed transactions like `transfer`.

### ✅ Smart Contract Interaction
- Interacted with sample ERC-20 smart contract deployed on Sepolia.
- Used Ethers.js `Contract` object to read and write on-chain data.
- Read values like `totalSupply`, `symbol`, and `balanceOf`.

### ✅ Real-Time Wallet Events
- Listened to:
  - `accountsChanged`
  - `chainChanged`
- Automatically refreshed frontend UI and context on event updates.

### ✅ Custom React Hooks
- Created reusable `useWallet` and `useContract` hooks.
- Hook-based architecture separates logic cleanly.

### ✅ Responsive UI with Tailwind CSS
- Simple and mobile-friendly layout.
- Wallet connection, account data, and contract interaction buttons styled with Tailwind.

---
🔐 Smart Contract Info (Demo)
Using a simple ERC-20 smart contract:

function name() public view returns (string)
function symbol() public view returns (string)
function totalSupply() public view returns (uint256)
function balanceOf(address account) public view returns (uint256)
function transfer(address recipient, uint256 amount) public returns (bool)

🌍 Live Wallet Interactions
Sign transactions using the Ethers.js Signer.
Send transfer calls from connected wallet.
Reflect wallet changes in the UI.

📄 Future Enhancements
🔐 SIWE (Sign-In with Ethereum) for user sessions
📸 NFT Minting + Display
⚡ Gasless Transactions with Biconomy
🔁 Transaction history log and UI
📚 GraphQL indexer integration

🙌 Author
Naguru Reddy Basha
Senior Frontend Engineer | 10 YOE
Expertise: React, TypeScript, Web3, Next.js, Ethers.js
reddybasha524@gmail.com