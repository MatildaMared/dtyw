import React from "react";
import Button from "../../Button";
import Logo from "../../Homepage/Header/Logo";
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
					<span className={styles.headingLine}>Från stressad deltidsföretagare</span>
					<span className={styles.headingLine}>till ett hållbart heltidsföretag</span>
				</h1>
				<p className={styles.subheading}>
					För dig som driver företag vid sidan om jobbet – och vill satsa på ditt företag utan att
					bränna ut dig själv
				</p>
				<div className={styles.details}>
					<p className={styles.detail}>📅 Live-webbinarium den 12 november kl. 19:00</p>
					<p className={styles.detail}>
						⏰ 90 minuter, fullmatat med strategi och praktiska verktyg
					</p>
					<p className={styles.detail}>
						🎤 Med Markus Mattsson – coach och expert på hållbart entreprenörskap
					</p>
				</div>
				<Button onClick={onButtonClick}>Boka din plats nu</Button>
			</div>
		</section>
	);
};

export default Hero;
