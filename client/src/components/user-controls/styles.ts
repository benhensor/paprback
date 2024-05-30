import styled from 'styled-components';

const Container = styled.div`
  max-width: fit-content;
  margin: 15rem auto;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2rem #33333350;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto;
    box-shadow: none;
  }
  @media only screen and (max-width: 450px) {
    max-width: 100%;
    height: 100vh;
    
  }
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #33333350;
  padding: 1rem 0;
  h2 {
    color: ${({ theme }) => theme.colors.darkerGray};
    margin-bottom: 0;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 2rem 0;
  }
`

const FormColumns = styled.div`
  display: flex;
  gap: 2rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.darkerGray};
  text-align: left;
  margin: 0 0 0.5rem 0;
`

const Input = styled.input`
  width: 26rem;
  padding: 1rem;
  font-size: 1.6rem;
  border: 1px solid #33333350;
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.colors.darkerGray};
  background: ${({ theme }) => theme.colors.white};
  transition: box-shadow .12s ease, border 0.3s ease;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    background-color: #ffffff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.mediumGray};
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const SecondaryButton = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.darkerGray};
  margin-bottom: 2rem;
  > button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.blue};
  }
`

const PrimaryButton = styled.button`
  width: fit-content;
  margin: 1rem auto;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 0.2rem;
  padding: 1rem 5rem;
  font-size: ${({ theme }) => theme.fontSizes.m};
  text-transform: uppercase;
  &:hover {
    background-color: ${({ theme }) => theme.colors.orangeHover};
  }
  @media only screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`

export { Container, Header, Form, FormColumns, FormColumn, InputContainer, Label, Input, SecondaryButton, PrimaryButton }