import React from "react";
import Modal from "../../Modal";
import styles from "./SignupModal.module.css";

interface SignupModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles.signupContent}>
				<h2 className={styles.title}>Registrera dig för webbinariet</h2>
				<p className={styles.subtitle}>
					Få tillgång till mitt GRATIS webbinarium den 22 oktober kl. 19:00
				</p>
				{/* Form will be added here */}
			</div>
		</Modal>
	);
};

export default SignupModal;
