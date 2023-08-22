import { THEME } from '@styles/Theme';
import styled from 'styled-components';

export const Text = styled.p<{ size: number, italic: boolean }>`
  font-size: ${props => props.size}rem;
  font-weight: 700;
  font-family: var(--poppins);
  font-style: ${props => props.italic && 'italic'};
  color: ${THEME.WHITE_TEXT};
  background-color: transparent;
  white-space: pre-line;
  text-align: center;
`;