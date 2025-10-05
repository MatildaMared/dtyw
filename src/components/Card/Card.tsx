import React from "react";
import styles from "./Card.module.css";

interface CardProps {
	imgUrl: string;
	altText: string;
	heading: string;
	secondary?: boolean;
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ imgUrl, altText, heading, secondary = false, children }) => {
	const backgroundColor = secondary
		? "var(--color-secondary-lightest)"
		: "var(--color-primary-lightest)";

	return (
		<li className={styles.card} style={{ backgroundColor }}>
			<img src={imgUrl} alt={altText} />
			<h3>{heading}</h3>
			{children}
		</li>
	);
};

export default Card;
