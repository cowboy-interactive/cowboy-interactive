import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";
import Image from "next/image";
import { useState } from "react";
import { Img } from "../Img";

export const Gallery = ({ all, large, medium, small }) => {
  const [overlay, setOverlay] = useState(false);

  const handleImageClick = () => {
    setOverlay(true);
  };

  const closeOverlay = () => {
    setOverlay(false);
  };

  return (
    <>
      <OverlayCont overlay={overlay ? "flex" : "none"}>
        <ImageOverlay>
          <Image src={"/contracting-lg.jpg"} width={1092} height={702} />
        </ImageOverlay>

        <Overlay onClick={closeOverlay}></Overlay>
      </OverlayCont>

      <Cont all={all} large={large} medium={medium} small={small}>
        {links.map((item, i) => {
          return (
            <Card onClick={handleImageClick} key={i}>
              <Img src={item.image} alt={item.head} />
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

const Card = styled.div`
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
  top: 0;
  left: 0;
  z-index: 999;
`;

const ImageOverlay = styled.div`
  display: flex;
  z-index: 9999;
`;
