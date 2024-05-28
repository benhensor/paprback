import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AboutPage: React.FC = () => (
	<section>
		<Container>
      <h1>About Paprback</h1>
      <Blocks>
        
        <Block>
          <h2>Our Mission</h2>
          <p>At Paprback, we believe that everyone should have access to books. We are passionate about reading and want to make it easy for people to discover new books, share their old books and connect with other book lovers.</p>
        </Block>
        <Block>
          <h2>Our Story</h2>
          <p>Paprback was founded in 2021 by a group of friends who wanted to create a platform where people could share their love of reading. We are a small team of book lovers who are dedicated to making reading more accessible to everyone.</p>
        </Block>
        
      </Blocks>
			<Link to="/dashboard"><GetStarted>Get Started</GetStarted></Link>
      
      
    </Container>
	</section>
)

export default AboutPage


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div:nth-child(1) {
    align-self: flex-start;
  }
  > div:nth-child(2) {
    align-self: flex-end;
  }
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  max-width: 60rem;
  text-align: justify;
`

const GetStarted = styled.button`
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.main};
  border: none;
  border-radius: 1rem;
  padding: 1rem 4rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-transform: uppercase;
  box-shadow: inset 2px 2px 4px rgba(255, 248, 212, 0.81),
              inset -2px -2px 8px rgba(0, 0, 0, 0.4);
  &:hover {
    background-color: ${({ theme }) => theme.colors.mainHover};
    color: ${({ theme }) => theme.colors.textDark};
  }
  &:active {
  box-shadow: inset -2px -2px 4px rgba(255, 248, 212, 0.81),
              inset 2px 2px 8px rgba(0, 0, 0, 0.4);
  }
  @media only screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
    padding: 1rem 3rem;
  }
  @media only screen and (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
    padding: 1rem 3rem;
  }
`