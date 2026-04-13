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

const DEFAULT_GROUP_ID = "169632568636868521";
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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorMessage("");
		setSuccessMessage("");

		try {
			const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `Bearer ${apiToken}`
				},
				body: JSON.stringify({
					email: email,
					fields: {
						name: name,
					},
					groups: [groupId]
				})
			});

			const data = await response.json();

			if (data.errors) {
				setErrorMessage(data?.message);
				return;
			}

			setSuccessMessage("Tack för att du anmält dig till föreläsningen! Vi ses där! 👋");
			navigate("/events/bookrelease/tack");
		} catch (error) {
			console.error(error);
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
