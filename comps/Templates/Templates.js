import styled from "styled-components";
import { links } from "./data";
import { sizes } from "../../utils/variables";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";
import { Img } from "../Img";
import { motion } from "framer-motion";

export const Templates = ({
  all,
  large,
  medium,
  small,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
}) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {links.map((item, i) => {
        return (
          <Card
            href={item.url}
            target={item.target}
            key={i}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={{ ease: "easeOut", duration: 1, delay: i / 4 }}
          >
            <ImageCont>
              <Img
                src={item.image}
                alt={item.head}
                all={
                  item.text == "Coming Soon..."
                    ? "max-width: 400px; transition: 0.2s ease;"
                    : "transition: 0.2s ease;"
                }
              />
            </ImageCont>

            <Column>
              <H3 all={"margin: 0 0 20px 0"}>{item.head}</H3>
              <Text
                all={"max-width: 600px; text-align: left; font-size: 16px;"}
              >
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

const Card = styled(motion.a)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.2s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 20px rgba(116, 69, 58, 0.5);
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  z-index: 100;
  padding: 40px;
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

const ImageCont = styled.div`
  transition: 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  backfground: red;
  width: 100%;
  height: 60%;
  &:hover > div {
    transform: scale(110%);
  }
  @media (max-width: ${sizes.small}) {
    &:hover > div {
      transform: scale(100%);
    }
  }
`;
