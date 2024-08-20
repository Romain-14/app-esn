

function SignUp() {
  return (
    <main id="authentication">
			<form>
				<legend>Sign up</legend>

				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" required />

				<label htmlFor="password">Password</label>
				<input type="password" id="password" name="password" required />

				<button type="submit">Send</button>
				
			</form>
		</main>
  )
}

export default SignUp