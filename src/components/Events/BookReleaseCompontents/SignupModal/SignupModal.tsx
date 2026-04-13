import React, { useState } from "react";
import Modal from "../../../Modal";
import styles from "./SignupModal.module.css";
import { useNavigate } from "react-router-dom";

interface SignupModalProps {
	isOpen: boolean;
	onClose: () => void;
	groupId?: string;
	title?: string;
	submitLabel?: string;
}

const DEFAULT_GROUP_ID = "184617321058272592";
const DEFAULT_TITLE = "Registrera dig för föreläsningen";
const DEFAULT_SUBMIT_LABEL = "Registrera mig nu!";

const SignupModal: React.FC<SignupModalProps> = ({
	isOpen,
	onClose,
	groupId = DEFAULT_GROUP_ID,
	title = DEFAULT_TITLE,
	submitLabel = DEFAULT_SUBMIT_LABEL,
}) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const apiToken = import.meta.env.VITE_MAILERLITE_API_TOKEN;

	const navigate = useNavigate();

	const getReadableMailerLiteError = (data: any) => {
		const emailErrors: unknown = data?.errors?.email;
		const emailErrorsArray = Array.isArray(emailErrors) ? emailErrors : [];

		if (emailErrorsArray.some((msg) => typeof msg === "string" && msg.includes("not active"))) {
			return "Den här e-postadressen är inte aktiv i MailerLite och kan inte importeras. Testa en annan adress eller aktivera prenumeranten i MailerLite.";
		}

		if (typeof data?.message === "string" && data.message) return data.message;
		return "Något gick fel... 😞 Försök gärna igen!";
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorMessage("");
		setSuccessMessage("");

		const debugId = `ml_signup_${Date.now()}_${Math.random().toString(16).slice(2)}`;
		const trimmedEmail = email.trim();
		const trimmedName = name.trim();
		const maskedEmail = trimmedEmail ? trimmedEmail.replace(/(^.).*(@.*$)/, "$1***$2") : "";

		console.log("[mailerLite][signup] submit start", {
			debugId,
			groupId,
			hasApiToken: Boolean(apiToken),
			apiTokenLength: typeof apiToken === "string" ? apiToken.length : null,
			nameLength: trimmedName.length,
			email: maskedEmail,
		});

		try {
			const requestBody = {
				email: trimmedEmail,
				fields: {
					name: trimmedName,
				},
				groups: [groupId],
			};

			console.log("[mailerLite][signup] request", {
				debugId,
				url: "https://connect.mailerlite.com/api/subscribers",
				method: "POST",
				body: requestBody,
			});
			console.log("[mailerLite][signup] request json", JSON.stringify({ debugId, body: requestBody }));

			const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `Bearer ${apiToken}`
				},
				body: JSON.stringify(requestBody)
			});

			console.log("[mailerLite][signup] response received", {
				debugId,
				ok: response.ok,
				status: response.status,
				statusText: response.statusText,
			});

			const responseText = await response.text();
			console.log("[mailerLite][signup] response text", responseText);

			let data: any = null;
			try {
				data = responseText ? JSON.parse(responseText) : null;
			} catch (parseError) {
				console.error("[mailerLite][signup] failed to parse json response", {
					debugId,
					ok: response.ok,
					status: response.status,
					statusText: response.statusText,
					parseError,
				});
				throw parseError;
			}

			console.log("[mailerLite][signup] response json", { debugId, data });
			console.log("[mailerLite][signup] response json string", JSON.stringify({ debugId, data }));
			if (data?.errors) {
				console.warn("[mailerLite][signup] response errors json", JSON.stringify({ debugId, errors: data.errors }));
			}

			if (!response.ok) {
				console.warn("[mailerLite][signup] non-2xx response", {
					debugId,
					status: response.status,
					message: data?.message,
					errors: data?.errors,
				});
				console.warn("[mailerLite][signup] non-2xx response json", JSON.stringify({ debugId, status: response.status, message: data?.message, errors: data?.errors }));

				setErrorMessage(getReadableMailerLiteError(data));
				return;
			}

			if (data.errors) {
				console.warn("[mailerLite][signup] mailerlite returned errors", { debugId, errors: data.errors, message: data?.message });
				setErrorMessage(getReadableMailerLiteError(data));
				return;
			}

			console.log("[mailerLite][signup] success - navigating to thank you page", { debugId });
			setSuccessMessage("Tack för att du anmält dig till föreläsningen! Vi ses där! 👋");
			navigate("/events/bookrelease/tack");
		} catch (error) {
			console.error("[mailerLite][signup] submit failed", { debugId, error });
			setErrorMessage("Något gick fel... 😞 Försök gärna igen!");
		}
	};

	const saveButtonDisabled = !name || !email;

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles.signupContent}>
				<h2 className={styles.title}>{title}</h2>
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.formGroup}>
						<label htmlFor="name" className={styles.label}>
							Namn*
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className={styles.input}
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="email" className={styles.label}>
							E-post*
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className={styles.input}
						/>
					</div>
					<p className={styles.requiredNote}>*obligatorisk</p>
					<button
						type="submit"
						className={styles.button + " " + (saveButtonDisabled ? styles.disabled : "")}
						disabled={saveButtonDisabled}
					>
						{submitLabel}
					</button>
					{errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
					{successMessage && <p className={styles.successMessage}>{successMessage}</p>}
					<p className={styles.disclaimer}>
						Genom att skicka in formuläret godkänner du vår{" "}
						<a href="https://www.dothingsyourway.com/integritetspolicy" target="_blank" rel="noopener noreferrer">
							integritetspolicy
						</a>{" "}
						och att vi får kontakta dig angående föreläsningar och relaterade produkter.
					</p>
				</form>
			</div>
		</Modal>
	);
};

export default SignupModal;
