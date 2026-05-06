import React from "react";
import styles from "./AboutMarkus.module.css";

const AboutMarkus: React.FC = () => {
	return (
		<section className={styles.section}>
			<img
				className={styles.portrait}
				src="/images/DSCF0817.jpg"
				alt="Markus står utomhus vid en trädstam intill vatten i mjukt kvällsljus, i mörkgrön skjorta och brun kavaj, och tittar in i kameran med ett lätt leende."
			/>
			<article className={styles.article}>
				<h2>Markus Mattsson</h2>
				<span className={styles.title}>Författare, föreläsare och coach inom hållbart företagande</span>
				<p>
					Jag hjälper företagare att bygga företag som fungerar långsiktigt — utan att de själva går sönder på vägen.
				</p>
				<p>
					För några år sedan trodde jag att lösningen på stress och press var att jobba hårdare, prestera mer och hela tiden ligga steget före. Till slut tog det stopp och jag gick in i väggen. Det blev starten på en resa där jag började förstå hur stress, energi, struktur och företagsdesign faktiskt hänger ihop.
				</p>
				<p>
					Idag hjälper jag företagare att skapa mer klarhet, bättre struktur och ett hållbart sätt att arbeta så att de kan fortsätta växa utan att hela livet kretsar kring jobb och stress.
				</p>
				<p>
					Jag har kandidatexamen är psykologi och personalvetenskap från Göteborgs Universitet, men det som framförallt format mitt arbete är det jag själv gått igenom och det jag sett fungera för hundratals företagare genom åren.
				</p>
				<p>
					Jag är utbildad inom psykologi och personalvetenskap vid Göteborgs Universitet och har under många år fördjupat mig inom stress, prestation och hållbart företagande. Men det som framförallt format mitt arbete är resan jag själv gjort och erfarenheterna från alla företagare jag fått hjälpa genom åren.
				</p>
				<p>
				Jag tror inte att människor ska behöva välja mellan att lyckas i sitt företag och att må bra i sitt liv. Jag vet att det går att skapa båda.
				</p>
			</article>
		</section>
	);
};

export default AboutMarkus;
