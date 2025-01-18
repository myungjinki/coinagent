interface Window {
	ethereum?: {
		request: (request: { method: string }) => Promise<string[]>;
		on: (event: string, callback: (accounts: string[]) => void) => void;
		removeListener: (event: string, callback: () => void) => void;
		isMetaMask?: boolean;
	};
}
