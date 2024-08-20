import { Link } from "react-router-dom";

function Auth() {
	return (
		<main id="authentication">
			<form>
				<legend>Sign in</legend>

				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" placeholder="Enter your Email" required />

				<label htmlFor="password">Password</label>
				<input type="password" id="password" name="password" placeholder="Enter your Password" required />

				<button type="submit">Login</button>
				<p>
					No account yet ?<br/><Link to={"/sign-up"}>Create Account</Link>
				</p>
			</form>
		</main>
	);
}

export default Auth;
