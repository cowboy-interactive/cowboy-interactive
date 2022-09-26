import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes } from "../../utils/variables";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";
import { motion } from "framer-motion";

export const Testimonials = ({
  all,
  large,
  medium,
  small,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "ease", duration: 1 },
}) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {links.map((item, i) => {
        return (
          <Link href={item.url} target={item.target} key={i}>
            <Card
              all={all}
              large={large}
              medium={medium}
              small={small}
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              transition={{ ease: "linear", duration: 1, delay: i / 4 }}
            >
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

const Card = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex-direction: column;
  transition: 0.2s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
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
