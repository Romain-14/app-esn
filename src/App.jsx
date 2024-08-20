import { Routes, Route } from "react-router-dom";

import Header from "./Components/Partial/Header";

import Home from "./Components/Pages/Home";
import SignIn from "./Components/Pages/Sign-in";
import SignUp from "./Components/Pages/Sign-up";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import ServicesDetail from "./Components/Pages/ServicesDetail";
import Footer from "./Components/Partial/Footer";
import NotFound from "./Components/Pages/Not-Found";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
				<Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="services/:id" element={<ServicesDetail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
