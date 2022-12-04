import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { Button } from "../Button";
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from "../../utils/provider";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Menu, X } from "react-feather";
import { useRouter } from "next/router";

export const Navbar = ({ all, large, medium, small }) => {
  const { theme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href).then(() => {
      setShowMenu(false);
    });
  };

  return (
    <>
      <Cont
        theme={theme}
        themes={themes}
        boxShadow={showMenu ? "0" : "0px 4px 20px rgba(0, 0, 0, 0.1)"}
      >
        <NavbarUI
          all={all}
          large={large}
          medium={medium}
          small={small}
          theme={theme}
          themes={themes}
        >
          <LogoUI theme={theme} themes={themes}>
            <Link href="/">Cowboy Interactive</Link>
          </LogoUI>
          <Row>
            <ThemeSwitch />
            <NavUI>
              {links.map((item, i) => {
                return (
                  <LinkUI key={i}>
                    <Link href={item.url}>{item.text}</Link>
                  </LinkUI>
                );
              })}
              <Button
                href={"/contact"}
                all={`background: ${themes.button}; color: #fff; margin-left: 40px;border: none`}
                initial={"opacity: 1"}
              >
                Contact Us
              </Button>
            </NavUI>
            <MobileUI
              theme={theme}
              themes={themes}
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <X size={24} /> : <Menu size={24} />}
            </MobileUI>
          </Row>
        </NavbarUI>
      </Cont>
      {showMenu ? (
        <MobileMenuUI theme={theme} themes={themes}>
          <MobileLinkUI
            theme={theme}
            themes={themes}
            onClick={(e) => handleClick(e, "/")}
          >
            Home
          </MobileLinkUI>
          <MobileLinkUI
            theme={theme}
            themes={themes}
            onClick={(e) => handleClick(e, "/blog")}
          >
            Blog
          </MobileLinkUI>
          <MobileLinkUI
            theme={theme}
            themes={themes}
            onClick={(e) => handleClick(e, "/contact")}
          >
            Contact Us
          </MobileLinkUI>

          <Row all={"margin: 20px 0 0 0"}>
            <MobileIcon
              theme={theme}
              themes={themes}
              target="_blank"
              href="https://www.instagram.com/cowboyinteractive/"
              onClick={() => setShowMenu(false)}
            >
              <Instagram size={24} />
            </MobileIcon>
            <MobileIcon
              theme={theme}
              themes={themes}
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100086089315730"
              onClick={() => setShowMenu(false)}
            >
              <Facebook size={24} />
            </MobileIcon>
          </Row>
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
  color: ${(props) => themes[props.theme].secondary};
  box-shadow: ${({ boxShadow }) => boxShadow};
`;

const NavbarUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  zindex: 9999;

  ${({ all }) => all};

  @media (max-width: ${sizes.large}) {
    ${({ large }) => large};
  }

  @media (max-width: ${sizes.medium}) {
    ${({ medium }) => medium};
  }

  @media (max-width: ${sizes.small}) {
    ${({ small }) => small};
  }

  @media (max-width: ${sizes.xsmall}) {
    ${({ xsmall }) => xsmall};
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ all }) => all};
`;

const LogoUI = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 18px;
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
  font-weight: 500;
`;

const MobileUI = styled.div`
  display: none;
  cursor: pointer;
  margin: 0 0 0 40px;

  color: ${(props) => themes[props.theme].secondary};
  @media (max-width: ${sizes.small}) {
    display: flex;
  }
`;

const MobileMenuUI = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: ${(props) => themes[props.theme].primary};
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

  color: ${(props) => themes[props.theme].secondary};
`;

const MobileIcon = styled.a`
  cursor: pointer;
  margin: 0 20px;

  color: ${(props) => themes[props.theme].secondary};
`;
