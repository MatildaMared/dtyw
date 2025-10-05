import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
	onClick?: () => void;
	secondary?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, secondary = false, children }) => {
	const buttonClass = secondary ? `${styles.button} ${styles.secondary}` : styles.button;

	return (
		<button className={buttonClass} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
