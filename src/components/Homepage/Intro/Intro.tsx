import React from "react";
import styles from "./Intro.module.css";

const Intro: React.FC = () => {
	return (
		<section className={styles.section}>
			<h2>Är stress det som hindrar dig från att nå din fulla potential?</h2>
			<p>
				Kanske känns det som att du aldrig kommer bli fri från frustrationen över allt som måste
				göras men inte hinns med. Kanske har du som jag, tidigare varit utmattad. Trots det kan du
				inte släppa tanken om om hur bra ditt liv hade kunnat bli och hur mycket du kan hjälpa andra
				om du bara kunde få mer gjort och må bättre.
			</p>
			<div className={styles.wrapper}>
				<div className={styles.list}>
					<ul>
						<li>
							Kommer du inte vidare i din karriär eller ditt företag på grund av att du inte hinner
							med allt du behöver göra?
						</li>
						<li>
							Blir det för mycket, fast du försökt göra mindre men perfektionism och en känsla av
							otillräcklighet gör att du känner att du måste jobba mer?
						</li>
						<li>
							Har du försökt skapa bättre struktur och få mer gjort men du har svårt att hålla dig
							till vad du bestämt och allt slutar i kaos ändå?
						</li>
					</ul>
					<p>
						Om detta stämmer in på dig så kan jag hjälpa dig bli fri från stress samtidigt som du
						får mer gjort än någonsin förut!
					</p>
				</div>
				<figure>
					<img
						alt="Foto av Markus som sitter på ett tåg, iklädd kavaj, och ser in i kameran."
						src="/images/Markus-dator-tag.jpeg"
					/>
					<figcaption>
						<span>Markus Mattsson</span>, stress- & produktivitetscoach
					</figcaption>
				</figure>
			</div>
		</section>
	);
};

export default Intro;
