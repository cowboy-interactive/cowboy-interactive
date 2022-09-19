import styled from "styled-components";

export const Text = ({ children, all }) => {
  return <Cont all={all}>{children}</Cont>;
};

const Cont = styled.p`
  font-size: 18px;
  font-weight: 400;

  ${(props) => props.all};
`;
