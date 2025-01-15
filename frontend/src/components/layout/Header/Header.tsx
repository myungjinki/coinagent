import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import Logo from "./Logo";

const Header = () => {
	return (
		<header className="max-w-[120rem] w-full mx-auto h-24 flex justify-between items-center border-b border-gray-400">
			<div className="border-r border-gray-400 h-full flex items-center">
				<Logo />
			</div>
			<div className="flex justify-start w-full pl-16 gap-16">
				<Link href={"/chatbot"} className="text-link-xs lg:text-link text-gray-50 cursor-pointer">
					<div>AI Web3 Chatbot</div>
				</Link>
				<Link href={"/about"} className="text-link-xs lg:text-link text-gray-50 cursor-pointer">
					<div>About</div>
				</Link>
			</div>
			<div className="flex h-full w-24 items-center justify-center">
				<Link href="/login" className="h-6 w-6 text-link-xs lg:text-link text-gray-50">
					<UserIcon />
				</Link>
			</div>
		</header>
	);
};

export default Header;
