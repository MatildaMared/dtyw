import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Button from "../../components/Button";
import AboutMarkus from "../../components/Homepage/AboutMarkus";
import Testimonials from "../../components/Homepage/Testimonials";
import styles from "./Denhallbara.module.css";

const Denhallbara: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const thriveCartContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Lägg till ThriveCart script dynamiskt med preload
		const script = document.createElement("script");
		script.src = "//tinder.thrivecart.com/embed/v2/thrivecart.js";
		script.id = "tc-dothingsyourway-31-4AZ3ER";
		script.async = true;

		// Lägg till preload link för snabbare laddning
		const preloadLink = document.createElement("link");
		preloadLink.rel = "preload";
		preloadLink.href = "//tinder.thrivecart.com/embed/v2/thrivecart.js";
		preloadLink.as = "script";
		document.head.appendChild(preloadLink);

		// Lägg till script
		document.head.appendChild(script);

		// Sätt loading till false efter en kort delay
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	const orderNow = () => {
		// Öppna checkout-sidan i ny flik
		window.open("https://dothingsyourway.thrivecart.com/31/", "_blank");
	};

	return (
		<>
			<Helmet>
				<title>Sluta Offra Din Hälsa För Ditt Företag</title>
				<meta
					content="Lär dig bygga ett framgångsrikt företag utan att bränna ut dig. Metod från utbränd till framgångsrik företagare."
					name="description"
				/>
			</Helmet>

			<div className={styles.hero}>
				<h1>
					Sluta Offra Din Hälsa
					<br />
					För Ditt Företag
				</h1>
				<h2>Lär dig bygga ett framgångsrikt företag utan att bränna ut dig</h2>
				<p>
					"Jag drömmer om frihet och eget företag, men är så stressad och trött att jag knappt orkar
					med min nuvarande vardag. Hur ska jag någonsin hinna bygga något eget?"
				</p>
				<button className={styles.ctaBtn} onClick={orderNow}>
					BESTÄLL NU - Bara 197kr
				</button>
				<div className={styles.ctaBenefits}>
					✅ Omedelbar nedladdning &nbsp;|&nbsp; 60 dagars pengarna-tillbaka-garanti &nbsp;|&nbsp;
					Alla bonusar inkluderade
				</div>
			</div>

			<div className={styles.thrivecartEmbedSection}>
				{isLoading && (
					<div className={styles.loadingPlaceholder}>
						<div className={styles.loadingSpinner}></div>
						<p>Laddar köpformulär...</p>
					</div>
				)}
				<div
					ref={thriveCartContainer}
					className="tc-v2-embeddable-target"
					data-thrivecart-account="dothingsyourway"
					data-thrivecart-tpl="v2"
					data-thrivecart-product="31"
					data-thrivecart-embeddable="tc-dothingsyourway-31-4AZ3ER"
				></div>
			</div>

			<div className={styles.section}>
				<h3>Känner Du Igen Dig?</h3>
				<ul className={styles.bullets}>
					<li>
						<span className={styles.emoji}>🔥</span>{" "}
						<span>
							Du Bränner På Båda Ändar
							<br />
							<small>
								Heltidsjobb, familj, och ändå denna brinnande längtan att starta något eget. Du
								ligger vaken på nätterna och tänker på drömmen, men har knappt energi att komma ur
								sängen på morgonen.
							</small>
						</span>
					</li>
					<li>
						<span className={styles.emoji}>⏰</span>{" "}
						<span>
							Tiden Rinner Iväg
							<br />
							<small>
								Alla säger "du måste bara hitta tiden", men varje kväll när barnen äntligen somnat
								känns det som att du inte har en enda krona kvar på energikontot. Netflix vinner
								över företagsdrömmen, igen.
							</small>
						</span>
					</li>
					<li>
						<span className={styles.emoji}>🎭</span>{" "}
						<span>
							Du Spelar Stark
							<br />
							<small>
								Utåt verkar allt okej, men inuti kämpar du med stress, självtvivel och känslan av
								att inte räcka till. "Kanske är inte företagande för mig", tänker du ibland.
							</small>
						</span>
					</li>
					<li>
						<span className={styles.emoji}>🔄</span>{" "}
						<span>
							Du Kör I Cirklar
							<br />
							<small>
								Du läser böcker, lyssnar på podcasts, följer framgångsrika företagare på Instagram.
								Men ingenting händer. Du vet vad du "borde" göra, men får det inte gjort.
							</small>
						</span>
					</li>
				</ul>
				<p className={styles.emphasis}>
					Du är inte lat. Du är inte svag. Du har bara aldrig lärt dig rätt metod.
				</p>
			</div>

			<div className={styles.section}>
				<h3>Det Finns En Väg Framåt</h3>
				<ul className={styles.bullets}>
					<li>
						<span className={styles.emoji}>✨</span>{" "}
						<span>
							<b>Förvandla Stress Till Superkraft</b>
							<br />
							<small>
								Lär dig det vetenskapligt bevisade sättet att använda stress som raketbränsle
								istället för att låta den förstöra dig. Upptäck varför vissa blomstrar under press
								medan andra går sönder.
							</small>
						</span>
					</li>
					<li>
						<span className={styles.emoji}>⚡</span>{" "}
						<span>
							<b>Hitta Energi Du Aldrig Visste Du Hade</b>
							<br />
							<small>
								Få tillgång till den oändliga energikällan inom dig. Lär dig skillnaden mellan
								fysisk trötthet och mental utmattning - och hur du laddar båda.
							</small>
						</span>
					</li>
					<li>
						<span className={styles.emoji}>🎯</span>{" "}
						<span>
							<b>Skapa Tid Som Aldrig Funnits</b>
							<br />
							<small>
								Upptäck enkla system som gör att du får mer gjort på 1 timme än du tidigare fick
								gjort på en hel dag. Slut på att känna att du aldrig hinner.
							</small>
						</span>
					</li>
					<li>
						<span className={styles.emoji}>💎</span>{" "}
						<span>
							<b>Bygga Äkta Självförtroende</b>
							<br />
							<small>
								Slipp känslan av att inte vara "tillräckligt bra". Lär dig se ditt verkliga värde
								och våga ta betalt för det du är värd - både som anställd och företagare.
							</small>
						</span>
					</li>
				</ul>
			</div>

			<div className={styles.section}>
				<Testimonials />
			</div>

			<div className={styles.section}>
				<h3>Den Beprövade 3-Stegs Processen</h3>
				<div className={styles.processSteps}>
					<div className={styles.processStep}>
						<div className={styles.processNumber}>1</div>
						<div className={styles.processContent}>
							<h4>Skapa Klarhet</h4>
							<p>
								Upptäck var du verkligen står och vart du ska. Hitta ditt kraftfulla VARFÖR som bär
								dig genom alla motgångar. Slut på att gissa - du får en klar färdplan framåt.
							</p>
						</div>
					</div>
					<div className={styles.processStep}>
						<div className={styles.processNumber}>2</div>
						<div className={styles.processContent}>
							<h4>Hitta Kraften</h4>
							<p>
								Lär dig hur stress KAN vara bra för dig. Bygga äkta självkänsla. Få tillgång till
								den oändliga energin inom dig. Detta är skillnaden mellan att överleva och blomstra.
							</p>
						</div>
					</div>
					<div className={styles.processStep}>
						<div className={styles.processNumber}>3</div>
						<div className={styles.processContent}>
							<h4>Ta Kommandot</h4>
							<p>
								Skapa system som funkar även när livet blir rörigt. Lär dig få ut det mesta av din
								tid och hålla riktningen mot dina mål. Från kaos till kontroll.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.section}>
				<AboutMarkus />
			</div>

			<div className={styles.section}>
				<h3>🎁 Bonusmaterial Värt 2,997kr (Ingår Gratis)</h3>
				<ul className={styles.bonusList}>
					<li>
						Vision Blueprint Arbetsbok <span className={styles.bonusValue}>(497kr)</span> –
						Steg-för-steg mall för att skapa din tydliga företagsvision
					</li>
					<li>
						Notion Produktivitetsystem <span className={styles.bonusValue}>(797kr)</span> – Det
						exakta systemet Markus använder för att hantera allt i sitt företag
					</li>
					<li>
						5-Minuters Stress-Transformation Meditation{" "}
						<span className={styles.bonusValue}>(297kr)</span> – Ljudguide som hjälper dig förvandla
						stress till energi
					</li>
					<li>
						Energi-Audit Checklista <span className={styles.bonusValue}>(397kr)</span> – Upptäck
						exakt vad som dränerar din energi och hur du stoppar det
					</li>
					<li>
						30-Dagars Habit Tracker <span className={styles.bonusValue}>(197kr)</span> – Praktiskt
						verktyg för att bygga vanor som stöder ditt företagande
					</li>
					<li>
						E-postserien "Från Dröm Till Verklighet"{" "}
						<span className={styles.bonusValue}>(812kr)</span> – 12 veckor med motivation och
						praktiska tips direkt i din inkorg
					</li>
				</ul>
				<div className={styles.guarantee}>
					💯 <b>100% Nöjd-Eller-Pengarna-Tillbaka Garanti</b>
					<br />
					Jag är så övertygad om att denna bok kommer förändra ditt liv att jag erbjuder en
					fullständig återbetalning inom 60 dagar om du inte är helt nöjd. Ingen krångel, inga
					konstiga frågor.
					<br />
					<br />
					Du riskerar absolut ingenting – förutom att fortsätta leva som du gör nu.
				</div>
				<div className={styles.limitedOffer}>
					⏰ Begränsat Erbjudande: Bonusmaterialet värt 2,997kr ingår endast för de första 500
					köparna. När de är slut höjer vi priset till ordinarie 497kr.
				</div>
				<div className={styles.urgency}>Dröj inte – din framtid väntar inte på dig.</div>
			</div>

			<div className={styles.thrivecartSection}>
				<div className={styles.checkoutEmbed}>
					<h3>Köp Boken Nu</h3>
					<p>Få omedelbar tillgång till allt material och börja din resa mot frihet redan idag!</p>
					<Button onClick={orderNow}>BESTÄLL NU - Bara 197kr</Button>
					<div className={styles.checkoutBenefits}>
						✅ Omedelbar nedladdning &nbsp;|&nbsp; 60 dagars pengarna-tillbaka-garanti &nbsp;|&nbsp;
						Alla bonusar inkluderade
					</div>
				</div>
			</div>

			<div className={styles.footer}>
				© 2025 Markus Mattsson. Alla rättigheter förbehållna.
				<br />
				Din resa mot frihet börjar nu.
			</div>
		</>
	);
};

export default Denhallbara;
