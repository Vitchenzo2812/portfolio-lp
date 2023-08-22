import styled from "styled-components";
import { THEME } from "@styles/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .6rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-family: var(--open_sans);
  
  background: ${THEME.TITLE_PAGE};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Bar = styled.div`
  width: 23rem;
  height: .4rem;
  
  background-color: ${THEME.LILAC};
  border-radius: .3rem;

  filter: blur(0.75px);
`;