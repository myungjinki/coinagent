"use client";

import { RecoilRoot } from "recoil";

import { DebugObserver } from "@/components/DebugObserver";

export function RecoilProvider({ children }: { children: React.ReactNode }) {
	return (
		<RecoilRoot>
			<DebugObserver />
			{children}
		</RecoilRoot>
	);
}
