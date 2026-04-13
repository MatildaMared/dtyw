import React from "react";
import Button from "../../../Button";
import styles from "./Learning.module.css";

interface LearningProps {
	onButtonClick: () => void;
}

const Learning: React.FC<LearningProps> = ({ onButtonClick }) => {
	return (
		<section className={styles.section}>
			<div className={styles.content}>
				<h2 className={styles.heading}>Vad du kommer att lära dig</h2>

				<p className={styles.introText}>Här är några saker du kommer att få med dig från timmen:</p>

				<ul className={styles.learningList}>
					<li>
						En tydligare bild av varför så många företagare fastnar i stress och energibrist
					</li>
					<li>
						Ett nytt sätt att se på hållbarhet, inte som att bromsa livet utan som att bygga för att vinna i längden
					</li>
					<li>
						Praktiska verktyg kring hur du får mer energi, bättre riktning och större kontroll
					</li>
					<li>
						De viktigaste principerna från min bok, sammanfattade i ett format du kan börja använda direkt
					</li>
					<li>
						Inspiration till hur du kan skapa ett företag som känns bättre att leva i, inte bara bättre att prata om
					</li>
				</ul>

				<Button onClick={onButtonClick}>Boka din plats nu!</Button>
			</div>
		</section>
	);
};

export default Learning;
