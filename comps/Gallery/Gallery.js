import styled from "styled-components";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import Image from "next/image";
import { useState } from "react";
import { Img } from "../Img";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useTheme } from "../../utils/provider";
import { motion } from "framer-motion";

export const Gallery = ({
  all,
  large,
  medium,
  small,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
}) => {
  const [overlay, setOverlay] = useState(false);
  const [showImage, setShowImage] = useState({
    head: "Project Planning",
    name: "interior-2",
    image: "/interior-2.jpg",
  });
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();

  const handleImageClick = (item, i) => {
    setShowImage(item);
    setOverlay(true);
    setIndex(i);
  };

  const closeOverlay = () => {
    setOverlay(false);
  };

  const showNextImage = () => {
    const length = links.length - 1;

    if (index < length) {
      setShowImage(links[index + 1]);
      setIndex(index + 1);
    } else {
      setShowImage(links[0]);
      setIndex(0);
    }
  };

  const showPreviousImage = () => {
    const length = links.length - 1;

    if (index == 0) {
      setShowImage(links[length]);
      setIndex(length);
    } else {
      setShowImage(links[index - 1]);
      setIndex(index - 1);
    }
  };

  return (
    <>
      <OverlayCont overlay={overlay ? "flex" : "none"}>
        <ImageOverlay>
          <NavLeft
            background={themes[theme].button}
            onClick={showPreviousImage}
          >
            <ArrowLeft color="white" />
          </NavLeft>
          <NavRight background={themes[theme].button} onClick={showNextImage}>
            <ArrowRight color="white" />
          </NavRight>
          <Img
            src={`/${showImage.name}-lg.jpg`}
            width={1092}
            height={702}
            alt={showImage.head}
          />
          <CloseButton color={themes["dark"].primary} onClick={closeOverlay}>
            close
          </CloseButton>
        </ImageOverlay>

        <Overlay onClick={closeOverlay}></Overlay>
      </OverlayCont>

      <Cont all={all} large={large} medium={medium} small={small}>
        {links.map((item, i) => {
          return (
            <Card
              onClick={() => handleImageClick(item, i)}
              key={i}
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              transition={{ ease: "easeOut", duration: 1, delay: i / 4 }}
            >
              <ImageCont>
                <Img src={item.image} alt={item.head} />
              </ImageCont>
            </Card>
          );
        })}
      </Cont>
    </>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 20px;
  width: 100%;

  @media (max-width: ${sizes.small}) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: ${sizes.xsmall}) {
    grid-template-columns: 2fr;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  flex-direction: column;
  overflow: hidden;
  transition: 0.2s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

const ImageCont = styled.div`
  transition: 0.2s ease;
  display: flex;
  &:hover {
    transform: scale(110%);
  }
  @media (max-width: ${sizes.small}) {
    &:hover {
      transform: scale(100%);
    }
  }
`;

const OverlayCont = styled.div`
  display: ${({ overlay }) => overlay};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 50%;
  background: white;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 999;
`;

const ImageOverlay = styled.div`
  display: flex;
  z-index: 9999;
  background: white;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const NavRight = styled.div`
  display: flex;
  z-index: 9999;
  height: 50px;
  width: 50px;
  position: absolute;
  right: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: ${({ background }) => background};
  cursor: pointer;
`;

const NavLeft = styled.div`
  display: flex;
  z-index: 9999;
  height: 50px;
  width: 50px;
  background: ${({ background }) => background};
  position: absolute;
  left: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
`;

const CloseButton = styled.div`
  display: flex;
  z-index: 9999;
  position: absolute;
  top: -40px;
  right: 0px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: ${({ color }) => color};
  width: 100%;
`;
