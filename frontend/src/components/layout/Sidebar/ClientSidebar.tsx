"use client";

import { useSidebar } from "@/providers/SidebarProvider";

import Sidebar from "./Sidebar";

const ClientSidebar = () => {
	const { isOpen, toggleSidebar } = useSidebar();

	return <Sidebar isOpen={isOpen} onClose={toggleSidebar} />;
};

export default ClientSidebar;
