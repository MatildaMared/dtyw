import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import testimonials from "../../../data/testimonials";
import Testimonial from "./Testimonial";
import styles from "./Testimonials.module.css";

const Testimonials: React.FC = () => {
	const elementWidth = 332;
	const [windowWidth, setWindowWidth] = useState(0);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const getNumToDisplay = () => {
		if (windowWidth > 1000) return 3;
		if (windowWidth > 680) return 2;
		return 1;
	};

	const numToDisplay = getNumToDisplay();
	const totalWidth = elementWidth * numToDisplay;
	const atStart = offset === 0;
	const atEnd = offset <= elementWidth * (testimonials.length - numToDisplay) * -1;

	const scroll = (direction: "left" | "right") => {
		if (direction === "left" && !atStart) {
			setOffset(offset + elementWidth);
		} else if (direction === "right" && !atEnd) {
			setOffset(offset - elementWidth);
		}
	};

	return (
		<section className={styles.section}>
			<h2>Detta säger tidigare kunder..</h2>
			<div className={styles.testimonialsContainer} style={{ width: `${totalWidth}px` }}>
				<div className={styles.testimonials} style={{ transform: `translateX(${offset}px)` }}>
					{testimonials.map((testimonial, index) => (
						<Testimonial key={index} testimonial={testimonial} />
					))}
				</div>
			</div>
			<div className={styles.buttons}>
				<button onClick={() => scroll("left")} disabled={atStart} aria-label="Föregående">
					<ChevronLeft />
					<span className={styles.screenReaderText}>Föregående</span>
				</button>
				<button onClick={() => scroll("right")} disabled={atEnd} aria-label="Nästa">
					<ChevronRight />
					<span className={styles.screenReaderText}>Nästa</span>
				</button>
			</div>
		</section>
	);
};

export default Testimonials;
