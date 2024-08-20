import { Link } from "react-router-dom";

function NotFound() {
	return (
		<main id="not-found">
			<div>
				<p>Sorry Page not found</p>
				<Link to={"/"}>Back to home page</Link>
			</div>
		</main>
	);
}

export default NotFound;
