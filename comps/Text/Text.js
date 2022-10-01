import styled from "styled-components";
import { sizes } from "../../utils/variables";
import { motion } from "framer-motion";

export const Text = ({
  children,
  all,
  color,
  medium,
  small,
  xsmall,
  initial = { opacity: 1 },
  whileInView = { opacity: 1 },
  viewport={ once: true },
  transition={ ease: "easeOut", duration: 2 }
}) => {
  return (
    <Cont
      color={color}
      all={all}
      small={small}
      xsmall={xsmall}
      medium={medium}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.p)`
  font-size: 16px;
  font-weight: 500;

  color: ${(props) => props.color};
  ${(props) => props.all};

  @media (max-width: ${sizes.medium}) {
    ${(props) => props.medium};
  }

  @media (max-width: ${sizes.small}) {
    ${(props) => props.small};
  }

  @media (max-width: ${sizes.xsmall}) {
    ${(props) => props.xsmall};
  }
`;
