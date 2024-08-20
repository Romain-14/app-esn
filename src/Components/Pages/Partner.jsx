import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faApple,
	faGoogle,
	faAmazon,
} from "@fortawesome/free-brands-svg-icons";

function Partner() {
	return (
		<section>
			<h2>Our Partners</h2>
			<aside>
				<a
					href="https://www.facebook.com/"
					title="Go to facebook website"
					target="_blank"
				>
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<a
					href="https://www.apple.com/"
					title="Go to apple website"
					target="_blank"
				>
					<FontAwesomeIcon icon={faApple} />
				</a>
				<a
					href="https://www.google.com/"
					title="Go to google website"
					target="_blank"
				>
					<FontAwesomeIcon icon={faGoogle} />
				</a>
				<a
					href="https://www.amazon.com/"
					title="Go to amazon website"
					target="_blank"
				>
					<FontAwesomeIcon icon={faAmazon} />
				</a>
			</aside>
		</section>
	);
}

export default Partner;
