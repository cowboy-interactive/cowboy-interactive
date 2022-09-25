import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { Button } from "../Button";
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from "../../utils/provider";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Menu, X } from "react-feather";

export const Navbar = ({ children, all, large, medium, small }) => {
  const { theme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Cont theme={theme} themes={themes}>
        <NavbarUI
          all={all}
          large={large}
          medium={medium}
          small={small}
          theme={theme}
          themes={themes}
        >
          <LogoUI>
            <Link href="/">contractor pro™</Link>
          </LogoUI>
          <NavUI>
            <ThemeSwitch all={"margin-left: 40px;"} />
            {links.map((item, i) => {
              return (
                <LinkUI key={i}>
                  <Link href={item.url}>{item.text}</Link>
                </LinkUI>
              );
            })}
            <Button
              href={"/contact"}
              all={`background: ${themes.button}; color: #fff; margin-left: 40px`}
            >
              Get a Quote
            </Button>
          </NavUI>
          <MobileUI
            dark={themes[theme] == "dark"}
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <X size={24} /> : <Menu size={24} />}
          </MobileUI>
        </NavbarUI>
      </Cont>
      {showMenu ? (
        <MobileMenuUI dark={themes[theme] == "dark"}>
          <Link href="/#work">
            <MobileLinkUI
              dark={themes[theme] == "dark"}
              onClick={() => setShowMenu(false)}
            >
              Home
            </MobileLinkUI>
          </Link>
          <Link href="/about">
            <MobileLinkUI
              dark={themes[theme] == "dark"}
              onClick={() => setShowMenu(false)}
            >
              About
            </MobileLinkUI>
          </Link>
          <Link href="/services">
            <MobileLinkUI
              dark={themes[theme] == "dark"}
              onClick={() => setShowMenu(false)}
            >
              Services
            </MobileLinkUI>
          </Link>
          <Link href="/work">
            <MobileLinkUI
              dark={themes[theme] == "dark"}
              onClick={() => setShowMenu(false)}
            >
              Work
            </MobileLinkUI>
          </Link>

          <Link href="/contact">
            <MobileLinkUI
              dark={themes[theme] == "dark"}
              onClick={() => setShowMenu(false)}
            >
              Contact
            </MobileLinkUI>
          </Link>

          <MobileLinkUI
            dark={themes[theme] == "dark"}
            target="_blank"
            href="https://github.com/julianmayes"
            onClick={() => setShowMenu(false)}
          >
            <Instagram size={24} />
          </MobileLinkUI>
          <MobileLinkUI
            dark={themes[theme] == "dark"}
            target="_blank"
            href="https://www.linkedin.com/in/julian-mayes-b27898134/"
            onClick={() => setShowMenu(false)}
          >
            <Linkedin size={24} />
          </MobileLinkUI>
          <MobileLinkUI
            dark={themes[theme] == "dark"}
            target="_blank"
            href="https://www.linkedin.com/in/julian-mayes-b27898134/"
            onClick={() => setShowMenu(false)}
          >
            <Facebook size={24} />
          </MobileLinkUI>
        </MobileMenuUI>
      ) : (
        <></>
      )}
    </>
  );
};

const Cont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9999;
  background: ${(props) => themes[props.theme].primary};
`;

const NavbarUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  zindex: 9999;

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
  font-weight: 700;
  font-size: 24px;
`;

const NavUI = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${sizes.small}) {
    display: none;
  }
`;

const LinkUI = styled.div`
  margin-left: 40px;
`;

const MobileUI = styled.div`
  display: none;
  cursor: pointer;

  color: ${(props) => (props.dark ? "white" : "black")};
  @media (max-width: ${sizes.small}) {
    display: flex;
  }
`;

const MobileMenuUI = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  background: ${(props) => (props.dark ? "black" : "white")};
  @media (max-width: ${sizes.small}) {
    display: flex;
    padding: 0px 5% 0 5%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const MobileLinkUI = styled.a`
  cursor: pointer;
  margin: 0 0 40px 0;

  color: ${(props) => (props.dark ? "white" : "black")};
`;
