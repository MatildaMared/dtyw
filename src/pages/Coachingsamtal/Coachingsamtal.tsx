import React from "react";
import { Helmet } from "react-helmet-async";
import Divider from "../../components/Divider/Divider";
import AboutMarkus from "../../components/Homepage/AboutMarkus/AboutMarkus";
import Button from "../../components/Button/Button";
import styles from "./Coachingsamtal.module.css";

const Coachingsamtal: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Boka coachingsamtal | Do things your way</title>
				<meta
					content="Boka ditt första coachingsamtal för halva priset eller för återkommande kunder."
					name="description"
				/>
			</Helmet>

			<main className={styles.main}>
				<h1>Boka coachingsamtal</h1>

				<h2>Hur ska du göra för att lösa problemen med stress?</h2>
				<div className={styles.videoContainer}>
					<iframe
						width="100%"
						height="100%"
						src="https://player.vimeo.com/video/867635175?h=de20d0ae03&autoplay=1&texttrack=sv"
						frameBorder="0"
						allowFullScreen
						allow="autoplay;"
						title="Coaching video"
					/>
				</div>
				<div>
					<a href="https://calendly.com/markusmattsson/halvapriset">
						<Button>Boka ditt första samtal för halva priset</Button>
					</a>
				</div>
				<div className={styles.secondaryButton}>
					<h2>Har du jobbat med mig förut och vill boka in mer coaching?</h2>
					<p>Då har jag givetvis en knapp för dig med:</p>
					<a href="https://calendly.com/markusmattsson/coachingtimme">
						<Button secondary>Bokning för återkommande kunder</Button>
					</a>
				</div>
				<AboutMarkus />
			</main>
		</>
	);
};

export default Coachingsamtal;
