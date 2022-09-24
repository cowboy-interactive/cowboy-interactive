import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes } from "../../utils/variables";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";

export const Testimonials = ({ all, large, medium, small }) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {links.map((item, i) => {
        return (
          <Link href={item.url} target={item.target} key={i}>
            <Card all={all} large={large} medium={medium} small={small}>
              <Column>
                <H3 all={"margin: 0 0 20px 0; "}>{item.head}</H3>
                <Text all={"max-width: 600px;"}>{item.text}</Text>
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
  grid-gap: 20px;
  width: 100%;

  @media (max-width: ${sizes.small}) {
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
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.10);
  padding: 40px;
  width: 100%;

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
