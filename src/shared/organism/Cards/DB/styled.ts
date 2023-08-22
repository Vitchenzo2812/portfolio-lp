import { THEME } from '@styles/Theme';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const WrapperIcons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;
  background-color: transparent;
`;


export const ContainerItems = styled(motion.div)`
  display: none;
  flex-wrap: wrap;
  gap: 1.4rem;
  padding-top: 1.7rem;
  transition: display .4s ease-in-out;
  background-color: transparent;
`

export const Container = styled(motion.div)<{ open: boolean }>`
  position: absolute;
  top: 15.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10.4rem;
  height: 10.5rem;
  border-radius: 1rem;
  background: ${THEME.LINEAR_THIRD_CARD};
  transition: all .4s ease-in-out;
  transform: none;
  cursor: pointer;
  z-index: 0;

  ${props => props.open && css`
    top: 2.5rem;
    width: 33.3rem;
    height: max-content;
    padding: 1.3rem 2.1rem;
    justify-content: start;
    align-items: start;
    z-index: 1;

    ${ContainerItems} {
      display: flex;
    }
  `}
`;

export const WrapperTitle = styled(motion.div)<{ open: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: transparent;

  img {
    display: none;
  }

  ${props => props.open && css`
    width: 100%;

    img {
      display: flex;
    }
  `}
`;

export const Icon = styled(motion.img)<{ width: number, height: number }>`
  width: ${props => props.width}rem;
  height: ${props => props.height}rem;
  background-color: transparent;
`;

export const ContainerItalicText = styled.div`
  padding: 5.9rem 1.1rem 7.8rem;
  background-color: transparent;
`;