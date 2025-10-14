import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
	size?: "default" | "small";
}

const Logo: React.FC<LogoProps> = ({ size = "default" }) => {
	const logoClass = size === "small" ? `${styles.logo} ${styles.small}` : styles.logo;
	return <img src="/images/logo-white.png" alt="Do things your way" className={logoClass} />;
};

export default Logo;
