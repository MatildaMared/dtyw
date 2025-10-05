import React, { useEffect, useRef } from "react";
import { X } from "react-feather";
import styles from "./Modal.module.css";

interface ModalProps {
	showModal: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ showModal, onClose, children }) => {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
				return;
			}

			if (e.key === "Tab" && modalRef.current) {
				// trap focus
				const nodes = modalRef.current.querySelectorAll("*");
				const tabbable = Array.from(nodes).filter((n) => (n as HTMLElement).tabIndex >= 0);

				let index = tabbable.indexOf(document.activeElement as Element);
				if (index === -1 && e.shiftKey) index = 0;

				index += tabbable.length + (e.shiftKey ? -1 : 1);
				index %= tabbable.length;

				(tabbable[index] as HTMLElement).focus();
				e.preventDefault();
			}
		};

		if (showModal) {
			document.addEventListener("keydown", handleKeydown);
		}

		return () => {
			document.removeEventListener("keydown", handleKeydown);
		};
	}, [showModal, onClose]);

	if (!showModal) return null;

	return (
		<>
			<div className={styles.modalBackground} onClick={onClose}></div>
			<div className={styles.modal} ref={modalRef}>
				<button className={styles.closeBtn} onClick={onClose}>
					<span className="screen-reader-text">Stäng fönster</span>
					<X />
				</button>
				{children}
			</div>
		</>
	);
};

export default Modal;
