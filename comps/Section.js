import styled from "styled-components";
import { sizes } from "../utils/variables";

export const Section = ({ children, all, large, medium, small, xsmall }) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small} xsmall={xsmall}>
      {children}
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  justify-content: space-between;

  ${(props) => props.all};

  @media (max-width: ${sizes.large}) {
    ${(props) => props.large};
  }

  @media (max-width: ${sizes.medium}) {
    ${(props) => props.medium};
  }

  @media (max-width: ${sizes.small}) {
    ${(props) => props.small};
  }

  @media (max-width: ${sizes.xsmall}) {
    ${(props) => props.xsmall};
  }
`;
