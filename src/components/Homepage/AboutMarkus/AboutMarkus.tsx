import React from "react";
import styles from "./AboutMarkus.module.css";

const AboutMarkus: React.FC = () => {
	return (
		<section className={styles.section}>
			<img
				src="/images/markus.jpg"
				alt="Markus sitter framåtlutad på en bänk på en bänk och ser in i kameran. Bakom bänken finns en grönskande buske och man kan se att solen lyser genom löven."
			/>
			<article className={styles.article}>
				<h2>Markus Mattsson</h2>
				<span className={styles.title}>Stress- och Produktivitetscoach</span>
				<p>
					Ingen ska behöva vantrivas och må dåligt i en situation som inte är bra för dem. Tyvärr
					har de flesta personer gett upp på sina drömmar. Framförallt om de fått så mycket problem
					med stress att det inte finns någon energi kvar vid dagens slut. Det behöver inte vara så.
				</p>
				<p>
					Förut hindrade stressen, min dåliga självkänsla och min låga energi, mig från att leva
					mitt drömliv som företagare. Nu vill jag bevisa för dig att du inte behöver sitta fast i
					den situation du är i. Om jag kan gå från utbränd till 50-60 timmars arbetsvecka så kan du
					absolut lära dig att få mer tid och energi till att nå dit du vill i ditt liv!
				</p>
				<p>
					Min formella utbildning består av två kandidatexamen från Göteborgs Universitet, en i
					psykologi och en i personalvetenskap. I över fem år har jag dessutom konsumerat hundratals
					böcker och föreläsningar av vår tids största tänkare inom stress, produktivitet och
					personlig utveckling.
				</p>
				<p>
					Jag älskar att utbilda och coacha mina andra i hur de tar nästa steg i sitt liv. Det är
					min stora passion i livet.
				</p>
			</article>
		</section>
	);
};

export default AboutMarkus;
