import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/icons/paprback_logo_white.svg'
import gbWhite from '../../assets/icons/gbWhite.svg'
import ytWhite from '../../assets/icons/ytWhite.svg'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <FooterContainer>
      <ContentContainer>
        <FooterContent>
          <CompanyDetails>
            <h4 className="footer-link">Customer Services</h4>
              <CompanyLink className="footer-link">Contact Us</CompanyLink>
              <CompanyLink className="footer-link">Customer Service</CompanyLink>
              <CompanyLink className="footer-link">FAQ</CompanyLink>
              <CompanyLink className="footer-link">Shipping & Delivery</CompanyLink>
              <CompanyLink className="footer-link">Company Information</CompanyLink>
              <CompanyLink className="footer-link">Careers</CompanyLink>
              <CompanyLink className="footer-link">Privacy & Cookies</CompanyLink>
              <CompanyLink className="footer-link">Terms & Conditions</CompanyLink>
          </CompanyDetails>
          <FooterBranding>
            <LogoContainer>
              <FooterLogo src={Logo} alt="Paprback Logo" />
            </LogoContainer>
            <Copyright>&#169; {year} <a href="https://benhensordev.netlify.app/" rel="noreferrer" target="_blank">Ben Hensor</a></Copyright>
            <FooterSocials>
              <a href="https://github.com/benhensor/paprback" rel='noreferrer' target='_blank'>
                <FooterSocialIcon src={gbWhite} alt="gitHub" />
              </a>
              <a href="https://www.youtube.com/watch?v=UB3zVqyRQZQ" rel='noreferrer' target='_blank'>
                <FooterSocialIcon src={ytWhite} alt="youtube" />
              </a>
            </FooterSocials>
          </FooterBranding>
        </FooterContent>
      </ContentContainer>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.quaternary};
  text-align: center;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
  min-height: 15rem;
`

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 120rem;
  padding: 3rem 0;
  @media screen and (max-width: 1199px) {
    padding: 3rem 1rem;
  }
`

const FooterContent = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    order: -1;
  }
`

const CompanyDetails = styled.div`
  text-align: left;
  h4 {
    color: ${({ theme }) => theme.colors.senary};
  }
`

const CompanyLink = styled.p`
  color: ${({ theme }) => theme.colors.copyDkBg};
  font-size: ${({ theme }) => theme.fontSizes.s};
  transition: .12s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

const FooterBranding = styled.div`
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogoContainer = styled.div`
  margin-top: 2rem;
`

const FooterLogo = styled.img`
  width: 14rem;
  fill: var(--background);
`

const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
`

const FooterSocialIcon = styled.img`
  margin: 0 0.5vw;
  width: 25px;
  fill: var(--background);
  opacity: 0.5;
  
  &:hover {
    opacity: 1;
  }
`

const Copyright = styled.div`
  position: absolute;
  top: 0;
  a {
    color: ${({ theme }) => theme.colors.white};
    transition: .12s;
    &:hover {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`