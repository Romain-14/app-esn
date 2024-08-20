import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import services from "../../assets/data/services.json";

function ServicesDetail() {
	const { id } = useParams();
	const [service, setService] = useState(null);

    const imagePath = `/src/assets/images/`;
    const imageUrl = new URL(imagePath, import.meta.url).href;

	useEffect(() => {
		services.find((service) => {
			if (service.id === parseInt(id)) {
				setService(service);
			}
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!service) {
		return <h2>Service not found</h2>;
	} else
		return (
			<main id="service-detail">
				<article>
					<h2>{service.name}</h2>
					<img src={imageUrl + service.image} alt={service.name} />
					<p>{service.description}</p>
					<p>{service.price} €</p>
				</article>
			</main>
		);
}

export default ServicesDetail;
