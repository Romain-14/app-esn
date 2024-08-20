import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import services from "../../assets/data/services.json";

function Services() {
	return (
		<section id="service-list">
			<h2>Our Services</h2>

			<ul>
				{services.map((service) => {
					return (
						<Link to={`/services/${service.id}`} key={service.id}>
							<li key={service.id}>
								<FontAwesomeIcon icon={faArrowRight} />{" "}
								{service.name}
							</li>
						</Link>
					);
				})}
			</ul>
		</section>
	);
}

export default Services;
