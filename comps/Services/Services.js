import styled from "styled-components";
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
}) => {
  const { theme } = useTheme();
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {links.map((item, i) => {
        return (
          <Card
            key={i}
            background={themes[theme].primary}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={{ ease: "easeOut", duration: 1, delay: i / 4 }}
          >
            <Img src={item.image} alt={item.head} all={"margin: 0 0 20px 0;"} />
            <Column>
              <H3 all={"margin: 0 0 20px 0; text-align: center;"}>
                {item.head}
              </H3>
              <Text all={"max-width: 600px; text-align: center; max-width: 500px;"}>
                {item.text}
              </Text>
            </Column>
          </Card>
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
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.2s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(50px);
  padding: 60px;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 100;
  text-align: left;
`;
