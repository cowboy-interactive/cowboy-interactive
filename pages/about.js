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
import ContactForm from "../comps/ContactForm";
import { useTheme } from "../utils/provider";
import { Stats } from "../comps/Stats/Stats";

export default function About() {
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
          all={"margin:0 40px 0 0;"}
          small={"margin:0 0 60px 0; align-items: center; text-align: center;"}
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H1
            all={"margin: 0 0 40px 0; max-width: 800px;"}
            initial={{ opacity: 0 }}
          >
            A team of reliable <br></br>and experienced contractors
          </H1>
          <Text
            all={"margin: 0 0 60px 0; max-width: 530px;"}
            initial={{ opacity: 0 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            feugiat pharetra quis imperdiet cursus tristique tincidunt non
            vitae.
          </Text>
          <Container
            all={"flex-direction: row"}
            xsmall={"flex-direction: column"}
          >
            <Button
              href={"/contact"}
              all={`background: ${themes.button}; color: #fff;`}
              initial={{ opacity: 0 }}
            >
              Get a Quote
            </Button>
            <Button
              href={"/services"}
              all={"margin: 0 0 0 20px;"}
              xsmall={"margin: 20px 0 0 0;"}
              initial={{ opacity: 0 }}
            >
              Our Services
            </Button>
          </Container>
        </Container>
        <Img src="/home.jpg" initial={{ opacity: 0 }} />
      </Section>
      <Section
        all={`padding: 40px 0; width: 100vw; justify-content: center; background: ${themes.button}}`}
        small={`padding: 80px 0;`}
      >
        <Stats />
      </Section>

      <Section
        all={
          "margin: 80px 0; width: 80vw; max-width: 1600px; align-items: center;"
        }
        medium={"width: 90vw; align-items: center;"}
        small={"width: 90vw; flex-direction: column-reverse;"}
      >
        <Img src="/interior-5.jpg" initial={{ opacity: 0 }} />
        <Container
          all={"margin:0 0 0 40px;"}
          small={"margin:0 0 60px 0; align-items: center; text-align: center;"}
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H3
            all={`margin: 0 0 20px 0; maxWidth: 800px;`}
            initial={{ opacity: 0 }}
          >
            Our story
          </H3>
          <H2
            all={"margin: 0 0 40px 0; maxWidth: 800px;"}
            initial={{ opacity: 0 }}
          >
            The story of how <br></br>contractor started
          </H2>
          <Text
            all={"margin: 0 0 60px 0; max-width: 530px;"}
            initial={{ opacity: 0 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            feugiat pharetra quis imperdiet cursus tristique tincidunt non
            vitae.
          </Text>
        </Container>
      </Section>

      <Section
        all={
          "margin: 80px 0; width: 80vw; max-width: 1600px; align-items: center;"
        }
        medium={"width: 90vw; align-items: center;"}
        small={"width: 90vw; flex-direction: column;"}
      >
        <Container
          all={"margin:0 40px 0 0;"}
          small={"margin:0 0 60px 0; align-items: center; text-align: center;"}
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H3 all={`margin: 0 0 20px 0;`} initial={{ opacity: 0 }}>
            Our mission
          </H3>
          <H2
            all={"margin: 0 0 40px 0; maxWidth: 800px;"}
            initial={{ opacity: 0 }}
          >
            Our goal is to deliver<br></br> high quality work<br></br> at an
            affordable price
          </H2>
          <Text
            all={"margin: 0 0 60px 0; max-width: 530px;"}
            initial={{ opacity: 0 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            feugiat pharetra quis imperdiet cursus tristique tincidunt non
            vitae.
          </Text>
        </Container>
        <Img src="/interior-2.jpg" initial={{ opacity: 0 }} />
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
