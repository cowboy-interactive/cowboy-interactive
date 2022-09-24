import styled from "styled-components";
import { sizes } from "../utils/variables";
import Image from "next/image";

export const Img = ({ src, all, large, medium, small, alt }) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      <Image src={src} width={700} height={450} alt={alt} />
    </Cont>
  );
};

const Cont = styled.div`
  ${(props) => props.all};
  display: flex;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.10);
  
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
