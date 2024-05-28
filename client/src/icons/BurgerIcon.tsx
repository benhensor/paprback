import { FC } from 'react';
import styled from 'styled-components';

interface BurgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerIcon: FC<BurgerIconProps> = ({ isOpen, onClick }) => {

  return (
    <Container onClick={onClick}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Bar key={index} $isOpen={isOpen} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Bar = styled.div<{ $isOpen: boolean }>`
  width: 25px;
  height: 2px;
  background-color:  ${({ theme }) => theme.colors.black};
  border-radius: 1px;
  transition: all .12s ease-in-out;
  transform-origin: center;

  ${({ $isOpen }) => $isOpen && `
    &:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  `}
`;

export default BurgerIcon;
