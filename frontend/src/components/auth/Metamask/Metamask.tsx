"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import { Web3 } from "web3";

import BaseButton from "@/components/common/Button/BaseButton";

export default function Metamask() {
	const [web3, setWeb3] = useState<Web3 | null>(null);
	const [account, setAccount] = useState<string | null>(null);

	const connectMetaMask = async () => {
		if (typeof window.ethereum !== "undefined") {
			try {
				const accounts = await window.ethereum.request({
					method: "eth_requestAccounts",
				});

				const web3Instance = new Web3(window.ethereum);
				setWeb3(web3Instance);
				setAccount(accounts[0]);
			} catch (error) {
				console.error("Failed to connect MetaMask", error);
			}
		} else {
			alert("Please install MetaMask.");
		}
	};

	// Get account on page load
	web3?.eth.getAccounts().then(accounts => {
		setAccount(accounts[0] || null);
	});

	// Account change detection event listener
	useEffect(() => {
		if (window.ethereum) {
			window.ethereum.on("accountsChanged", (accounts: string[]) => {
				setAccount(accounts[0] || null);
			});
		}
		return () => {
			if (window.ethereum) {
				window.ethereum.removeListener("accountsChanged", () => {});
			}
		};
	}, []);

	return (
		<div>
			{!account ? (
				<BaseButton
					leftIcon={<Image src="icons/metamask.svg" width={36} height={36} alt="metamask" />}
					onClick={connectMetaMask}
				>
					Sign in with Metamask
				</BaseButton>
			) : (
				<BaseButton>Connected account: {account}</BaseButton>
			)}
		</div>
	);
}
