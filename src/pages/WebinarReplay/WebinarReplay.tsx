import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import styles from "./WebinarReplay.module.css";

const EXPIRATION_TIMESTAMP = new Date("2025-11-16T23:59:00+01:00").getTime();
const VIDEO_URL = "https://player.vimeo.com/video/1136236173";

const WebinarReplay: React.FC = () => {
	const [isExpired, setIsExpired] = useState(() => Date.now() > EXPIRATION_TIMESTAMP);
	const [timeLeft, setTimeLeft] = useState(() => Math.max(EXPIRATION_TIMESTAMP - Date.now(), 0));

	const formattedCountdown = useMemo(() => {
		const totalSeconds = Math.floor(timeLeft / 1000);
		const days = Math.floor(totalSeconds / 86400);
		const hours = Math.floor((totalSeconds % 86400) / 3600);
		const minutes = Math.floor((totalSeconds % 3600) / 60);
		const seconds = totalSeconds % 60;

		return {
			days: days.toString().padStart(2, "0"),
			hours: hours.toString().padStart(2, "0"),
			minutes: minutes.toString().padStart(2, "0"),
			seconds: seconds.toString().padStart(2, "0"),
		};
	}, [timeLeft]);

	useEffect(() => {
		if (isExpired) {
			return;
		}

		const intervalId = window.setInterval(() => {
			const now = Date.now();

			if (now > EXPIRATION_TIMESTAMP) {
				setIsExpired(true);
				setTimeLeft(0);
				window.clearInterval(intervalId);
				return;
			}

			setTimeLeft(EXPIRATION_TIMESTAMP - now);
		}, 30_000);

		return () => {
			window.clearInterval(intervalId);
		};
	}, [isExpired]);

	useEffect(() => {
		if (isExpired) {
			return;
		}

		const timerId = window.setInterval(() => {
			setTimeLeft((prev) => Math.max(prev - 1000, 0));
		}, 1_000);

		return () => {
			window.clearInterval(timerId);
		};
	}, [isExpired]);

	return (
		<>
			<Helmet>
				<title>
					Repris: Från stressad deltidsföretagare till ett hållbart heltidsföretag | Do things your way
				</title>
				<meta
					name="description"
					content="Se reprisen av webbinariet Från stressad deltidsföretagare till ett hållbart heltidsföretag innan den stängs."
				/>
			</Helmet>

			<section className={styles.wrapper}>
				<div className={styles.content}>
					{isExpired ? (
						<>
							<h1>Reprisen är stängd</h1>
							<p>
								Tyvärr, reprisen är inte längre tillgänglig. Håll utkik efter kommande webbinarium –
								men du kan fortfarande boka ett kostnadsfritt strategisamtal nedan.
							</p>
						</>
					) : (
						<>
							<h1>Titta på webbinariet</h1>
							<p>
								Reprisen av webbinariet Från stressad deltidsföretagare till ett hållbart heltidsföretag är
								tillgänglig fram till 16 november 2025 klockan 23:59.
							</p>
							<div className={styles.countdown}>
								<div className={styles.countdownItem}>
									<span className={styles.countdownValue}>{formattedCountdown.days}</span>
									<span className={styles.countdownLabel}>dagar</span>
								</div>
								<div className={styles.countdownItem}>
									<span className={styles.countdownValue}>{formattedCountdown.hours}</span>
									<span className={styles.countdownLabel}>timmar</span>
								</div>
								<div className={styles.countdownItem}>
									<span className={styles.countdownValue}>{formattedCountdown.minutes}</span>
									<span className={styles.countdownLabel}>minuter</span>
								</div>
								<div className={styles.countdownItem}>
									<span className={styles.countdownValue}>{formattedCountdown.seconds}</span>
									<span className={styles.countdownLabel}>sekunder</span>
								</div>
							</div>
							<div className={styles.videoContainer}>
								<iframe
									className={styles.video}
									src={VIDEO_URL}
									title="Webinarrepris"
									allow="autoplay; fullscreen; picture-in-picture"
									allowFullScreen
									loading="lazy"
								></iframe>
							</div>
						</>
					)}
					<div className={styles.ctaSection}>
						<p className={styles.ctaText}>
							Vill du ta nästa steg? Boka ett kostnadsfritt strategisamtal så hjälps vi åt att hitta rätt
							plan för dig.
						</p>
						<a
							className={styles.ctaButton}
							href="https://koalendar.com/e/strategisamtal-markus"
							target="_blank"
							rel="noreferrer"
						>
							Boka ett kostnadsfritt strategisamtal
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default WebinarReplay;