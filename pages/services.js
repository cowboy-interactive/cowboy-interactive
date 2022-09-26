import { Container } from "../comps/Container";
import { Navbar } from "../comps/Navbar/Navbar";
import { Section } from "../comps/Section";
import { Services } from "../comps/Services/Services";
import { H1 } from "../comps/Text/H1";
import { Text } from "../comps/Text/Text";
import ContactForm from "../comps/ContactForm";
import { themes } from "../utils/variables";
import { useTheme } from "../utils/provider";

export default function Service() {
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
          all={"align-items: center; text-align: center;"}
          small={
            "margin-bottom: 60px; align-items: center; text-align: center;"
          }
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H1
            all={"margin: 0 0 40px 0; max-width: 800px;"}
            initial={{ opacity: 0 }}
          >
            Our comprehensive <br /> set of services
          </H1>
          <Text
            all={"margin: 0 0 60px 0; max-width: 500px;"}
            initial={{ opacity: 0 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            feugiat pharetra quis imperdiet cursus tristique tincidunt non
            vitae.
          </Text>
          <Services />
        </Container>
      </Section>
      <Section
        all={
          "margin: 80px 0; width: 80vw; max-width: 1600px; align-items: center;"
        }
        medium={"width: 90vw; align-items: center;"}
        small={"width: 90vw; flex-direction: column;"}
      >
        <ContactForm color={themes[theme]} />
      </Section>
    </Container>
  );
}
