import styled from "styled-components";
import { sizes, themes } from "../../utils/variables";
import { motion } from "framer-motion";
import { useTheme } from "../../utils/provider";

export const H3 = ({
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
  const { theme } = useTheme();
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
      color={themes[theme].highlight}
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.div)`
  font-size: 20px;
  font-weight: 700;
  color: ${({color}) => color}

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
