import React from "react";
import Button from "../../Button";
import styles from "./Intro.module.css";

interface IntroProps {
	onButtonClick: () => void;
}

const Intro: React.FC<IntroProps> = ({ onButtonClick }) => {
	return (
		<section className={styles.section}>
			<div className={styles.content}>
				<h2 className={styles.heading}>Känner du igen dig?</h2>
				<p className={styles.introText}>
					Många deltidsföretagare jag pratat med kämpar med samma sak:
				</p>

				<ul className={styles.problemList}>
					<li>
						<strong>Stressen:</strong> du springer på alla bollar – men inget blir riktigt klart.
					</li>
					<li>
						<strong>Tröttheten:</strong> efter jobbet finns knappt energi kvar att driva företaget
						framåt.
					</li>
					<li>
						<strong>Kaoset:</strong> brist på struktur gör att allt känns som en nystart varje
						vecka.
					</li>
					<li>
						<strong>Tvivlet:</strong> &ldquo;kommer jag någonsin kunna leva på mitt företag?&rdquo;
					</li>
				</ul>

				<div className={styles.imageContainer}>
					<img src="/images/woman-at-desk.png" alt="A woman at her desk" />
				</div>

				<p className={styles.highlightText}>
					Den goda nyheten? Du kan bygga upp <strong>energi, fokus och struktur</strong> – så att
					ditt företag växer utan att offra hälsan.
				</p>

				<p className={styles.introText}>
					På mitt GRATIS WEBBINARIUM visar jag dig hur du går från kaos till kontroll:
				</p>

				<ul className={styles.solutionList}>
					<li>
						<strong>Klarhet:</strong> från förvirring till att alltid veta ditt nästa, mest lönsamma
						steg.
					</li>
					<li>
						<strong>Positiv stress:</strong> från att bli tömd på energi av stressen till att få
						kraft som driver dig framåt.
					</li>
					<li>
						<strong>Energi & uthållighet:</strong> från kvällströtthet till vardagsvanor som håller
						dig stark över tid.
					</li>
					<li>
						<strong>Struktur & rutiner:</strong> från att börja om varje vecka till att faktiskt få
						saker gjorda – konsekvent.
					</li>
				</ul>

				<Button onClick={onButtonClick}>Registrera dig nu!</Button>
			</div>
		</section>
	);
};

export default Intro;
