import styled from "styled-components";
import { sizes } from "../../utils/variables";
import { motion } from "framer-motion";

export const H2 = ({
  children,
  all,
  large,
  medium,
  small,
  initial = { opacity: 1 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
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
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.h2)`
  font-size: 36px;
  font-weight: 700;
  width:  100%;

  ${(props) => props.all};

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
