import styled from "styled-components";
import { THEME } from "@styles/Theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.1rem 2.1rem 0;
  gap: 5.7rem;
`;

export const WrapperAllTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`

export const TextOtherColor = styled.span`
  font-size: 2rem;
  font-family: var(--overpass);
  text-align: justify;
  color: ${THEME.LILAC}
`;