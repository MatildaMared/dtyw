import React from "react";
import type { Testimonial } from "../../../interfaces/Testimonial";
import styles from "./Testimonial.module.css";

interface TestimonialProps {
	testimonial: Testimonial;
}

const TestimonialComponent: React.FC<TestimonialProps> = ({ testimonial }) => {
	const { name, image, text } = testimonial;

	return (
		<article className={styles.testimonial}>
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<p>{text}</p>
		</article>
	);
};

export default TestimonialComponent;
