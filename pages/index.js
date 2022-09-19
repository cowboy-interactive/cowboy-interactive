import { Button } from "../comps/Button";
import { Container } from "../comps/Container";
import { Navbar } from "../comps/Navbar/Navbar";
import { Section } from "../comps/Section";
import { H1 } from "../comps/Text/H1";
import { Text } from "../comps/Text/Text";
import Image from "next/image";
import { Hero } from "../comps/Hero";
import { Img } from "../comps/Img";
import { H2 } from "../comps/Text/H2";
import { themes } from "../utils/variables";
import { useTheme } from "../utils/provider";
import { H3 } from "../comps/Text/H3";
import { ContactCard } from "../comps/ContactCard/ContactCard";

export default function Home() {
  const { theme } = useTheme();
  return (
    <Container all={"align-items: center"}>
      <Navbar
        all={"height: 80px; width: 80vw; max-width: 1600px; "}
        medium={"width: 90vw;"}
      />
      <Section
        all={
          "margin: 50px 0; width: 80vw; max-width: 1600px; align-items: center;"
        }
        medium={"width: 90vw; align-items: center;"}
        small={"width: 90vw; flex-direction: column;"}
      >
        <Container small={"margin-bottom: 60px; align-items: center;"} xsmall={"align-items: flex-start;"}>
          <H1
            all={"margin: 0 0 40px 0; maxWidth: 800px;"}
            large={"font-size: 48px;"}
            xsmall={"font-size: 36px;"}
          >
            We provide effective <br></br> contracting services
          </H1>
          <Text all={"margin: 0 0 60px 0; max-width: 530px;"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            feugiat pharetra quis imperdiet cursus tristique tincidunt non
            vitae.
          </Text>
          <Container all={"flex-direction: row"}>
            <Button all={`background: ${themes.highlight}; color: #fff;`}>
              Get a Quote
            </Button>
            <Button all={"margin-left: 20px;"}>Our Services</Button>
          </Container>
        </Container>
        <Img
          src="/interior.jpg"
          all={"width: 700px; height: 100%;"}
          large={"width: 600px; height: 100%;"}
          small={"width: 100%; height: 100%;"}
        />
      </Section>

      <Section all={"margin: 50px 0;"}>
        <ContactCard />
      </Section>

      <Section
        all={
          "margin: 50px 0; width: 80vw; max-width: 1600px; align-items: center;"
        }
        medium={"width: 90vw; align-items: flex-start;"}
        small={"width: 90vw; flex-direction: column;"}
      >
        <Container small={"margin-bottom: 60px;"}>
          <H3 all={`margin: 0 0 20px 0; maxWidth: 800px;`}>About Us</H3>
          <H2 all={"margin: 0 0 40px 0; maxWidth: 800px;"}>
            A team of reliable and <br /> experienced contractors
          </H2>
          <Text all={"margin: 0 0 60px 0; max-width: 530px;"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            feugiat pharetra quis imperdiet cursus tristique tincidunt non
            vitae.
          </Text>
          <Container all={"flex-direction: row"}>
            <Button>About Our Company</Button>
          </Container>
        </Container>
        <Img
          src="/home.jpg"
          all={"width: 700px; height: 100%;"}
          large={"width: 600px; height: 100%;"}
          small={"width: 100%; height: 100%;"}
        />
      </Section>
    </Container>
  );
}
