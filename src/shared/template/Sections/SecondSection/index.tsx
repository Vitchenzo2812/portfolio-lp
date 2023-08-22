import TextOverpass from '@atom/TextOverpass';
import TextPlayFair from '@atom/TextPlayFair';
import TitleSections from '@atom/TitleSections';
import * as S from './styled';

export default function SecondSection() {
  return (
    <S.Container>
      <TextOverpass>
      Ao longo do tempo, venho investindo esforços contínuos em meus estudos e no aprimoramento de minhas habilidades técnicas. Busco constantemente aprender novas linguagens, frameworks e conceitos, a fim de estar sempre atualizado com as tendências e as melhores práticas da indústria.
      </TextOverpass>
      <S.WrapperTitleSection>
        <TitleSections>Desenvolvedor FullStack</TitleSections>
        <TextPlayFair>Algumas tecnologias <br/> que utilizo:</TextPlayFair>
      </S.WrapperTitleSection>
    </S.Container>
  );
}