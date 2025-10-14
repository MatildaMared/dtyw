import React from "react";
import styles from "./Divider.module.css";

interface DividerProps {
	text: string;
	secondary?: boolean;
	primaryDark?: boolean;
}

const Divider: React.FC<DividerProps> = ({ text, secondary = false, primaryDark = false }) => {
	let dividerClass = styles.divider;
	if (primaryDark) {
		dividerClass += ` ${styles.primaryDark}`;
	} else if (secondary) {
		dividerClass += ` ${styles.secondary}`;
	} else {
		dividerClass += ` ${styles.primary}`;
	}

	const formatText = (text: string) => {
		// Split text at the first space after emoji to separate emoji from text
		const match = text.match(/^(\S+)\s+(.+)$/);
		if (match) {
			const [, emoji, restOfText] = match;
			return (
				<>
					<span style={{ fontStyle: "normal" }}>{emoji}</span> {restOfText}
				</>
			);
		}
		return text;
	};

	return (
		<div className={dividerClass}>
			<h1>
				<p>{formatText(text)}</p>
			</h1>
		</div>
	);
};

export default Divider;
