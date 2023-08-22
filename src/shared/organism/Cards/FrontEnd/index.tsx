import * as S from './styled';
import { useState } from 'react';
import TextPoppins from '@atom/TextPoppins';
import TextPlayFair from '@atom/TextPlayFair';

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 45,
};

const variants = {
  open: {
    scale: [0.5, 1],
    opacity: 1
  },

  close: {
    opacity: 0    
  }
}

export default function CardFrontEnd() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const items = [
    {
      icon: "/assets/Cards/Frontend/html-icon.svg",
      text: "HTML"
    },
    {
      icon: "/assets/Cards/Frontend/css-icon.svg",
      text: "CSS"
    },
    {
      icon: "/assets/Cards/Frontend/js-icon.svg",
      text: "Javascript"
    },
    {
      icon: "/assets/Cards/Frontend/ts-icon.svg",
      text: "Typescript"
    },
    {
      icon: "/assets/Cards/Frontend/react-icon.svg",
      text: 'React Web\n/Native'
    },
    {
      icon: "/assets/Cards/Frontend/sass-icon.svg",
      text: "Sass"
    },
    {
      icon: "/assets/Cards/Frontend/styled-components-icon.svg",
      text: "Styled\nComponents"
    },
    {
      icon: "/assets/Cards/Frontend/recoil-icon.svg",
      text: "Recoil"
    },
    {
      icon: "/assets/Cards/Frontend/next-icon.svg",
      text: "Next"
    }
  ]

  return (
    <S.Container whileHover={{ scale: 1.1 }} open={isOpen} onClick={() => setIsOpen(true)}>
      <S.WrapperTitle open={isOpen} layout transition={spring}>
        <TextPlayFair>Front-end</TextPlayFair>
        <S.Icon 
          src="/assets/Cards/exit-icon.svg"
          width={2}
          height={2} 
          whileHover={{ scale: 1.3 }} 
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
            setIsOpen(false)
          }} 
        />
      </S.WrapperTitle>
      <S.ContainerItems>
        {items.map((item: any, index: number) => (
          <S.WrapperIcons 
            key={index}
            initial="close"
            animate={isOpen ? "open" : "close"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <S.Icon width={4.5} height={4.5} src={item.icon} />
            <TextPoppins fontSize={1.2}>{item.text}</TextPoppins>
          </S.WrapperIcons>
        ))}
      </S.ContainerItems>
    </S.Container>
  );
}