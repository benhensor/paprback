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
        <FooterBranding>
            <LogoContainer>
              <Copyright>&#169; {year} <a href="https://benhensordev.netlify.app/" rel="noreferrer" target="_blank">Ben Hensor</a></Copyright>
              <FooterLogo src={Logo} alt="Paprback Logo" />
            </LogoContainer>
            <FooterSocials>
              <a href="https://github.com/benhensor/paprback" rel='noreferrer' target='_blank'>
                <FooterSocialIcon src={gbWhite} alt="gitHub" />
              </a>
              <a href="https://www.youtube.com/watch?v=UB3zVqyRQZQ" rel='noreferrer' target='_blank'>
                <FooterSocialIcon src={ytWhite} alt="youtube" />
              </a>
            </FooterSocials>
          </FooterBranding>
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
  background-color: ${({ theme }) => theme.colors.darkGray};
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
  @media screen and (max-width: 450px) {
    justify-content: center;
    align-items: center;
  }
`

const FooterContent = styled.div`
  display: flex;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const CompanyDetails = styled.div`
  text-align: left;
  h4 {
    color: ${({ theme }) => theme.colors.mediumGray};
  }
`

const CompanyLink = styled.p`
  color: ${({ theme }) => theme.colors.darkerGray};
  font-size: ${({ theme }) => theme.fontSizes.s};
  transition: .12s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.mediumGray};
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
  gap: 2rem;
  @media screen and (max-width: 450px) {
    position: static;
    transform: none;
    margin-bottom: 2rem;
  }
`

const LogoContainer = styled.div`

`

const FooterLogo = styled.img`
  width: 14rem;
  color: ${({ theme }) => theme.colors.orange};
`

const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const FooterSocialIcon = styled.img`
  width: 25px;
  opacity: 0.5;
  
  &:hover {
    opacity: 1;
  }
`

const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.mediumGray};
  a {
    color: ${({ theme }) => theme.colors.mediumGray};
    transition: .12s;
    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`