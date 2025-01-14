"use client";

import Link from "next/link";

interface SidebarProps {
	isOpen: boolean;
	onClose?: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
	return (
		<>
			{isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />}
			<nav
				className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 ease-in-out z-50 ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="p-4 border-b dark:border-gray-700">
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
						aria-label="close sidebar"
					>
						✕
					</button>
				</div>

				<ul className="p-4">
					<li className="mb-2">
						<Link href="/" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
							홈
						</Link>
					</li>
					<li className="mb-2">
						<Link href="/about" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
							소개
						</Link>
					</li>
					<li className="mb-2">
						<Link href="/services" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
							서비스
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Sidebar;
