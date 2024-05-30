import React, { useState } from 'react'
import { Container, Header, Form, InputContainer, Label, Input, SecondaryButton, PrimaryButton } from './styles'

const Login: React.FC<{ toggle: () => void }> = ({ toggle }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	// const navigate = useNavigate()

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	const handleLogin = async () => {
		// Store the token in localStorage
		// localStorage.setItem('token', token)

		// await setLoggedInUser(user)

		// console.log('Login - userdetails: ', user)
		// // Redirect to the dashboard page with user data
		// navigate('/dashboard')
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			// Perform the request to fetch the user data
			// const { user, token } = await loginUser(email, password)

			// handleLogin(user, token)
		} catch (err) {
			console.error('Error while logging in:', err)
			// Handle the error (e.g., show an error message to the user)
		}
	}

	return (
			<Container>
        <Header>
          <h2>Login</h2>
        </Header>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </InputContainer>
          <SecondaryButton className='signup'>
            Don't have an account? <button onClick={toggle}>Sign up</button>
          </SecondaryButton>
          <PrimaryButton type="submit">Login</PrimaryButton>
        </Form>   
      </Container>
	)
}

export default Login

