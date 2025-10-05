import React from "react";
import Button from "../../Button";
import Heading from "./Heading";
import Logo from "./Logo";
import styles from "./Header.module.css";

const Header: React.FC = () => {
	const handleButtonClick = () => {
		window.open("/mindsetmeditation", "_blank");
	};

	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.content}>
				<Heading />
				<p className={styles.description}>
					Aldrig igen behöver du kompromissa med dina drömmar på grund av stress.
				</p>
				<p className={styles.description}>
					Oavsett om vill starta eget, prestera hållbart på jobbet eller ändra livsriktning så kan
					jag hjälpa dig.
				</p>
				<p className={styles.description}>
					Ladda ner den ultimata guidade meditationen för att förändra negativ stress till positiv.
				</p>
				<Button onClick={handleButtonClick}>Förändra stressen på 5 minuter</Button>
			</div>
		</header>
	);
};

export default Header;
