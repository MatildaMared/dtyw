import React from "react";
import Button from "../../../Button";
import Logo from "../../../Homepage/Header/Logo";
import styles from "./Hero.module.css";

interface HeroProps {
	onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
	return (
		<section className={styles.hero}>
			<div className={styles.logoContainer}>
				<Logo size="small" />
			</div>
			<div className={styles.content}>
				<h1 className={styles.heading}>
					<span className={styles.headingLine}>Från stress och energibrist</span>
					<span className={styles.headingLine}>till ett företag som vinner i längden</span>
				</h1>
				<p className={styles.subheading}>
					En onlineföreläsning och releasefest för min nya bok "Den hållbara företagaren"
				</p>
				<div className={styles.details}>
					<p className={styles.detail}>📅 Live på Zoom den 29 april kl. 12:00</p>
					<p className={styles.detail}>
						⏰ 60 minuter med undervisning, inspiration och bokrelease
					</p>
					<p className={styles.detail}>
						🎤 Med Markus Mattsson, coach och författare
					</p>
				</div>
				<Button onClick={onButtonClick}>Boka din plats nu</Button>
			</div>
		</section>
	);
};

export default Hero;
