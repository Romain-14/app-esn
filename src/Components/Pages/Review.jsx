import reviews from "../../assets/data/reviews.json";

function Review() {
	const imagePath = `/src/assets/images/customer/`;
	const imageUrl = new URL(imagePath, import.meta.url).href;

	function computeStar(stars) {
		const star = "⭐";
		return star.repeat(stars);
	}

	return (
		<section id="review">
			<h2>Customers reviews</h2>

			{reviews.map((review) => {
				return (
					<article key={review.id}>
						<div>
							<img src={imageUrl + review.picture} alt="" />
						</div>
						<div>
							<div>
								<h3>{review.author}</h3>
								<p>{computeStar(review.stars)}</p>
							</div>
							<p>{review.content}</p>
						</div>
					</article>
				);
			})}
		</section>
	);
}

export default Review;
