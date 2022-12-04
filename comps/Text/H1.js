import styled from "styled-components";
import { sizes } from "../../utils/variables";
import { motion } from "framer-motion";

export const H1 = ({
  children,
  all,
  large,
  medium,
  small,
  xsmall,
  initial = { opacity: 1 },
  whileInView = { opacity: 1 },
  viewport={ once: true },
  transition={ ease: "easeOut", duration: 1 }
}) => {
  return (
    <Cont
      all={all}
      large={large}
      medium={medium}
      small={small}
      xsmall={xsmall}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.h1)`
  font-size: 64px;
  font-weight: 700;
  margin: 0 0 20px 0;

  ${(props) => props.all};

  @media (max-width: ${sizes.large}) {
    ${(props) => props.large};
    font-size: 48px;
  }

  @media (max-width: ${sizes.medium}) {
    ${(props) => props.medium};
  }

  @media (max-width: ${sizes.small}) {
    ${(props) => props.small};
  }

  @media (max-width: ${sizes.xsmall}) {
    font-size: 36px;
    ${(props) => props.xsmall};
  }
`;
