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

export default function CardBackEnd() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const items = [
    {
      icon: "/assets/Cards/Backend/node-icon.svg",
      text: "NodeJs"
    },
    {
      icon: "/assets/Cards/Backend/express-icon.svg",
      text: "Express"
    },
    {
      icon: "/assets/Cards/Backend/swagger-icon.svg",
      text: "Swagger"
    },
    {
      icon: "/assets/Cards/Backend/jwt-icon.svg",
      text: "JWT"
    },
    {
      icon: "/assets/Cards/Frontend/ts-icon.svg",
      text: "Typescript"
    },
    {
      icon: "/assets/Cards/Backend/rabbitmq-icon.svg",
      text: "RabbitMQ"
    },
  ]

  return (
    <S.Container whileHover={{ scale: 1.1 }} open={isOpen} onClick={() => setIsOpen(true)}>
      <S.WrapperTitle open={isOpen} layout transition={spring}>
        <TextPlayFair>Back-end</TextPlayFair>
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
            <S.Icon width={item.text === "RabbitMQ" ? 12.4 : 4.5} height={item.text === "RabbitMQ" ? 2 : 4.5} src={item.icon} />
            <TextPoppins fontSize={1.2}>{item.text}</TextPoppins>
          </S.WrapperIcons>
        ))}
      </S.ContainerItems>
    </S.Container>
  );
}