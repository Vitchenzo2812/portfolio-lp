import * as S from './styled';

export default function TitlePage({ children }: any) {
  return (
    <S.Container>
      <S.Title>{children}</S.Title>
      <S.Bar />
    </S.Container>
  )
}