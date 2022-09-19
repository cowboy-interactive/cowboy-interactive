import styled from "styled-components";
import { sizes } from "../utils/variables";

export const Img = ({ src, all, large, medium, small }) => {
  return (
    <Cont src={src} all={all} large={large} medium={medium} small={small} />
  );
};

const Cont = styled.img`
  ${(props) => props.all};

  @media (max-width: ${sizes.large}) {
    ${(props) => props.large};
  }

  @media (max-width: ${sizes.medium}) {
    ${(props) => props.medium};
  }

  @media (max-width: ${sizes.small}) {
    ${(props) => props.small};
    background-ima: ;
  }
`;
