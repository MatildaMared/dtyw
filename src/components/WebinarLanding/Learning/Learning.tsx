import React from "react";
import Button from "../../Button";
import styles from "./Learning.module.css";

interface LearningProps {
	onButtonClick: () => void;
}

const Learning: React.FC<LearningProps> = ({ onButtonClick }) => {
	return (
		<section className={styles.section}>
			<div className={styles.content}>
				<h2 className={styles.heading}>Vad du kommer att lära dig</h2>

				<p className={styles.introText}>Här är fem saker du tar med dig från webbinariet:</p>

				<ul className={styles.learningList}>
					<li>
						<strong>Frigör energi & fokus även med heltidsjobb vid sidan om</strong> – så du kan
						bygga företaget utan att ständigt halka efter.
					</li>
					<li>
						<strong>Varför just nu är bästa tiden att agera</strong> – och varför de som skapar
						struktur idag får ett enormt försprång framför konkurrenterna.
					</li>
					<li>
						<strong>Hur din framtid kan se ut med rätt system</strong> – växande företag, stabila
						rutiner, mer frihet i kalendern.
					</li>
					<li>
						<strong>Vanliga fällor deltidsföretagare fastnar i</strong> – och enkla sätt att undvika
						negativ stress och kaos.
					</li>
					<li>
						<strong>Min 3-stegsmodell för klarhet, energi och kontroll</strong> – en metod du kan
						börja använda direkt.
					</li>
				</ul>

				<Button onClick={onButtonClick}>Boka din plats nu!</Button>
			</div>
		</section>
	);
};

export default Learning;
