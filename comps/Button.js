import styled from "styled-components";
import { sizes, themes } from "../utils/variables";
import { useTheme } from "../utils/provider";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const Button = ({
  children,
  all,
  style,
  type = "",
  large,
  medium,
  small,
  xsmall,
  href = "",
  initial = { opacity: 1 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
}) => {
  const { theme } = useTheme();

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <ButtonUI
      onClick={handleClick}
      type={type}
      style={style}
      all={all}
      large={large}
      medium={medium}
      small={small}
      xsmall={xsmall}
      background={themes[theme].primary}
      color={themes[theme].highlight}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </ButtonUI>
  );
};

const ButtonUI = styled(motion.button)`
  width: 200px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  transition: 0.2s ease;
  font-weight: 500;
  font-size 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

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

  @media (max-width: ${sizes.xsmall}) {
    ${(props) => props.xsmall};
  }

  &:hover {
    filter: brightness(110%);
    box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25);
  }
`;
