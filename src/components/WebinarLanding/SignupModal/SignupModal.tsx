import React, { useState } from "react";
import Modal from "../../Modal";
import styles from "./SignupModal.module.css";
import { useNavigate } from "react-router-dom";

interface SignupModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
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
						phone: phone
					},
					groups: ["168177170734122174"]
				})
			});

			const data = await response.json();

			if (data.errors) {
				setErrorMessage(data?.message);
				return;
			}

			setSuccessMessage("Tack för att du anmält dig till webbinariet! Vi ses där! 👋");
			navigate("/webinartack");
		} catch (error) {
			console.error(error);
			setErrorMessage("Något gick fel... 😞 Försök gärna igen!");
		}
	};

	const saveButtonDisabled = !name || !email || !phone;

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles.signupContent}>
				<h2 className={styles.title}>Registrera dig för webbinariet</h2>
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
					<div className={styles.formGroup}>
						<label htmlFor="phone" className={styles.label}>
							Telefonnummer*
						</label>
						<input
							type="tel"
							id="phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
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
						Registrera mig nu!
					</button>
					{errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
					{successMessage && <p className={styles.successMessage}>{successMessage}</p>}
					<p className={styles.disclaimer}>
						Genom att skicka in formuläret godkänner du vår{" "}
						<a href="https://www.dothingsyourway.com/integritetspolicy" target="_blank" rel="noopener noreferrer">
							integritetspolicy
						</a>{" "}
						och att vi får kontakta dig angående webbinariet och relaterade utbildningar.
					</p>
				</form>
			</div>
		</Modal>
	);
};

export default SignupModal;
