"use client";

import { QueryProvider } from "./QueryProvider";
import { RecoilProvider } from "./RecoilProvider";
import { SidebarProvider } from "./SidebarProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ToastMessageProvider } from "./ToastMessageProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<RecoilProvider>
			<QueryProvider>
				<ThemeProvider>
					<ToastMessageProvider>
						<SidebarProvider>{children}</SidebarProvider>
					</ToastMessageProvider>
				</ThemeProvider>
			</QueryProvider>
		</RecoilProvider>
	);
}
