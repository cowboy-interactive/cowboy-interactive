import styled from "styled-components";
import { sizes } from "../utils/variables";
import Image from "next/image";
import { motion } from "framer-motion";

export const Img = ({
  src,
  all,
  large,
  medium,
  small,
  alt,
  initial = { opacity: 1 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
  width=700,
  height=450,
  priority=false

}) => {
  return (
    <Cont
      all={all}
      large={large}
      medium={medium}
      small={small}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      priority={"true"}
    >
      <Image src={src} width={width} height={height} alt={alt} priority={priority}/>
    </Cont>
  );
};

const Cont = styled(motion.div)`
  ${(props) => props.all};
  display: flex;

  @media (max-width: ${sizes.large}) {
    ${(props) => props.large};
  }

  @media (max-width: ${sizes.medium}) {
    ${(props) => props.medium};
  }

  @media (max-width: ${sizes.small}) {
    ${(props) => props.small};
  }
`;
