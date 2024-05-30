import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoBooks from '../../icons/LogoBooks'
import BurgerIcon from '../../icons/BurgerIcon'

type HeaderProps = {
  headerHeight: number
}

function Header({ headerHeight }: HeaderProps) {

	const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeButton, setActiveButton] = useState('')

	const handleToggleMenu = (): void => {
		setIsMenuOpen(prev => !prev)
	}

  const handleSetActiveButton = (link: string): void => {
    if (isMenuOpen === true) {
      setActiveButton('')
      handleToggleMenu()
      return
    }
    setActiveButton(link)
  }

	return (
		<HeaderContainer id='header'>
	    <HeaderTop>
        <Link to="/">
          <Logo>
            <LogoBooks/>
            <Name>Paprback</Name>
          </Logo>
        </Link>
        

        <UserControls>
          <Link to="/signup">
            <Signup className="signup">Sign up</Signup>
          </Link>
          <Link to="/login">
            <Login className="login">Login</Login>
          </Link>
        </UserControls>

        <MenuControls>
          <BurgerIcon isOpen={isMenuOpen} onClick={handleToggleMenu} />
        </MenuControls>
      </HeaderTop>

      <HeaderBottom $isMenuOpen={isMenuOpen} $headerHeight={headerHeight}>
        <Navbar>
          <ul>
            {isMenuOpen && (
              <>
                <li>
                  <Link to="/signup" onClick={() => handleToggleMenu}>
                    <NavLink $isActive={activeButton === 'signup'} onClick={() => handleSetActiveButton('signup')}>Signup</NavLink>
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={() => handleToggleMenu}>
                    <NavLink $isActive={activeButton === 'login'} onClick={() => handleSetActiveButton('login')}>Login</NavLink>
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/browse" onClick={() => handleToggleMenu}>
                <NavLink $isActive={activeButton === 'browse'} onClick={() => handleSetActiveButton('browse')}>Browse</NavLink>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => handleToggleMenu}>
                <NavLink $isActive={activeButton === 'about'} onClick={() => handleSetActiveButton('about')}>About</NavLink>
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => handleToggleMenu}>
                <NavLink $isActive={activeButton === 'faq'} onClick={() => handleSetActiveButton('faq')}>FAQ</NavLink>
              </Link>
            </li>
          </ul>
        </Navbar>
      </HeaderBottom>
		</HeaderContainer>
	)
}

export default Header

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10000;
  background-color: ${({ theme }) => theme.colors.white};
`

const HeaderTop = styled.div`
  width: 100%;
  max-width: 120rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 0;
  @media only screen and (max-width: 1199px) {
    padding: 0.5rem 1rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`

const HeaderBottom = styled.div<{ $isMenuOpen: boolean, $headerHeight: number }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 0.5rem 0;
  @media only screen and (max-width: 768px) {
    z-index: 1000;
    position: fixed;
    align-items: flex-start;
    justify-content: flex-end;
    top: calc(${({ $headerHeight }) => $headerHeight}px + 1.1rem);
    right: ${({ $isMenuOpen }) => ($isMenuOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    padding: 2rem 1rem;
    transition: all 0.3s ease-in-out;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  svg {
    width: 5.4rem;
    height: auto;
    color: ${({ theme }) => theme.colors.orange};
  }
  @media only screen and (max-width: 768px) {
    gap: 0.5rem;
    svg {
      width: 4rem;
    }
  }
  @media only screen and (max-width: 450px) {
    svg {
      width: 3rem;
    }
  }
`

const Name = styled.p`
  font-size: clamp(${({ theme }) => theme.fontSizes.xl}, 4vw, ${({ theme }) => theme.fontSizes.xxxl});
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: normal;
`

const UserControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Signup = styled.button`
  border: none;
  padding: 0.3em 0;
  border-radius: 0.2rem;
  width: 10rem;
  color: ${({ theme }) => theme.colors.quaternary};
  font-size: ${({ theme }) => theme.fontSizes.m};
  background-color: ${({ theme }) => theme.colors.lightGray};
  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumGray};
    color: ${({ theme }) => theme.colors.textDark};
  }
`

const Login = styled.button`
  color: ${({ theme }) => theme.colors.textDark};
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 0.2rem;
  width: 10rem;
  padding: 0.3em 0;
  font-size: ${({ theme }) => theme.fontSizes.m};
  &:hover {
    background-color: ${({ theme }) => theme.colors.orangeHover};
  }
`

const MenuControls = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`

const Navbar = styled.nav`
  width: 100%;
  max-width: 60rem;
  display: flex;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li {
    position: relative;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    ul {
      flex-direction: column;
      align-items: flex-end;
    }
    li {
      margin: 1rem 0;
    }
  }
`

const NavLink = styled.button<{ $isActive: boolean }>`
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.l};
  background-color: transparent;
  padding: 0;
  transition: all 0.1s ease-in;
  margin: 0.8rem 4rem;
  color: ${({ $isActive }) => ($isActive ? '#DE9E36' : '#F3F3F3')};
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
  @media only screen and (max-width: 768px) {
    button {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
      margin: 1rem 0;
    }
  }
`