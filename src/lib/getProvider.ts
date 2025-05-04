import { ethers } from 'ethers';

export function getProvider(){
    if(typeof window !== 'undefined' && window.ethereum) {
        return new ethers.BrowserProvider(window.ethereum);
    }
    // fallback to Infura Mainnet
  return new ethers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID`
  );
}