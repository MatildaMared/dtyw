import React from "react";
import Button from "../../Button";
import Card from "../../Card";
import styles from "./Courses.module.css";

const Courses: React.FC = () => {
	const handleClick = () => {
		window.open("https://calendly.com/markusmattsson/samtal", "_blank");
	};

	return (
		<section className={styles.section}>
			<h2>
				Min beprövade process
			</h2>
			<p>
				De flesta börjar i fel ände och jagar energi, rutiner eller resultat direkt, men utan rätt grund blir det sällan hållbart. CEA-metoden, Clarity, Energy och Agency, hjälper dig börja i rätt ordning så att det du bygger faktiskt håller.
			</p>
			<ul className={styles.courseList}>
				<Card
					altText="Illustration av person som tittar på en klocka med uppsträckta händer. I en pratbubbla syns ett öppet hänglås."
					heading="Klarhet"
					imgUrl="/images/freedom.png"
					secondary
				>
					<p>
						De flesta sitter inte fast för att de är lata eller odisciplinerade, utan för att de saknar tydlighet. Tydlighet kring vad de egentligen vill, vad som dränerar dem och vad som faktiskt spelar roll. Istället för att fortsätta gissa eller testa fler saker som kanske fungerar börjar vi här, med att rensa bort brus, ifrågasätta gamla sanningar och skapa en riktning som känns både tydlig och meningsfull. När du får klarhet blir besluten enklare, och när besluten blir enklare försvinner mycket av den negativa stressen av sig själv.
					</p>
				</Card>
				<Card
					altText="Illustration av en person som går upp för en trappa med en väska i handen. I bakgrunden syns
					en gnistrande diamant."
					heading="Energi"
					imgUrl="/images/job-promotion.png"
					secondary
				>
					<p>
						Många försöker lösa sin situation genom att vila mer, planera bättre eller “skärpa sig”, men problemet sitter ofta djupare än så. Energi handlar inte bara om sömn och pauser, utan om hur du tänker, vad du fokuserar på och hur du faktiskt lever och arbetar varje dag. Tillsammans identifierar vi vad som läcker din energi och bygger upp en stabil grund av både fysisk och mental kraft, så att du inte bara orkar ibland utan över tid. Målet är att du ska känna att du har energi att driva ditt företag, inte att företaget driver slut på dig.
					</p>
				</Card>
				<Card
					altText="Illustration av man iklädd slips med händerna korsade framför kroppen. Bakom mannen står två personer till. Alla ser nöjda ut."
					heading="Ta kommandot"
					imgUrl="/images/leadership.png"
					secondary
				>
					<p>
						När du har klarhet och energi blir nästa steg naturligt, men det handlar inte om att göra mer utan om att göra rätt saker. Här skapar vi struktur, fokus och enkla system som gör att du faktiskt får saker gjorda i din vardag, utan att behöva pressa dig själv konstant. Du lär dig prioritera, hålla riktningen och bygga ett sätt att arbeta som fungerar i verkligheten, inte bara på papper. Resultatet är att du inte bara rör dig framåt, utan gör det på ett sätt som håller över tid.
					</p>
				</Card>
			</ul>
			<Button onClick={handleClick}>Boka Coachingsamtal</Button>
		</section>
	);
};

export default Courses;
