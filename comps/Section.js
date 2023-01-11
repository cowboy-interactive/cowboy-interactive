import styled from "styled-components";
import { sizes } from "../utils/variables";

export const Section = ({ children, all, large, medium, small, xsmall }) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small} xsmall={xsmall}>
      {children}
    </Cont>
  );
};

const Cont = styled.article`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  max-width: 1600px;
  align-items: center;
  margin: 80px 0;

  ${(props) => props.all};

  @media (max-width: ${sizes.large}) {
    ${(props) => props.large};
  }

  @media (max-width: ${sizes.medium}) {
    width: 90vw;
    
    ${(props) => props.medium};
  }

  @media (max-width: ${sizes.small}) {
    flex-direction: column;
    margin: 60px 0;

    ${(props) => props.small};
  }

  @media (max-width: ${sizes.xsmall}) {
    ${(props) => props.xsmall};
  }
`;
