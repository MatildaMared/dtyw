import React from "react";
import styles from "./Heading.module.css";

const Heading: React.FC = () => {
	return (
		<p className={styles.heading}>
			Bli fri från stressen <span className={styles.subHeading}>och lev ditt drömliv</span>
		</p>
	);
};

export default Heading;
