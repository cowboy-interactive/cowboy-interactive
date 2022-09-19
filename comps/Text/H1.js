import styled from "styled-components";
import { sizes } from "../../utils/variables";

export const H1 = ({ children, all, large, medium, small, xsmall }) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small} xsmall={xsmall}>
      {children}
    </Cont>
  );
};

const Cont = styled.h1`
  font-size: 72px;
  font-weight: 700;

  @media (max-width: ${sizes.medium}) {
    font-size: 48px;
  }

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
