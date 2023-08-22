import TextPlayFair from '@atom/TextPlayFair';
import * as S from './styled'

export default function SubTitle() {
  return (
    <S.WrapperSubtitle>
      <TextPlayFair>aceita um café?</TextPlayFair>
      <S.icon src="/assets/coffee-icon.svg" alt="logo do Java" />
    </S.WrapperSubtitle>
  );
}