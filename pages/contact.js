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

export default function Contact() {
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
        <ContactForm color={themes[theme]} />
      </Section>
    </Container>
  );
}