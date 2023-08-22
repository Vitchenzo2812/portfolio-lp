import TextOverpass from '@atom/TextOverpass';
import TitlePage from '@atom/TitlePage';
import SubTitle from '@organism/SubTitle';
import * as S from './styled';

export default function FirstSection() {
  return (
    <S.Container>
      <S.WrapperAllTitle>
        <TitlePage>Seja Bem-Vindo</TitlePage>
        <SubTitle />
      </S.WrapperAllTitle>
      <TextOverpass>Olá, seja muito bem-vindo ao meu portfólio! Sou <S.TextOtherColor>Guilherme Vitchenzo Penas</S.TextOtherColor>, um entusiasta da programação que deu seus primeiros passos neste emocionante universo no ano de 2020. Desde então, minha jornada tem sido repleta de desafios e conquistas, e meu objetivo é alcançar o meu melhor em todas as áreas da programação que atúo.</TextOverpass>
    </S.Container>
  );
}