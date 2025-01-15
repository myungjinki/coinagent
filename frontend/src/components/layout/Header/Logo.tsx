"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link
			href="/"
			className="inline-flex items-center hover:opacity-80 transition-opacity px-4"
			aria-label="To the main page"
		>
			<div className="relative w-[4rem] h-[4rem]">
				<Image src="/images/logo.png" alt="MovieMark Logo" fill priority sizes="40px" className="object-contain" />
			</div>
		</Link>
	);
};

export default Logo;
