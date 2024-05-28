import React from 'react';
import styled from 'styled-components';
import { homePageData } from '../assets/data/data'
import HeroImage from '../assets/images/bookshelfHero.webp'
import PaperTexture from '../assets/images/paper.webp'

const HomePage: React.FC = () => {
  const title = homePageData[0]?.hero?.title;
  const subtitle = homePageData[0]?.hero?.subtitle;
  const CTAS = homePageData[1]?.cta;  

  return (
    <Home>
      <HomeContainer>
        <Hero $heroImage={HeroImage}>
          <TitlePanel>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </TitlePanel>
          <Signup>Get Started</Signup>
        </Hero>
        <CTA>
          <PaperImage src={PaperTexture} alt="Paper texture" />
          <CTAGrid>
            {CTAS?.map((cta, index) => (
              <Column key={index}>
                <Heading>{cta.title}</Heading>
                <hr />
                <Text>{cta.text}</Text>
              </Column>
            ))}
          </CTAGrid>
        </CTA>
      </HomeContainer>
    </Home>
  )
};

export default HomePage;

const Home = styled.div`
  width: 100%;
  margin: 0 auto;
  /* @media only screen and (max-width: 768px) {
    padding: 0 5%;
  } */
`
const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`
const Hero = styled.div<{ $heroImage: string }>`
  width: 100%;
  height: 70rem;
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Adjust the alpha value for the tint darkness */
    z-index: 0; /* Ensure the tint layer is below other content */
  }
  background-image: ${({ $heroImage }) => `url(${$heroImage})`};
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 768px) {
    height: 50rem;
  }
`
const TitlePanel = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem 10rem;
  pointer-events: none;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 2.5rem 5rem rgba(0, 0, 0, 0.2);
  background-color: rgba(35, 49, 12, 0.152); 
  backdrop-filter: blur(10px);
  transition: 0.2s;
  opacity: 1; /* Initially hide the element */
  z-index: 2;
  transition: opacity 0.6s ease;
  @media only screen and (max-width: 768px) {
    border-radius: 0;
  }
`
const Title = styled.h1`
  font-family: 'SulphurPoint', sans-serif;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.xxxxxl};
  color: ${({ theme }) => theme.colors.textLight};
  z-index: 1;
  @media only screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xxxxl};
  }
`
const Subtitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  letter-spacing: 0.2rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textLight};
  @media only screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`
const Signup = styled.button`
  position: absolute;
  left: 50%;
  bottom: 4rem;
  transform: translateX(-50%);
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.main};
  border: none;
  border-radius: 1rem;
  padding: 1em 4rem;
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
`
const CTA = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 5rem 0;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding: 3rem 0;
  }
`
const PaperImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  z-index: 0;

`
const CTAGrid = styled.div`
  width: 100%;
  max-width: 120rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  margin-top: 3rem;
  @media only screen and (max-width: 1199px) {
    padding: 0 1rem;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 5rem;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.textLight};
  hr {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.textLight};
    margin: 1rem 0;
    opacity: 0.1;
  }
  @media only screen and (max-width: 768px) {
    text-align: justify;
  }
`
const Heading = styled.h3`
  font-family: 'SulphurPoint', sans-serif;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
  @media only screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`
const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 200;
  line-height: 2rem;
  letter-spacing: 0.2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
  @media only screen and (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`