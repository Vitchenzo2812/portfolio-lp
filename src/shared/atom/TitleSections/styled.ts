import styled from 'styled-components';
import { THEME } from '@styles/Theme';

export const Text = styled.h2`
  font-size: 2rem;
  font-family: var(--open_sans);
  font-weight: 700;
  background: ${THEME.LINEAR_PINK};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;