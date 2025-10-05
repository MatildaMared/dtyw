import React from "react";
import styles from "./Logo.module.css";

const Logo: React.FC = () => {
	return <img src="/images/logo-white.png" alt="Do things your way" className={styles.logo} />;
};

export default Logo;
