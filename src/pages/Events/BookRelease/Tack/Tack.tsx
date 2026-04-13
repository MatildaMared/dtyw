import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styles from "./Tack.module.css";

const Tack: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);

		// 🔹 Trigger Google Ads conversion event
		if (typeof window.gtag === "function") {
			window.gtag("event", "conversion", {
				send_to: "AW-757437746/4JwmCJS63K8bELKqlukC",
			});
			console.log("✅ Google Ads conversion event fired");
		} else {
			console.warn("⚠️ gtag not found – check that your global site tag is loaded.");
		}
	}, []);

	return (
		<>
			<Helmet>
				<title>
					Du är anmäld till webbinariet! - Do things your way
				</title>
				<meta
					content="Tack för din anmälan till webbinariet den 12 november kl. 19:00. Här hittar du videon och all information du behöver."
					name="description"
				/>
			</Helmet>

			<div className={styles.container}>
				<section className={styles.heroSection}>
					<div className={styles.heroContent}>
						<h1 className={styles.mainTitle}>✅ Du är anmäld!</h1>
						
						<h2 className={styles.subtitle}>
							🔥 Nu börjar resan mot ett hållbart och framgångsrikt företag
						</h2>
					</div>
				</section>
				<section className={styles.footerSection}>
					<div className={styles.sectionContent}>
						<h3 className={styles.sectionTitle}>👋 Vi ses live den 29 april kl. 12:00</h3>
						
						<p className={styles.footerText}>
							Ta fram anteckningsboken, häll upp något gott –<br/>
							och gör dig redo för 60 minuter som ger dig <strong>kraften, lugnet och strukturen du behöver för att driva ditt företag – och äntligen bli fri.</strong>
						</p>
						
						<p className={styles.signature}>
							/ <strong>Markus</strong>
						</p>
					</div>
				</section>
			</div>
		</>
	);
};

export default Tack;
