import team from "../../assets/data/team.json";

function Team() {
	const imagePath = `/src/assets/images/team/`;
	const imageUrl = new URL(imagePath, import.meta.url).href;

	return (
		<section id="team-ctn">
			<h2>Our Teams</h2>

			{team.map((member) => {
				return (
					<figure key={member.id}>
						<img src={imageUrl + member.picture} alt="" />
						<figcaption>
							<p>{member.name}</p>
							<p>{member.role}</p>
						</figcaption>
					</figure>
				);
			})}
		</section>
	);
}

export default Team;
