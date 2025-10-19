import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Button from "../../components/Button";
import styles from "./WebinarTack.module.css";

const WebinarTack: React.FC = () => {
	// Scroll to top when component mounts
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    useEffect(() => {
        window.scrollTo(0, 0);
      
        // 🔹 Trigger Google Ads conversion event
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-757437746/4JwmCJS63K8bELKqlukC'
          });
          console.log('✅ Google Ads conversion event fired');
        } else {
          console.warn('⚠️ gtag not found – check that your global site tag is loaded.');
        }
      }, []);
      

	const handleGoogleCalendarClick = () => {
		window.open('https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20251022T170000Z%2F20251022T183000Z&details=F%C3%B6r%20dig%20som%20driver%20f%C3%B6retag%20vid%20sidan%20om%20jobbet%20%E2%80%93%20och%20vill%20satsa%20p%C3%A5%20ditt%20f%C3%B6retag%20utan%20att%20br%C3%A4nna%20ut%20dig%20sj%C3%A4lv&location=https%3A%2F%2Fus02web.zoom.us%2Fj%2F86023865294&text=Fr%C3%A5n%20stressad%20deltidsf%C3%B6retagare%20till%20ett%20h%C3%A5llbart%20heltidsf%C3%B6retag', '_blank');
	};

	const handleOutlookCalendarClick = () => {
		window.open('https://outlook.live.com/calendar/0/action/compose?allday=false&body=F%C3%B6r%20dig%20som%20driver%20f%C3%B6retag%20vid%20sidan%20om%20jobbet%20%E2%80%93%20och%20vill%20satsa%20p%C3%A5%20ditt%20f%C3%B6retag%20utan%20att%20br%C3%A4nna%20ut%20dig%20sj%C3%A4lv&enddt=2025-10-22T20%3A30%3A00&location=https%3A%2F%2Fus02web.zoom.us%2Fj%2F86023865294&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2025-10-22T19%3A00%3A00&subject=Fr%C3%A5n%20stressad%20deltidsf%C3%B6retagare%20till%20ett%20h%C3%A5llbart%20heltidsf%C3%B6retag', '_blank');
	};

	return (
		<>
			<Helmet>
				<title>
					Du är anmäld till webbinariet! - Do things your way
				</title>
				<meta
					content="Tack för din anmälan till webbinariet den 22 oktober kl. 19:00. Här hittar du videon och all information du behöver."
					name="description"
				/>
			</Helmet>

			<div className={styles.container}>
				<section className={styles.heroSection}>
					<div className={styles.heroContent}>
						<h1 className={styles.mainTitle}>✅ Du är anmäld!</h1>
						
						<h2 className={styles.subtitle}>
							🔥 Nu börjar resan mot ett hållbart och framgångsrikt heltidsföretag
						</h2>

						<div className={styles.eventInfo}>
							<div className={styles.eventItem}>
								<span className={styles.eventLabel}>📅 Datum:</span>
								<span className={styles.eventValue}>22 oktober</span>
							</div>
							<div className={styles.eventItem}>
								<span className={styles.eventLabel}>🕖 Tid:</span>
								<span className={styles.eventValue}>19:00 (live)</span>
							</div>
							<div className={styles.eventItem}>
								<span className={styles.eventLabel}>⏰ Varaktighet:</span>
								<span className={styles.eventValue}>Ca 90 minuter</span>
							</div>
						</div>

						<p className={styles.introText}>
							Här är 3 saker du kan göra redan nu:
						</p>
					</div>
				</section>

				<section className={styles.videoSection}>
					<div className={styles.sectionContent}>
						<h3 className={styles.sectionTitle}>🎥 1. Titta på videon direkt</h3>
						
						<p className={styles.videoDescription}>
							I videon delar jag <strong>hemligheten som nästan ingen känner till</strong> –<br/>
							hur du kan förändra din <strong>stressrespons för alltid</strong><br/>
							och använda stress som <strong>din största källa till kraft och fokus</strong>.
						</p>
						
						<p className={styles.chatgptNote}>
							När jag förklarade hemligheten för ChatGPT så uppskattade den att <em>99 % inte känner till detta.</em>
						</p>
						
						<p className={styles.callToAction}>
							👉 <strong>Tryck på "Unmute" – det här är grunden till allt jag lär ut.</strong>
						</p>

						<div className={styles.videoContainer}>
							<div className={styles.vimeoWrapper}>
								<iframe 
									src="https://player.vimeo.com/video/1126952733?h=5a69ea5d80&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1" 
									frameBorder="0" 
									allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
									referrerPolicy="strict-origin-when-cross-origin" 
									title="Hemligheten om stress"
									className={styles.vimeoIframe}
								></iframe>
							</div>
						</div>
					</div>
				</section>

				<section className={styles.calendarSection}>
					<div className={styles.sectionContent}>
						<h3 className={styles.sectionTitle}>📆 2. Lägg till i kalendern</h3>
						
						<p className={styles.calendarDescription}>
							Klicka på knappen nedan för att lägga till webbinariet direkt i din kalender:
						</p>

						<div className={styles.buttonContainer}>
							<Button onClick={handleGoogleCalendarClick}>
								Lägg till i Google Kalender
							</Button>
							<Button onClick={handleOutlookCalendarClick}>
								Lägg till i Outlook
							</Button>
						</div>

						<p className={styles.manualInfo}>
							Du kan också skriva in det manuellt:
						</p>
						
						<div className={styles.manualEvent}>
							<strong>Tisdag 22 oktober kl. 19:00</strong><br/>
							"Från stressad deltidsföretagare till ett hållbart heltidsföretag"
						</div>
					</div>
				</section>

				<section className={styles.emailSection}>
					<div className={styles.sectionContent}>
						<h3 className={styles.sectionTitle}>✉️ 3. Kolla din mail</h3>
						
						<p className={styles.emailDescription}>
							Du får strax ett mail med all info och länken till sändningen.
						</p>
						
						<p className={styles.spamNote}>
							Om du inte hittar det – kika i skräpposten (eller "kampanjer"-fliken).
						</p>
					</div>
				</section>

				<section className={styles.footerSection}>
					<div className={styles.sectionContent}>
						<h3 className={styles.sectionTitle}>👋 Vi ses live den 22 oktober kl. 19:00</h3>
						
						<p className={styles.footerText}>
							Ta fram anteckningsboken, häll upp något gott –<br/>
							och gör dig redo för 90 minuter som ger dig <strong>kraften, lugnet och strukturen du behöver för att bygga upp ditt företag – och äntligen bli fri.</strong>
						</p>
						
						<p className={styles.signature}>
							/ <strong>Markus</strong>
						</p>
					</div>
				</section>
			</div>
		</>
	);
};

export default WebinarTack;
