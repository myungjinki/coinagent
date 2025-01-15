interface HamburgerButtonProps {
	onClick?: () => void;
}

const HamburgerButton = ({ onClick }: HamburgerButtonProps) => {
	return (
		<button className="hamburger-button" onClick={onClick} aria-label="Open menu">
			<span className="hamburger-line" />
			<span className="hamburger-line" />
			<span className="hamburger-line" />
		</button>
	);
};

export default HamburgerButton;
