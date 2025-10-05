import React from "react";
import { Helmet } from "react-helmet-async";
import AboutMarkus from "../../components/Homepage/AboutMarkus";
import styles from "./RevivalSuccessful.module.css";

const RevivalSuccessful: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Grattis! Du är kvar på maillistan | Do things your way</title>
				<meta
					content="Du är kvar på maillistan och fortsätter få info och inspiration om stress och företagande"
					name="description"
				/>
			</Helmet>

			<main className={styles.main}>
				<h1>Grattis! 🎉</h1>
				<h2>
					Du är kvar på maillistan och fortsätter få info och inspiration om stress och företagande
				</h2>
			</main>
			<div id="about" className={styles.about}>
				<AboutMarkus />
			</div>
		</>
	);
};

export default RevivalSuccessful;
