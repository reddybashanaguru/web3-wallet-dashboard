import WalletConnectButton from './components/WalletConnectButton';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Web3 Wallet App</h1>
      <WalletConnectButton />
    </main>
  );
}
