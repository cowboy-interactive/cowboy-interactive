import styled from "styled-components";
import { sizes } from "../../utils/variables";

export const Text = ({ children, all, color, medium, small }) => {
  return (
    <Cont color={color} all={all} small={small} medium={medium}>
      {children}
    </Cont>
  );
};

const Cont = styled.p`
  font-size: 16px;
  font-weight: 400;
  
  color: ${(props) => props.color};
  ${(props) => props.all};

  @media (max-width: ${sizes.medium}) {
    ${(props) => props.medium};
  }

  @media (max-width: ${sizes.small}) {
    ${(props) => props.small};
  }
`;
