import Image from "next/image";
import Link from "next/link";

import HamburgerButton from "./HamburgerButton";
import Logo from "./Logo";

const Header = () => {
	return (
		<header className="max-w-[120rem] w-full mx-auto h-[8rem] flex justify-between items-center p-4">
			<div>
				<Logo />
			</div>
			<div className="flex items-start gap-4">
				<Link href={"/movies"}>
					<div className="py-3 px-4 text-link-xs lg:text-link text-gray-50 cursor-pointer">AI Agent</div>
				</Link>
				<div className="py-3 px-4 text-link-xs lg:text-link text-gray-50 cursor-pointer">GPT</div>
				<div className="flex items-center gap-2">
					<div>
						<HamburgerButton />
					</div>
					<Link href="/login" className="flex gap-2 py-3 px-4 cursor-pointer">
						<Image src="/icons/file.svg" alt="Arrow" width={16} height={16} />
						<span className="text-link-xs lg:text-link text-gray-50">Log in</span>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
