import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
	onClick?: () => void;
	secondary?: boolean;
	children: React.ReactNode;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, secondary = false, children, className }) => {
	const buttonClass = secondary ? `${styles.button} ${styles.secondary}` : `${styles.button}`;

	return (
		<button className={buttonClass + " " + className || ""} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
