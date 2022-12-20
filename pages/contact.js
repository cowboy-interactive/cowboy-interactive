import { Container } from "../comps/Container";
import { Navbar } from "../comps/Navbar/Navbar";
import { Section } from "../comps/Section";
import { themes } from "../utils/variables";
import { ContactForm } from "../comps/ContactForm";
import { useTheme } from "../utils/provider";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <Container all={"align-items: center"}>
      <Section
        all={"margin: 180px 0 80px 0;"}
        small={"margin: 180px 0 40px 0;"}
        xsmall={"align-items: flex-start;"}
      >
        <ContactForm color={themes[theme]} />
      </Section>
    </Container>
  );
}
