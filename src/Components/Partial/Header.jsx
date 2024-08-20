
import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <h1>
            <Link to="/" title="Go to the home page">My App</Link>
        </h1>
        <nav>          
            <NavLink to="about" title="Go to the about page">About</NavLink>
            <NavLink to="sign-in" title="Go to the authentication page">Sign In</NavLink>
        </nav>
    </header>
  )
}

export default Header