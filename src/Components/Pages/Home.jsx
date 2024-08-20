import { useEffect, useState } from "react";

import location from "../../assets/images/location.webp";
import Modal from "./Modal";
import Services from "./Services";
import Team from "./Team";
import Partner from "./Partner";
import Review from "./Review";

function Home() {
	const [toggleSpecialOffer, setToggleSpecialOffer] = useState(false);

	useEffect(() => {
		const id = setTimeout(() => {
			setToggleSpecialOffer(!toggleSpecialOffer);
		}, 5000);
		return () => {
			clearTimeout(id);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main id="home">
			{toggleSpecialOffer && (
				<Modal setToggleSpecialOffer={setToggleSpecialOffer} />
			)}

			<img src={location} alt="" />

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
				auctor, nunc id aliquet tincidunt, velit nunc lacinia tellus,
				nec ultrices nunc risus id nunc. Sed id nunc auctor, aliquet
				nunc id, ultrices nunc. Sed id nunc auctor, aliquet nunc id,
				ultrices nunc.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
				auctor, nunc id aliquet tincidunt, velit nunc lacinia tellus,
				nec ultrices nunc risus id nunc.
			</p>

			<hr />
			<Services />
			<hr />
			<Team />
			<hr />
			<Partner />
			<hr />
			<Review />
		</main>
	);
}

export default Home;
