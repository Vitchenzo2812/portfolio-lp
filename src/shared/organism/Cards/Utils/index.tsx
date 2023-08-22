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

export default function CardUtils() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const items = [
    {
      icon: "/assets/Cards/Utils/figma-icon.svg",
      text: "Figma"
    },
    {
      icon: "/assets/Cards/Utils/git-icon.svg",
      text: "Git"
    },
    {
      icon: "/assets/Cards/Utils/testing-library-icon.svg",
      text: "Testing\nLibrary"
    },
    {
      icon: "/assets/Cards/Utils/jest-icon.svg",
      text: "Jest"
    },
    {
      icon: "/assets/Cards/Utils/yarn-icon.svg",
      text: "Yarn"
    },
    {
      icon: "/assets/Cards/Utils/docker-icon.svg",
      text: "Docker"
    },
    {
      icon: "/assets/Cards/Utils/storybook-icon.svg",
      text: "StoryBook"
    },
  ]

  return (
    <S.Container whileHover={{ scale: 1.1 }} open={isOpen} onClick={() => setIsOpen(true)}>
      <S.WrapperTitle open={isOpen} layout transition={spring}>
        <TextPlayFair>Utils</TextPlayFair>
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