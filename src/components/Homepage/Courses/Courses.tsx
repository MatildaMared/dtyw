import React from "react";
import Button from "../../Button";
import Card from "../../Card";
import styles from "./Courses.module.css";

const Courses: React.FC = () => {
	const handleClick = () => {
		window.open("https://koalendar.com/e/strategisamtal-markus", "_blank");
	};

	return (
		<section className={styles.section}>
			<h2>
				Din väg, dina drömmar, <span>ditt liv</span>
			</h2>
			<p>
				Utifrån var du är i din resa får du hjälp med att välja en startpunkt som passar just dig.
				Boka ett gratis strategisamtal på knappen nedanför så hjälper jag dig!
			</p>
			<ul className={styles.courseList}>
				<Card
					altText="Illustration av person som tittar på en klocka med uppsträckta händer. I en pratbubbla syns ett öppet hänglås."
					heading="Sustainable Productivity Mastery"
					imgUrl="/images/freedom.png"
					secondary
				>
					<p>
						I detta program är målet att du ska få kontroll, energi och struktur – så att du faktiskt hinner bygga ditt företag vid sidan av ditt heltidsjobb utan att bränna ut dig. Du kommer lära dig att skapa rutiner som håller, bygga upp fokus och återhämtningsförmåga och frigöra 10–20 timmar i veckan för ditt företag.
						Du får personlig coaching, konkreta verktyg för stresshantering och struktur, samt ett affärssystem för produktivitet som gör dig mer effektiv än någonsin. Det här är din väg till att orka, trivas och ta dig närmare drömmen – utan att offra din hälsa på vägen.
					</p>
				</Card>
				<Card
					altText="Illustration av en person som går upp för en trappa med en väska i handen. I bakgrunden syns
					en gnistrande diamant."
					heading="Business Strategy Mastery"
					imgUrl="/images/job-promotion.png"
					secondary
				>
					<p>
						Detta program är för dig som vill växla upp från deltidsföretagare till heltidsföretagare – med en tydlig och hållbar plan. Du får hjälp att paketera dina tjänster, skapa en enkel strategi som faktiskt fungerar i vardagen och bygga vanor som gör att du håller kursen även när livet händer.
						Här handlar det inte om att jobba mer, utan om att jobba smartare. Du får individuell coaching, guidning i prioriteringar och stöd i att välja bort det som inte leder dig framåt. Målet: ett företag du älskar att driva – som växer i takt med dig.
					</p>
				</Card>
				<Card
					altText="Illustration av man iklädd slips med händerna korsade framför kroppen. Bakom mannen står två personer till. Alla ser nöjda ut."
					heading="Entrepreneurial Leadership Mastery"
					imgUrl="/images/leadership.png"
					secondary
				>
					<p>
						För dig som redan driver företag på heltid – eller är på väg dit – och vill växa på nästa nivå. Här jobbar vi djupt med både ditt ledarskap och ditt inre driv, så att du kan fatta bättre beslut, hantera press med lugn och bygga ett liv och företag som håller över tid.
						Du får kontinuerlig personlig coaching, sparring i strategiska vägval och stöd i att skapa system som ger frihet, inte mer stress. Det här programmet handlar inte bara om att skala upp ditt företag – utan om att växa som människa, ledare och entreprenör.
					</p>
				</Card>
			</ul>
			<Button onClick={handleClick}>Boka strategisamtal</Button>
		</section>
	);
};

export default Courses;
