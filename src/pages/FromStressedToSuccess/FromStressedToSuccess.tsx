import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/WebinarLanding/Hero/Hero";
import Intro from "../../components/WebinarLanding/Intro/Intro";
import Learning from "../../components/WebinarLanding/Learning/Learning";
import Host from "../../components/WebinarLanding/Host/Host";
import Divider from "../../components/Divider/Divider";
import SignupModal from "../../components/WebinarLanding/SignupModal";
import styles from "./FromStressedToSuccess.module.css";

const FromStressedToSuccess: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

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
				<Hero onButtonClick={handleOpenModal} />
				<Intro onButtonClick={handleOpenModal} />
			</div>
			<div className={styles.dividerWrapper}>
				<Divider text="📅 Live den 12 november kl. 19:00 – ca 90 minuter med Q&A" primaryDark />
			</div>
			<div className={styles.container}>
				<Learning onButtonClick={handleOpenModal} />
				<Host onButtonClick={handleOpenModal} />
			</div>

			<SignupModal isOpen={isModalOpen} onClose={handleCloseModal} />
		</>
	);
};

export default FromStressedToSuccess;
