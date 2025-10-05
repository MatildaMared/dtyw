import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styles from "./Bump.module.css";

const Bump: React.FC = () => {
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
		})(window, document, "script", "https://assets.mailerlite.com/js/universal.js", "ml", "l", "n");

		(window as any).ml("account", "303786");
	}, []);

	return (
		<>
			<Helmet>
				<title>Mindset Meditation Bump | Do things your way</title>
				<meta
					content="Få massvis av värdefull kunskap, verktyg och inspiration direkt i din inbox."
					name="description"
				/>
			</Helmet>

			<main className={styles.main}>
				<div className={styles.spacer}></div>
				<div className={styles.landingPage}>
					<h1 className={styles.headerWarning}>NÄSTAN KLAR!</h1>
					<p className={styles.subText}>Filen skickas till dig nu...</p>
					<h1 className={styles.headerHeadsup}>
						Men medan du väntar. Vill du se till så att det nya mindset om stress verkligen sätter
						sig på djupet?
					</h1>
					<h1 className={`${styles.headerHeadsup} ${styles.underline}`}>Missa inte webbinariet:</h1>
					<p className={styles.webinarTitle}>
						5 vanliga misstag stressade högpresterare gör för att nå sina mål
					</p>
					<p className={styles.fileTitle}>Du kommer lära dig...</p>
					<ul>
						<li>
							Den nya{" "}
							<b className={styles.emphasizedText}>revolutionerande forskningen om stress</b> som
							förändrade mitt liv för alltid!
						</li>
						<li>
							Hur du går{" "}
							<b className={styles.emphasizedText}>
								från stressad högprestare till välmående och effektiv
							</b>{" "}
							samtidigt som du får ännu bättre resultat.
						</li>
						<li>
							Exakt hur du ska göra för att{" "}
							<b className={styles.emphasizedText}>ta kontrollen över din tid</b> och ditt liv och
							slutar känna att tiden (och livet) hela tiden flyter iväg på annat än det DU vill.
						</li>
						<li>...och mycket mer!</li>
						<h1 className={styles.headerHeadsup}>Anmäl dig nedan nu!</h1>
					</ul>
					<div className="ml-embedded" data-form="W0NPbc"></div>
					<p className={styles.privacyText}>
						Genom att sända in dina uppgifter godtar du också vår{" "}
						<Link to="/integritetspolicy">integritetspolicy.</Link>
					</p>
				</div>
				<div className={styles.spacer}></div>
			</main>
		</>
	);
};

export default Bump;
