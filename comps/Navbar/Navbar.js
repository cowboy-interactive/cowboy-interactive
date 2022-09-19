import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { Button } from "../Button";
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from "../../utils/provider";

export const Navbar = ({ children, all, large, medium, small }) => {
  const { theme } = useTheme();
  return (
    <NavbarUI all={all} large={large} medium={medium} small={small}>
      <LogoUI>
        <Link href="/">Logo</Link>
      </LogoUI>
      <NavUI>
        <ThemeSwitch all={"margin-left: 40px;"} />
        {links.map((item) => {
          return (
            <LinkUI>
              <Link href={item.url}>{item.text}</Link>
            </LinkUI>
          );
        })}
        <Button
          all={`background: ${themes.highlight}; color: #fff; margin-left: 40px`}
        >
          Get a Quote
        </Button>
      </NavUI>
    </NavbarUI>
  );
};

const NavbarUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

const LogoUI = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const NavUI = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LinkUI = styled.div`
  margin-left: 40px;
`;
