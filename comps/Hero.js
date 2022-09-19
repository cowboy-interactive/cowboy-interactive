import styled from "styled-components";
import { sizes } from "../utils/variables";

export const Hero = ({ children, style = {} }) => {
  return (
    <Cont style={style}>
      <Background />
      {children}
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 700px;
  overflow: hidden;
  color: white;
  @media (max-width: ${sizes.medium}) {
    flex-direction: column;
  }
`;

const Background = styled.div`
  display: flex;
  position: absolute;
  height: 700px;
  overflow: hidden;
  background-image: url("/home.jpg");
  background-size: cover;
  color: white;
  width: 100%;
  filter: brightness(40%);
  color: white @media (max-width: ${sizes.medium}) {
    flex-direction: column;
  }
`;
