import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styles from "./Attgora.module.css";

const Attgora: React.FC = () => {
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
				<title>Att-göra-lista | Do things your way</title>
				<meta
					content="Få en kopia av min Notion Template för att vara den mest pålitliga och strukturerade personen du känner."
					name="description"
				/>
			</Helmet>

			<main className={styles.main}>
				<div className={styles.spacer}></div>
				<div className={styles.landingPage}>
					<h1>
						Vill du få kontroll över allt som behöver göras och samtidigt{" "}
						<span className={styles.emphasizedText}>bli mer produktiv än någonsin förut?</span>
					</h1>
					<img
						src="/images/attgoralista.png"
						alt="Förvandla negativ stress till positiv på 5 minuter"
					/>
					<p className={styles.subText}>
						Få en kopia av min Notion Template, som jag själv använder för att vara den mest
						pålitliga och strukturerade personen jag känner.
					</p>
					<div className="ml-embedded" data-form="XvI33q"></div>
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

export default Attgora;
