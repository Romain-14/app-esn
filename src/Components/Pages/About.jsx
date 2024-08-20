import team1 from "../../assets/images/team/team-1.webp";
import team2 from "../../assets/images/team/team-2.webp";
import location from "../../assets/images/location.webp";
function About() {

  return (
    <main id="about">

        <article>
            <h2>About Us</h2>
            <img src={team1} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquet tincidunt, velit nunc lacinia tellus, nec ultrices nunc risus id nunc. Sed id nunc auctor, aliquet nunc id, ultrices nunc. Sed id nunc auctor, aliquet nunc id, ultrices nunc.</p>
        </article>

        <hr />

        <article>
            <h2>Our Team</h2>
            <img src={team2} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquet tincidunt, velit nunc lacinia tellus, nec ultrices nunc risus id nunc. Sed id nunc auctor, aliquet nunc id, ultrices nunc. Sed id nunc auctor, aliquet nunc id, ultrices nunc.</p>
        </article>

        <hr />

        <article>
            <h2>Our Mission</h2>
            <img src={location} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquet tincidunt, velit nunc lacinia tellus, nec ultrices nunc risus id nunc. Sed id nunc auctor, aliquet nunc id, ultrices nunc. Sed id nunc auctor, aliquet nunc id, ultrices nunc.</p>
        </article>
    
    </main>

  )
}

export default About