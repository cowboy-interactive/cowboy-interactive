import styled from "styled-components";
import { sizes, themes } from "../utils/variables";
import { useTheme } from "../utils/provider";

export const Button = ({ children, all, style, type="" }) => {
  const { theme } = useTheme();

  return (
    <ButtonUI
      type={type}
      style={style}
      all={all}
      background={themes[theme].secondary}
      color={themes[theme].primary}
    >
      {children}
    </ButtonUI>
  );
};

const ButtonUI = styled.button`
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
  transition: 0.2s ease;
  font-weight: 500;
  font-size 16px;

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

  &:hover {
    filter: brightness(120%);
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
  }
`;
