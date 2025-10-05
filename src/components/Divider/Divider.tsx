import React from "react";
import styles from "./Divider.module.css";

interface DividerProps {
	text: string;
	secondary?: boolean;
}

const Divider: React.FC<DividerProps> = ({ text, secondary = false }) => {
	const dividerClass = secondary
		? `${styles.divider} ${styles.secondary}`
		: `${styles.divider} ${styles.primary}`;

	return (
		<div className={dividerClass}>
			<h1>
				<p>{text}</p>
			</h1>
		</div>
	);
};

export default Divider;
