import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";
import Image from "next/image";
import { useTheme } from "../../utils/provider";
import { H2 } from "../Text/H2";

export const Stats = ({ all, large, medium, small }) => {
  const { theme } = useTheme();
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {links.map((item) => {
        return (
          <Card>
            <H2 all={`margin: 0 0 10px 0; color:white`}>
              {item.head}
            </H2>
            <Text all={`color:white`}>
              {item.text}
            </Text>
          </Card>
        );
      })}
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-gap: 100px;


  @media (max-width: ${sizes.small}) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: ${sizes.xsmall}) {
    grid-template-columns: 2fr;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex-direction: column;
  transition: 0.2s ease;


  @media (max-width: ${sizes.small}) {
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 100;

  @media (max-width: ${sizes.small}) {
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  @media (max-width: ${sizes.xsmall}) {
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`;
