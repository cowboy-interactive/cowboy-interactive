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

export const ContactCard = ({ children, all, large, medium, small }) => {
  const { theme } = useTheme();
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {links.map((item) => {
        return (
          <a href={item.url} target={item.target}>
            <Card all={all} large={large} medium={medium} small={small}>
              <Icon themes={themes}>{item.icon}</Icon>
              <Column>
                <H3>{item.head}</H3>
                <Text all={"width: 170px;"}>{item.text}</Text>
              </Column>
            </Card>
          </a>
        );
      })}
    </Cont>
  );
};

const Cont = styled.div`
  width: 60vw;
  display: grid;
  justify-content: space-between;
  align-items: flex-start;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 20px;

  @media (max-width: ${sizes.medium}) {
    width: 80vw;
  }
  @media (max-width: ${sizes.small}) {
    width: 90vw;
    grid-template-columns: 2fr;
    grid-gap: 40px;
  }
`;

const Icon = styled.div`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.themes.highlight};
  color: white;
  border-radius: 5px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: ${sizes.small}) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10px;
`;
