import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import SignupModal from "../../../components/WebinarLanding/SignupModal";
import AboutMarkus from "../../../components/Homepage/AboutMarkus";
import styles from "./HowToBuildBusiness.module.css";

const MAILERLITE_GROUP_ID = "171594578994923043";

const HowToBuildBusiness: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const answersHighlights = useMemo(
		() => [
			"Vad är det egentligen man behöver kunna för att få företaget att börja rulla?",
			"Var börjar man när tiden är minimal och energin är låg?",
			"Hur får man kunder när man inte vill hyperposta, nätverka ihjäl sig eller spela någon annan?",
			"Hur ska man tänka kring pengar och ekonomi när allt känns rörigt?",
			"Vad gör man när huvudet är fullt, kroppen är trött och strukturen bara… inte finns?",
			"Och hur bygger man något som håller — inte bara en månad, utan i flera år?",
		],
		[]
	);

	const audienceHighlights = useMemo(
		() => [
			"Driver företag vid sidan av jobbet",
			"Vill få ihop helheten, inte bara “mer tips”",
			"Känner att du gör mycket, men inte kommer framåt",
			"Längtar efter struktur, lugn och riktning",
			"Vill ha kunder — men på ett sätt som känns naturligt",
			"Är klar med att gissa och redo att fatta vad som faktiskt är viktigt",
			"Och för dig som vill skapa ett företag som funkar även när livet inte gör det.",
		],
		[]
	);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	return (
		<>
			<Helmet>
				<title>Liveträning: Hur bygger man företag egentligen? | Do things your way</title>
				<meta
					name="description"
					content="Gratis online-träning om hur du bygger företag när du har minimal tid och energi."
				/>
			</Helmet>

			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={styles.heroContent}>
						<h1>Liveträning: Hur bygger man företag egentligen?</h1>
						<p className={styles.lead}>
							Även när du inte har tid, energi eller någon aning om vad du håller på med.
						</p>
						<div className={styles.heroIntro}>
							<p>Det här är en träning för oss som försöker bygga företag mitt i livet.</p>
							<p>
								Mellan jobb, relationer, sömnbrist och “jag borde städat igår men nu är det redan torsdag”.
							</p>
							<p>
								Du vet — allt det där som aldrig syns på Instagram men som definierar verkligheten för 9 av 10
								deltidsföretagare.
							</p>
							<p>Drömmen finns där.</p>
							<p>Men vägen dit känns ofta dimmig, rörig och… ja, lite som att man famlar i mörkret.</p>
							<p>Så låt oss tända lampan.</p>
						</div>
						<button className={styles.ctaButton} onClick={handleOpenModal}>
							Anmäl dig till träningen
						</button>
					</div>
					<div className={styles.heroMedia}>
						<img
							src="/images/markus-blickar-ut-spegelvant.jpg"
							alt="Markus blickar ut över naturen och planerar lugnt"
							loading="lazy"
						/>
					</div>
				</section>

				<section className={styles.section}>
					<div className={styles.infoHeader}>
						<h2>Praktisk info</h2>
						<p>Tryggt, tydligt och alltid live tillsammans.</p>
					</div>
					<div className={styles.infoCards}>
						<div className={styles.infoCard}>
							<span className={styles.infoLabel}>När?</span>
							<p className={styles.infoValue}>26 november kl 11.00–12:15</p>
						</div>
					</div>
				</section>

				<section className={styles.section}>
					<h2>⭐ Vad du kommer få svar på</h2>
					<div className={styles.sectionBody}>
						<p>Det här är inte en lista med 72 hacks.</p>
						<p>Det är inte ännu ett “så här gör proffsen”-snack.</p>
						<p>
							Det är en översikt över de fem delar som faktiskt bygger ett företag — och varför nästan alla hoppar
							rakt över dem.
						</p>
						<p>I träningen får du svar på frågor som:</p>
						<div className={styles.cardGrid}>
							{answersHighlights.map((item) => (
								<div className={styles.card} key={item}>
									<p>{item}</p>
								</div>
							))}
						</div>
						<p>
							Du får en ärlig, jordnära och väldigt mänsklig karta över hur företagande faktiskt funkar när du
							inte har lyxen av full tid, perfekta rutiner eller ett team bakom dig.
						</p>
						<p>Det här är för dig som vill bygga — men utan att gå sönder.</p>
					</div>
				</section>

				<section className={`${styles.section} ${styles.highlightSection}`}>
					<h2>⭐ För vem är den här träningen?</h2>
					<div className={styles.sectionBody}>
						<p>För dig som:</p>
						<div className={styles.pillGrid}>
							{audienceHighlights.map((item) => (
								<div className={styles.pill} key={item}>
									{item}
								</div>
							))}
						</div>
					</div>
				</section>

				<section className={styles.section}>
					<h2>⭐ Vem håller träningen?</h2>
					<div className={styles.sectionBody}>
						<AboutMarkus />
					</div>
				</section>

				<section className={styles.ctaSection}>
					<div className={styles.ctaCard}>
						<h3>Anmäl dig till träningen</h3>
						<p>
							En gratis, praktisk och varm träning som ger dig klarhet i hur man faktiskt bygger ett företag —
							när du inte har all tid i världen.
						</p>
						<button className={styles.ctaButton} onClick={handleOpenModal}>
							Anmäl dig till träningen
						</button>
					</div>
				</section>
			</div>

			<SignupModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				groupId={MAILERLITE_GROUP_ID}
				title="Anmäl dig till kostnadsfri träning"
				submitLabel="Anmäl mig till träningen"
			/>
		</>
	);
};

export default HowToBuildBusiness;

