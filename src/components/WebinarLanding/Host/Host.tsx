import React from "react";
import Button from "../../Button";
import styles from "./Host.module.css";

interface HostProps {
	onButtonClick: () => void;
}

const Host: React.FC<HostProps> = ({ onButtonClick }) => {
	const bioContent = (
		<>
			<p>
				Jag heter Markus Mattsson och har de senaste sju åren coachat och föreläst för{" "}
				<strong>hundratals entreprenörer</strong> – både om hur man bygger hållbar energi och
				struktur, och om hur man lyckas med <strong>sälj och marknadsföring</strong> i vardagen.
			</p>

			<p>
				Förutom min erfarenhet som coach har jag också en{" "}
				<strong>kandidatexamen i psykologi</strong> och en i{" "}
				<strong>personal- och arbetsvetenskap</strong>, vilket gör att jag kan kombinera forskning
				om stress och beteende med praktiska system för att lyckas som företagare.
			</p>

			<p>
				Men jag vet också hur det känns på andra sidan. Jag har själv varit utbränd. Jag körde över
				mina gränser, ignorerade signalerna och till slut sa kroppen stopp. Det var där jag insåg:
				framgång handlar inte om att springa snabbast några månader – utan om att bygga så du
				förblir effektiv och kan prestera på topp i många år framåt.
			</p>

			<p>
				Idag använder jag min kombination av{" "}
				<strong>forskning, säljerfarenhet och egna misstag</strong> för att hjälpa deltidsföretagare
				ta steget fullt ut – utan att bränna ut sig på vägen.
			</p>
		</>
	);

	return (
		<>
			<section className={styles.imageSection}>
				<div className={styles.content}>
					<h2 className={styles.heading}>Möt din föreläsare</h2>
					<div className={styles.bio}>{bioContent}</div>
					<Button onClick={onButtonClick} className={styles.button}>
						Registrera dig nu!
					</Button>
				</div>
			</section>

			<section className={styles.mobileImageSection}>
				<img
					src="/images/DSCF0893.jpg"
					alt="Markus Mattsson, coach och expert på hållbart entreprenörskap"
					className={styles.mobileImage}
				/>
			</section>

			<section className={styles.mobileContentSection}>
				<div className={styles.mobileContent}>
					<h2 className={styles.mobileHeading}>Möt din föreläsare</h2>
					<div className={styles.mobileBio}>{bioContent}</div>
					<Button className={styles.button} onClick={onButtonClick}>
						Registrera dig nu!
					</Button>
				</div>
			</section>
		</>
	);
};

export default Host;
