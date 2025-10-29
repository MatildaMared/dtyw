import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

// Import all pages
import Home from "./pages/Home";
import Attgora from "./pages/Assets/Attgora";
import Denhallbara from "./pages/Denhallbara";
import FromStressedToSuccess from "./pages/FromStressedToSuccess";
import Integritetspolicy from "./pages/Integritetspolicy";
import MindsetMeditation from "./pages/MindsetMeditation";
import MindsetMeditationBump from "./pages/MindsetMeditation/Bump";
import Newsletter from "./pages/Newsletter";
import NewsletterBump from "./pages/Newsletter/Bump";
import RevivalSuccessful from "./pages/RevivalSuccessful";
import WebinarTack from "./pages/WebinarTack";

function App() {
	return (
		<>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/assets/attgora" element={<Attgora />} />
					<Route path="/denhallbara" element={<Denhallbara />} />
					<Route path="/webinar" element={<FromStressedToSuccess />} />
					<Route path="/integritetspolicy" element={<Integritetspolicy />} />
					<Route path="/mindsetmeditation" element={<MindsetMeditation />} />
					<Route path="/mindsetmeditation/bump" element={<MindsetMeditationBump />} />
					<Route path="/newsletter" element={<Newsletter />} />
					<Route path="/newsletter/bump" element={<NewsletterBump />} />
					<Route path="/revivalsuccessful" element={<RevivalSuccessful />} />
					<Route path="/webinartack" element={<WebinarTack />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
