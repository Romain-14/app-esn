import propTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Modal(props) {
	return (
		<aside id="special-offer">
			<button onClick={() => props.setToggleSpecialOffer(false)}>
				<FontAwesomeIcon icon={faXmark} />
			</button>
			<h2>Special Offer</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
				auctor, nunc id aliquet tincidunt, velit nunc lacinia tellus,
				nec ultrices nunc risus id nunc. Sed id nunc auctor, aliquet
				nunc id, ultrices nunc. Sed id nunc auctor, aliquet nunc id,
				ultrices nunc.
			</p>
		</aside>
	);
}

Modal.propTypes = {
	setToggleSpecialOffer: propTypes.func.isRequired,
};

export default Modal;
