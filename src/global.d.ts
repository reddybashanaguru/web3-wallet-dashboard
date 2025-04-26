interface EthereumProvider {
    isMetaMask: boolean;
    request?:(...args: any[]) => Promise<any>;
//     on?(eventName: string, callback: (...args: any[]) => void): void;
//     removeListener?(eventName: string, callback: (...args: any[]) => void): void;
//     enable?(): Promise<string[]>;
//     selectedAddress?: string;
//     networkVersion?: string;
//     isConnected?(): boolean;
//     addListener?(eventName: string, callback: (...args: any[]) => void): void;
//     removeAllListeners?(eventName: string): void;
//     send?(method: string, params?: any[]): Promise<any>;
//     sendAsync?(payload: { method: string; params?: any[]; id: number; jsonrpc: string }, callback: (error: Error | null, response: any) => void): void;
//     requestAccounts?(): Promise<string[]>;
}


interface Window{
    ethereum?: any;
}