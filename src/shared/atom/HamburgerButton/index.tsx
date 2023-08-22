import { useState } from 'react';
import * as S from './styled';

export default function HamburguerButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Container onClick={() => setIsOpen(old => !old)} open={isOpen}>
      <S.Bar />
      <S.Bar />
      <S.Bar />
    </S.Container>
  );
}