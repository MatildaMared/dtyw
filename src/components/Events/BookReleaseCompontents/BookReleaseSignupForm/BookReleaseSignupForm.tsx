import React, { useEffect, useRef } from "react";
import styles from "./BookReleaseSignupForm.module.css";

export const BOOK_RELEASE_SIGNUP_SECTION_ID = "book-release-signup";

export function scrollToBookReleaseSignup(): void {
	document.getElementById(BOOK_RELEASE_SIGNUP_SECTION_ID)?.scrollIntoView({
		behavior: "smooth",
		block: "start",
	});
}

const DEFAULT_TITLE = "Registrera dig för föreläsningen";

const MAILERLITE_SCRIPT_SRC = "https://assets.mailerlite.com/js/universal.js";
const MAILERLITE_ACCOUNT_ID = "303786";
const MAILERLITE_FORM_ID = "NDN7ip";

type MlFn = ((...args: unknown[]) => void) & { q?: unknown[] };

function loadMailerLiteEmbedded(): void {
	const w = window as Window & { ml?: MlFn };
	w.ml =
		w.ml ||
		function (...args: unknown[]) {
			(w.ml!.q = w.ml!.q || []).push(args);
		};

	if (!document.querySelector(`script[src="${MAILERLITE_SCRIPT_SRC}"]`)) {
		const script = document.createElement("script");
		script.async = true;
		script.src = MAILERLITE_SCRIPT_SRC;
		const firstScript = document.getElementsByTagName("script")[0];
		firstScript.parentNode!.insertBefore(script, firstScript);
	}

	w.ml("account", MAILERLITE_ACCOUNT_ID);
}

interface BookReleaseSignupFormProps {
	title?: string;
}

const BookReleaseSignupForm: React.FC<BookReleaseSignupFormProps> = ({
	title = DEFAULT_TITLE,
}) => {
	const formHostRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const host = formHostRef.current;
		if (!host) return;

		host.innerHTML = "";
		const embed = document.createElement("div");
		embed.className = "ml-embedded";
		embed.setAttribute("data-form", MAILERLITE_FORM_ID);
		host.appendChild(embed);

		queueMicrotask(() => {
			loadMailerLiteEmbedded();
		});
	}, []);

	return (
		<section id={BOOK_RELEASE_SIGNUP_SECTION_ID} className={styles.section}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.formHost} ref={formHostRef} />
		</section>
	);
};

export default BookReleaseSignupForm;
