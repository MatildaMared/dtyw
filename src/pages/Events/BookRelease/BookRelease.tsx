import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../../components/Events/BookReleaseCompontents/Hero/Hero";
import Intro from "../../../components/Events/BookReleaseCompontents/Intro/Intro";
import Learning from "../../../components/Events/BookReleaseCompontents/Learning/Learning";
import Host from "../../../components/Events/BookReleaseCompontents/Host/Host";
import Divider from "../../../components/Divider/Divider";
import { scrollToBookReleaseSignup } from "../../../components/Events/BookReleaseCompontents/BookReleaseSignupForm";
import styles from "./BookRelease.module.css";

const BookRelease: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>
					Från stressad deltidsföretagare till ett hållbart heltidsföretag - Do things your way
				</title>
				<meta
					content="Gratis webbinarium den 12 november kl. 19:00. Lär dig bygga energi, fokus och struktur för att växa ditt företag utan att bränna ut dig själv."
					name="description"
				/>
			</Helmet>

			<div className={styles.container}>
				<Hero onButtonClick={scrollToBookReleaseSignup} />
				<Intro />
			</div>
			<div className={styles.dividerWrapper}>
				<Divider text="📅 Live den 29 april kl. 12:00 på Zoom" primaryDark />
			</div>
			<div className={styles.container}>
				<Learning onButtonClick={scrollToBookReleaseSignup} />
				<Host onButtonClick={scrollToBookReleaseSignup} />
			</div>
		</>
	);
};

export default BookRelease;
