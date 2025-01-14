interface HamburgerButtonProps {
	onClick?: () => void;
}

const HamburgerButton = ({ onClick }: HamburgerButtonProps) => {
	return (
		<button className="hamburger-button" onClick={onClick} aria-label="메뉴 열기">
			<span className="hamburger-line" />
			<span className="hamburger-line" />
			<span className="hamburger-line" />
		</button>
	);
};

export default HamburgerButton;
