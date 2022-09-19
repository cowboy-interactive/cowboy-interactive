import styled from "styled-components";
import { sizes } from "../../utils/variables";

export const H2 = ({ children, all, large, medium, small }) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {children}
    </Cont>
  );
};

const Cont = styled.h2`
  font-size: 36px;
  font-weight: 700;

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
`;
