import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Homepage/Header";
import Intro from "../../components/Homepage/Intro";
import Description from "../../components/Homepage/Description";
import AboutMarkus from "../../components/Homepage/AboutMarkus";
import Courses from "../../components/Homepage/Courses";
import Testimonials from "../../components/Homepage/Testimonials";
import Divider from "../../components/Divider";
import styles from "./Home.module.css";

const Home: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Do things your way</title>
				<meta
					content="Jag hälper de som har problem med stress att gå från anställd till företagare."
					name="description"
				/>
			</Helmet>

			<Header />

			<div className={styles.container}>
				<Intro />
				<Divider secondary text="Få betalt för att vara dig själv." />
				<Description />
				<AboutMarkus />
				<Divider secondary text="Jobba inte hårdare, jobba smartare." />
				<Courses />
				<Testimonials />
				<div className={styles.imageWrapper}>
					<img
						alt="En man och en kvinna står på en träbrygga framför en sjö. I bakgrunden syns berg och träd och gråa moln syns på himlen."
						src="/images/matilda-and-markus.jpeg"
					/>
				</div>
				{/* TODO: Add BottomCta component */}
			</div>
		</>
	);
};

export default Home;
