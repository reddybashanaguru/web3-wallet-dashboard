import ContractReader from './components/ContractReader';
import MessageSigner from './components/MessageSigner';
import SendTransactionForm from './components/SendTransactionForm';
import TypedDatasigner from './components/TypedDatasigner';
import WalletConnectButton from './components/WalletConnectButton';
import WalletInfo from './components/WalletInfo';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Web3 Wallet App</h1>
      <WalletConnectButton />
      <WalletInfo/>
      <SendTransactionForm/>
      <MessageSigner/>
      <TypedDatasigner/>
      <ContractReader/>
    </main>
  );
}
