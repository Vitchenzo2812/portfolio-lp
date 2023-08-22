import { css, styled } from "styled-components";
import { THEME } from "@styles/Theme";

export const Container = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: .7rem;
  
  cursor: pointer;

  div {
    transition: all .2s ease-in-out;
  }

  ${props => props.open && css`
      div:nth-child(2) { transform: scale(0) }
      div:nth-child(1) { transform: rotate(-45deg) translateY(1.4rem) }
      div:nth-child(3) { transform: rotate(45deg) translateY(-1.4rem) }
    `}
`;

export const Bar = styled.div`
  width: 3rem;
  height: .3rem;
  background-color: ${THEME.BABY_BLUE};
`;