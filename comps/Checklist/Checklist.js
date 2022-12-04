import styled from "styled-components";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { useTheme } from "../../utils/provider";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";
import { motion } from "framer-motion";

export const Checklist = ({
  all,
  large,
  medium,
  small,
  xsmall,
  color,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
}) => {
  const {theme} = useTheme();
  return (
    <Cont all={all} large={large} medium={medium} small={small} xsmall={xsmall}>
      {links.map((item, i) => {
        return (
          <Card
            all={all}
            large={large}
            medium={medium}
            small={small}
            key={i}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={{ ease: "easeOut", duration: 1, delay: i / 4 }}
          >
            <Icon color={themes[theme].highlight}>{item.icon}</Icon>
            <Column>
              <H3 all={"margin: 0 0 5px 0;"}>{item.head}</H3>
              <Text all={"max-width: 400px; font-size: 16px;"} color={color}>{item.text}</Text>
            </Column>
          </Card>
        );
      })}
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 2fr 2fr;
  width: 100%;

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
    grid-template-columns: 2fr;
  }
`;

const Icon = styled.div`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({color}) => color};
  color: ${({color}) => color};
  border-radius: 5px;
  transition: 0.2s ease;
`;

const Card = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${sizes.small}) {
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: ${sizes.xsmall}) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 0 20px;

  @media (max-width: ${sizes.small}) {
    margin: 10px 0 0 0;
    text-align: left;
  }
  @media (max-width: ${sizes.xsmall}) {
    margin: 0 0 0 20px;
  }
`;
