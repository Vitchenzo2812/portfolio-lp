import CardFrontEnd from '@organism/Cards/FrontEnd';
import CardUtils from '@organism/Cards/Utils';
import CardDataBase from '@organism/Cards/DB';
import CardBackEnd from '@organism/Cards/BackEnd';
import * as S from './styled';

export default function ThirdSection() {
  return (
    <S.ContainerCards>
      <CardFrontEnd />
      <CardUtils />
      <CardDataBase />
      <CardBackEnd />
    </S.ContainerCards>
  );
}

