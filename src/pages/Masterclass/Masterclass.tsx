import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Divider from "../../components/Divider/Divider";
import AboutMarkus from "../../components/Homepage/AboutMarkus/AboutMarkus";
import styles from "./Masterclass.module.css";

const Masterclass: React.FC = () => {
	useEffect(() => {
		// MailerLite Universal
		(function (w: any, d: any, e: any, u: any, f: any, l: any, n: any) {
			w[f] =
				w[f] ||
				function () {
					(w[f].q = w[f].q || []).push(arguments);
				};
			l = d.createElement(e);
			l.async = 1;
			l.src = u;
			n = d.getElementsByTagName(e)[0];
			n.parentNode.insertBefore(l, n);
		})(window, document, "script", "https://assets.mailerlite.com/js/universal.js", "ml");

		(window as any).ml("account", "303786");
	}, []);

	return (
		<>
			<Helmet>
				<title>
					Hur du blir en framgångsrik företagare - fri från stress ✨ | Do things your way
				</title>
				<meta
					content="Jag hjälper de som har problem med stress att gå från anställd till företagare."
					name="description"
				/>
			</Helmet>

			<header className={styles.header}>
				<div className={styles.headerLogo}>
					<Link to="/">
						Do things <span className={styles.headerEmphasized}>your</span> way
					</Link>
				</div>
				<span className={styles.headerPreHeading}>Kostnadsfri masterclass</span>
				<h1 className={styles.headerHeading}>
					Hur du blir en framgångsrik företagare <span> - fri från stress</span>
				</h1>
				<p className={styles.headerSubHeading}>
					– tre steg för att aldrig igen känna negativ stress
				</p>
				<a href="#sign-up" className={styles.button}>
					Registrera dig nu!
				</a>
			</header>

			<main className={styles.main}>
				<section className={styles.intro}>
					<div className={styles.introHeader}>
						<img
							src="/images/zen.jpg"
							alt="En brygga med en ljuslykta som brinner. Man kan se en man som sitter på bryggan med korsade fötter."
							className={styles.introImage}
						/>
						<div className={styles.introContent}>
							<h2 className={styles.introHeading}>Stämmer detta in på dig?</h2>
							<ul className={styles.introList}>
								<li>Du är trött på att vara stressad och ha låg energi</li>
								<li>Du har svårt att få struktur och kontroll på allt som behöver göras</li>
								<li>
									Du är rädd för vad som kommer hända om du inte jobbar mer och har koll på allt.
								</li>
								<li>
									Du vet att ditt företag kan bli både framgångsrikt och trivsamt med rätt verktyg.
								</li>
							</ul>
						</div>
					</div>

					<div className={styles.introWebbinarie}>
						<h2 className={styles.introHeading}>När?</h2>
						<p className={styles.introDate}>1 Juni 2023 klockan 18:00</p>
						<h3 className={styles.introWebbinarieHeading}>
							Hur du blir en framgångsrik företagare - fri från stress
						</h3>
					</div>
					<p>
						Jag kommer gå igenom hur du ska göra för att förvandla all din negativa stress till
						positiv så du inte bara får mer gjort utan också mår fantastiskt bra! Allt du behöver
						göra är att registrera dig till masterclassen nedan.
					</p>
					<p>
						<b>VIKTIGT! </b>Detta är endast för dig som är företagare eller vill starta företag.
					</p>
					<a href="#sign-up" className={styles.button}>
						Anmäl dig nu!
					</a>
				</section>

				<Divider text="För dig som är företagare eller vill starta företag" />

				<section className={styles.signUp} id="sign-up">
					<div className={styles.signUpForm}>
						<p className={styles.signUpMb}>
							Hur du blir en framgångsrik företagare - fri från stress
						</p>
						<h2 className={styles.signUpHeading}>Registrera dig till masterclassen</h2>
						<div className="ml-embedded" data-form="OD3nDk"></div>
						<p className={styles.signUpIntegrity}>
							Genom att sända in dina uppgifter godtar du också vår{" "}
							<Link to="/integritetspolicy" className={styles.signUpLink}>
								integritetspolicy
							</Link>
							.
						</p>
					</div>
				</section>

				<Divider secondary text="Kompromissa inte med dina drömmar." />

				<section className={styles.webinar}>
					<img
						src="/images/webinar.jpg"
						alt="En man med en kaffekopp i handen håller upp en bok om entreprenörskap"
						className={styles.webinarImage}
					/>
					<div>
						<h2 className={styles.webinarHeading}>På masterclassen kommer du lära dig...</h2>
						<ul className={styles.webinarList}>
							<li>
								Den nya <b>revolutionerande forskningen om positiv stress</b> som förändrade mitt
								och hundratals andras liv för alltid!
							</li>
							<li>
								Hur du går <b>från stressad och slutkörd till välmående och effektiv</b> samtidigt
								som du får ännu bättre resultat.
							</li>
							<li>
								Steg för steg hur du <b>slutar slösa din extra tid och energi</b> på att oroa dig
								eller ha dåligt samvete för att du inte gör mer.
							</li>
							<li>
								Exakt hur du ska göra för att <b>ta kontrollen över din tid</b> och ditt liv och
								slutar känna att tiden (och livet) hela tiden flyter iväg på annat än det DU vill.
							</li>
							<li>
								Hur du säkrar en trygg framtid för ditt företag igenom att bli{" "}
								<b>konsekvent produktiv,</b>
								vecka för vecka, vilket kommer garantera att ditt företag hela tiden växer.
							</li>
							<li>
								...och mycket mer! masterclassen är helt gratis och 100% live, så du kan ställa
								frågor under tiden.
							</li>
						</ul>
					</div>
				</section>

				<Divider text='"Min stora passion är att coacha och utbilda andra"' />

				<AboutMarkus />
				<a href="#sign-up" className={styles.button}>
					Anmäl dig nu!
				</a>
				<br />
			</main>
		</>
	);
};

export default Masterclass;
