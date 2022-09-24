import { Button } from "../comps/Button";
import { Container } from "../comps/Container";
import { Navbar } from "../comps/Navbar/Navbar";
import { Section } from "../comps/Section";
import { H1 } from "../comps/Text/H1";
import { Text } from "../comps/Text/Text";
import { Img } from "../comps/Img";
import { H2 } from "../comps/Text/H2";
import { themes } from "../utils/variables";
import { H3 } from "../comps/Text/H3";
import { ContactCard } from "../comps/ContactCard/ContactCard";
import { Services } from "../comps/Services/Services";
import { Testimonials } from "../comps/Testimonials/Testimonials";
import ContactForm from "../comps/ContactForm";
import { useTheme } from "../utils/provider";
import { Gallery } from "../comps/Gallery/Gallery";

export default function Work() {
  const { theme } = useTheme();

  return (
    <Container all={"align-items: center"}>
      <Navbar
        all={"height: 80px; width: 80vw; max-width: 1600px; "}
        medium={"width: 90vw;"}
      />

      <Section
        all={
          "margin: 130px 0 80px 0; width: 80vw; max-width: 1600px; align-items: center;"
        }
        medium={"width: 90vw; align-items: center;"}
        small={"width: 90vw; flex-direction: column;"}
      >
        <Container
          all={"align-items: space-between; "}
          small={
            "margin-bottom: 60px; align-items: center; text-align: center;"
          }
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H3 all={`margin: 0 0 20px 0; maxWidth: 800px;`}>Past Projects</H3>
          <H2 all={"margin: 0 0 60px 0; max-width: 500px;"}>
            Our project results speak <br /> for themselves
          </H2>
          <Gallery />
        </Container>
      </Section>
    </Container>
  );
}
