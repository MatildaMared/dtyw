import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styles from "./MindsetMeditation.module.css";

const MindsetMeditation: React.FC = () => {
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
				<title>Förvandla negativ stress till positiv på 5 minuter | Do things your way</title>
				<meta
					content="Upptäck den ultimata guidade meditationen för att skifta ditt mindset och förändra din stress för alltid!"
					name="description"
				/>
			</Helmet>

			<main className={styles.main}>
				<div className={styles.spacer}></div>
				<div className={styles.landingPage}>
					<h1>
						Vill du fortsätta <span className={styles.emphasizedText}>prestera på topp</span> utan
						att må dåligt av stressen?
					</h1>
					<img
						src="/images/mindsetmeditation.png"
						alt="Förvandla negativ stress till positiv på 5 minuter"
					/>
					<p className={styles.subText}>
						Upptäck den ultimata guidade meditationen för att skifta ditt mindset och förändra din
						stress för alltid!
					</p>
					<div className="ml-embedded" data-form="9K3Z7r"></div>
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

export default MindsetMeditation;
