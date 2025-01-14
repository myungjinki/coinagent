"use client";

import { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";

import { type ToastMessageProps, type ToastMessageContextType } from "@/types/toastMessage";

const ToastMessageContext = createContext<ToastMessageContextType | null>(null);

export function ToastMessageProvider({ children }: { children: React.ReactNode }) {
	const [toastMessages, setToastMessages] = useState<ToastMessageProps[]>([]);
	const timeoutIds = useRef(new Set<NodeJS.Timeout>());

	useEffect(() => {
		const currentTimeoutIds = timeoutIds.current;
		return () => {
			currentTimeoutIds.forEach(id => clearTimeout(id));
		};
	}, []);

	const removeToastMessage = useCallback((id: string) => {
		setToastMessages(prev => prev.filter(toastMessage => toastMessage.id !== id));
	}, []);

	const showToastMessage = useCallback(
		({ message, type }: { message: string; type: ToastMessageProps["type"] }) => {
			const id = Math.random().toString(36).substring(7);

			if (toastMessages.some(toastMessage => toastMessage.message === message)) {
				return;
			}

			setToastMessages(prev => [...prev, { id, message, type }]);

			const timeoutId = setTimeout(() => {
				removeToastMessage(id);
				timeoutIds.current.delete(timeoutId);
			}, 3000);

			timeoutIds.current.add(timeoutId);
		},
		[toastMessages, removeToastMessage]
	);

	return (
		<ToastMessageContext.Provider value={{ toastMessages, showToastMessage, removeToastMessage }}>
			{children}
		</ToastMessageContext.Provider>
	);
}

export const useToastMessageContext = () => {
	const context = useContext(ToastMessageContext);
	if (!context) {
		throw new Error("useToastMessageContext must be used within ToastMessageProvider");
	}
	return context;
};
