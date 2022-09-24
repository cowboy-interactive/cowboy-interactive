import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { Button } from "../Button";
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from "../../utils/provider";
import { Container } from "../Container";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";

export const ContactCard = ({
  children,
  all,
  large,
  medium,
  small,
  xsmall,
  color,
}) => {
  const { theme } = useTheme();
  return (
    <Cont all={all} large={large} medium={medium} small={small} xsmall={xsmall}>
      {links.map((item, i) => {
        return (
          <a href={item.url} target={item.target} key={i}>
            <Card all={all} large={large} medium={medium} small={small}>
              <Icon themes={themes}>{item.icon}</Icon>
              <Column>
                <H3 all={"margin: 0 0 5px 0;"}>{item.head}</H3>
                <Text color={color} all={"width: 170px;"}>
                  {item.text}
                </Text>
              </Column>
            </Card>
          </a>
        );
      })}
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  grid-gap: 40px;

  ${(props) => props.all};

  @media (max-width: ${sizes.medium}) {
    ${(props) => props.medium};
  }
  @media (max-width: ${sizes.small}) {
    ${(props) => props.small};
  }
  @media (max-width: ${sizes.xsmall}) {
    width: 90vw;
    ${(props) => props.xsmall};
  }
`;

const Icon = styled.div`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.themes.button};
  color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transition: 0.2s ease;

  &:hover {
    filter: brightness(120%);
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.25);
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  @media (max-width: ${sizes.small}) {
    justify-content: flex-start;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
`;
