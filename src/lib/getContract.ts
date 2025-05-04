import { getProvider } from "./getProvider";
import { ethers } from 'ethers';
import daiABI from '../app/contracts/daiABI.json';


const daiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // Mainnet DAI address

export async function getDaiContract() {
    const provider = getProvider();
    return new ethers.Contract(daiAddress, daiABI, provider);
}
// This function returns a contract instance of the DAI token on the Ethereum mainnet.
// It uses the ethers.js library to create a contract instance with the DAI ABI and address.
// The contract instance can be used to interact with the DAI token smart contract.
// The getProvider function is used to get the provider instance, which is either a browser provider (if MetaMask is installed) or a fallback Infura provider.
// The DAI token address is hardcoded to the mainnet address.