import React from "react";
import Button from "../../../Button";
import styles from "./Intro.module.css";

interface IntroProps {
	onButtonClick: () => void;
}

const Intro: React.FC<IntroProps> = ({ onButtonClick }) => {
	return (
		<section className={styles.section}>
			<div className={styles.content}>
				<h2 className={styles.heading}>Föreläsning och Releasefest</h2>
				<p className={styles.introText}>
					Det här är inte bara en föreläsning.
				</p>
				<p className={styles.introText}>
					Det är också releasefesten för min nya bok "Den hållbara företagaren".
				</p>
				<p className={styles.introText}>
					Under den här timmen kommer jag att lära ut de viktigaste idéerna från boken och visa hur du kan gå från stress och energibrist till att bygga ett företag som faktiskt vinner i längden.
				</p>
				<p className={styles.introText}>
					Det här eventet är till för dig som vill få nya perspektiv, konkreta insikter och en tydligare väg framåt i ditt företagande.
				</p>
				<div className={styles.imageContainer}>
					<img src="/images/woman-at-desk.png" alt="A woman at her desk" />
				</div>

				<p className={styles.highlightText}>
					Du behöver inte välja mellan framgång och hållbarhet.
					Du kan skapa båda.
				</p>

				<p className={styles.introText}>
					På den här föreläsningen får du lära dig
				</p>

				<ul className={styles.solutionList}>
					<li>
						Hur du skapar mer klarhet i vad du faktiskt vill och vad du behöver fokusera på just nu
					</li>
					<li>
						Hur du kan förstå stress på ett nytt sätt och sluta göra den till din fiende
					</li>
					<li>
						Hur du bygger och skyddar din energi så att den räcker både till företaget och livet utanför
					</li>
					<li>
						Hur du tar mer kommandot över din vardag, din tid och ditt företagande
					</li>
				</ul>

				<Button onClick={onButtonClick}>Registrera dig nu!</Button>
			</div>
		</section>
	);
};

export default Intro;
