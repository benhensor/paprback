import React from 'react'
import {
	Container,
	Header,
	Form,
	FormColumns,
	FormColumn,
	InputContainer,
	Label,
	Input,
	SecondaryButton,
	PrimaryButton,
} from './styles'

const Signup: React.FC<{ toggle: () => void }> = ({ toggle }) => {
	return (
		<Container>
			<Header>
				<h2>Sign up</h2>
			</Header>
			<Form>
				<FormColumns>
					<FormColumn>
						<InputContainer>
							<Label htmlFor="username">Username</Label>
							<Input
								type="username"
								id="username"
								name="username"
								required
							/>
						</InputContainer>
						<InputContainer>
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								id="email"
								name="email"
								required
							/>
						</InputContainer>
						<InputContainer>
							<Label htmlFor="password">Password</Label>
							<Input
								type="password"
								id="password"
								name="password"
								required
							/>
						</InputContainer>
						<InputContainer>
							<Label htmlFor="confirmPassword">
								Confirm password
							</Label>
							<Input
								type="password"
								id="confirmPassword"
								name="confirmPassword"
								required
							/>
						</InputContainer>
            <InputContainer>
							<Label htmlFor="tel">Phone</Label>
							<Input type="tel" id="tel" name="tel" required />
						</InputContainer>
					</FormColumn>

					<FormColumn>
						
						<InputContainer>
							<Label htmlFor="address">Address Line 1</Label>
							<Input
								type="text"
								id="address"
								name="address"
								required
							/>
						</InputContainer>
						<InputContainer>
							<Label htmlFor="address">Address Line 2</Label>
							<Input
								type="text"
								id="address"
								name="address"
								required
							/>
						</InputContainer>
						<InputContainer>
							<Label htmlFor="city">City</Label>
							<Input type="text" id="city" name="city" required />
						</InputContainer>
						<InputContainer>
							<Label htmlFor="postcode">Post Code</Label>
							<Input
								type="text"
								id="postcode"
								name="postcode"
								required
							/>
						</InputContainer>
            <SecondaryButton>
						Already have an account?{' '}
						<button onClick={toggle}>Log in</button>
					</SecondaryButton>
          <PrimaryButton>Sign up</PrimaryButton>
					</FormColumn>
				</FormColumns>
			</Form>
		</Container>
	)
}

export default Signup
