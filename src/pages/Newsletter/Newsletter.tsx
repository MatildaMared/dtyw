import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styles from "./Newsletter.module.css";

const Newsletter: React.FC = () => {
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
				<title>Anmäl dig till mitt nyhetsbrev | Do things your way</title>
				<meta
					content="Få massvis av värdefull kunskap, verktyg och inspiration direkt i din inbox."
					name="description"
				/>
			</Helmet>

			<main className={styles.main}>
				<div className={styles.spacer}></div>
				<div className={styles.landingPage}>
					<h1>
						Vill du <span className={styles.emphasizedText}>bli en framgångsrik företagare</span>{" "}
						och bli fri från stressen?
					</h1>
					<p className={styles.fileTitle}>Anmäl dig till mitt nyhetsbrev!</p>
					<p className={styles.subText}>
						Få massvis av värdefull kunskap, verktyg och inspiration direkt i din inbox.
					</p>
					<div className="ml-embedded" data-form="2x0fz0"></div>
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

export default Newsletter;
