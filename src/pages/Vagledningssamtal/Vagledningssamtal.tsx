import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Vagledningssamtal: React.FC = () => {
	useEffect(() => {
		// Redirect to external URL
		window.location.href = "https://bygg-ditt-foretag-pwwi315.gamma.site/";
	}, []);

	return (
		<>
			<Helmet>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Boka ditt vägledningssamtal</title>
				<meta httpEquiv="refresh" content="0;url=https://bygg-ditt-foretag-pwwi315.gamma.site/" />
			</Helmet>

			<main>
				<p>omdirigerar...</p>
			</main>
		</>
	);
};

export default Vagledningssamtal;
