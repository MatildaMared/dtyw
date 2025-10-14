import React from "react";
import { MapPin, Phone, Box, AtSign, Instagram, Facebook } from "react-feather";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<a href="/">
					<img src="/images/logo-white.png" alt="Do things your way" />
				</a>
				<div className={styles.divider} />
				<section className={styles.contact}>
					<div className={styles.contactInfo}>
						<h2 className={styles.title}>Markus Mattsson</h2>
						<p>
							<MapPin className={styles.icon} size={16} strokeWidth={1} />
							<span>Broddesonsgatan 24, 30234 Halmstad</span>
						</p>
						<p>
							<Phone size={16} strokeWidth={1} />
							<span>073 81 80 343</span>
						</p>
						<p>
							<Box size={16} strokeWidth={1} />
							<span> Org.nr: SE900306053101 </span>
						</p>
					</div>
					<div className={styles.social}>
						<h2 className={styles.title}>Sociala Medier</h2>
						<a href="mailto:markus@dothingsyourway.com">
							<span> markus@dothingsyourway.com </span>
							<AtSign size={16} strokeWidth={1} />
						</a>
						<a
							href="https://www.facebook.com/dothingsyourway"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>facebook.com/dothingsyourway</span>
							<Facebook size={16} strokeWidth={1} />
						</a>
						<a
							href="https://www.instagram.com/dothingsyourway"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>dothingsyourway</span>
							<Instagram size={16} strokeWidth={1} />
						</a>
					</div>
				</section>
				<div className={styles.divider} />
				<section className={styles.copyright}>
					<div className={styles.links}>
						<a href="/integritetspolicy">Integritetspolicy</a>
						<a
							href="https://www.flaticon.com/authors/gowi"
							target="_blank"
							rel="noopener noreferrer"
						>
							Icons by GOWI
						</a>
					</div>
					<div className={styles.copyrightRight}>
						<p>© {year} Markus Mattsson</p>
						<p className={styles.disclaimer}>
							Disclaimer: This page is not part of the Facebook™ website or Meta Platforms Inc.
							It is not endorsed by Facebook™ in any way. Facebook™ is a trademark of Meta Platforms Inc.
						</p>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
