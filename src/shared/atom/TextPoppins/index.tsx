import * as S from './styled';

interface TextPoppinsProps {
  fontSize: number;
  isItalic?: boolean;
  children: any;
}

export default function TextPoppins({ fontSize, children, isItalic = false }: TextPoppinsProps) {
  return <S.Text italic={isItalic} size={fontSize}>{children}</S.Text>;
}