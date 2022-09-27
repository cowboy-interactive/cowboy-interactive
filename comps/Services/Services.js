import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";
import { Img } from "../Img";
import { motion } from "framer-motion";
import { useTheme } from "../../utils/provider";

export const Services = ({
  all,
  large,
  medium,
  small,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
}) => {
  const { theme } = useTheme();
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {links.map((item, i) => {
        return (
          <Link href={item.url} target={item.target} key={i}>
            <Card
              background={themes[theme].primary}
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              transition={{ ease: "easeOut", duration: 1, delay: i / 4 }}
            >
              <Img
                src={item.image}
                alt={item.head}
                all={"margin: 0 0 20px 0;"}
              />
              <Column>
                <H3 all={"margin: 0 0 20px 0; text-align: center;"}>
                  {item.head}
                </H3>
                <Text all={"max-width: 600px; text-align: center;"}>
                  {item.text}
                </Text>
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

const Card = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.2s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  backdrop-filter: blur(50px);

  &:hover {
    box-shadow: 0px 4px 20px rgba(116, 69, 58, 0.5);
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: -25px;
  z-index: 100;
  padding: 0 40px 15px 40px;
  text-align: left;

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
