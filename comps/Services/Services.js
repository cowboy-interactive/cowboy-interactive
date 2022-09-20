import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";
import Image from "next/image";

export const Services = ({ all, large, medium, small }) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {links.map((item) => {
        return (
          <Link href={item.url} target={item.target}>
            <Card>
              <Image src={item.image} width={700} height={450} />
              <Column>
                <Icon themes={themes}>{item.icon}</Icon>
                <H3 all={"margin: 0 0 20px 0"}>{item.head}</H3>
                <Text all={"max-width: 600px; text-align: left;"}>{item.text}</Text>
              </Column>
            </Card>
          </Link>
        );
      })}
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 60px;
  width: 100%;

  @media (max-width: ${sizes.small}) {
    grid-template-columns: 2fr;
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
  margin: 0 0 20px 0;
`;

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  cursor: pointer;
  flex-direction: column;




`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  top: -25px;
  z-index: 100;
  padding: 0 20px;

  @media (max-width: ${sizes.small}) {
    justify-content: flex-start;
    width: 100%;
  }

  @media (max-width: ${sizes.xsmall}) {
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`;
