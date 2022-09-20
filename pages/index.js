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
          "margin: 130px 0 50px 0; width: 80vw; max-width: 1600px; align-items: center;"
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
            all={"margin: 0 0 40px 0; maxWidth: 800px;"}
            large={"font-size: 48px;"}
            xsmall={"font-size: 36px;"}
          >
            We provide effective <br></br> contracting services
          </H1>
          <Text all={"margin: 0 0 40px 0; max-width: 530px;"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            feugiat pharetra quis imperdiet cursus tristique tincidunt non
            vitae.
          </Text>
          <Container all={"flex-direction: row"} xsmall={"flex-direction: column"}>
            <Button all={`background: ${themes.button}; color: #fff;`}>
              Get a Quote
            </Button>
            <Button all={"margin: 0 0 0 20px;"} xsmall={"margin: 20px 0 0 0;"}>Our Services</Button>
          </Container>
        </Container>
        <Img src="/interior.jpg" />
      </Section>

      <Section all={"margin: 50px 0;"}>
        <ContactCard />
      </Section>

      <Section
        all={
          "margin: 100px 0; width: 80vw; max-width: 1600px; align-items: center;"
        }
        medium={"width: 90vw; align-items: center;"}
        small={"width: 90vw; flex-direction: column;"}
      >
        <Container
          all={"margin:0 40px 0 0;"}
          small={"margin:0 0 60px 0; align-items: center; text-align: center;"}
          xsmall={"align-items: flex-start; text-align: left;"}
        >
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
        <Img src="/home.jpg" />
      </Section>

      <Section
        all={
          "margin: 100px 0; width: 80vw; max-width: 1600px; align-items: center;"
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
          <H3 all={`margin: 0 0 20px 0; maxWidth: 800px;`}>What We Do</H3>
          <H2 all={"margin: 0 0 40px 0; maxWidth: 800px;"}>
            Our comprehensive <br /> set of services
          </H2>
          <Services />
        </Container>
      </Section>

      <Section
        all={
          "margin: 100px 0; width: 80vw; max-width: 1600px; align-items: center;"
        }
        medium={"width: 90vw; align-items: center;"}
        small={"width: 90vw; flex-direction: column-reverse;"}
      >
        <Img src="/quality.jpg" />
        <Container
          all={"margin:0 0 0 40px;"}
          small={"margin:0 0 60px 0; align-items: center; text-align: center;"}
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H3 all={`margin: 0 0 20px 0; maxWidth: 800px;`}>Why Us</H3>
          <H2 all={"margin: 0 0 40px 0; maxWidth: 800px;"}>
            An exceptional quality <br /> that cant be beaten
          </H2>
          <Text all={"margin: 0 0 60px 0; max-width: 530px;"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            feugiat pharetra quis imperdiet cursus tristique tincidunt non
            vitae.
          </Text>
          <Container all={"flex-direction: row"}>
            <Button all={`background: ${themes.button}; color: #fff;`}>
              Get a Quote
            </Button>
          </Container>
        </Container>
      </Section>

      <Section
        all={
          "margin: 100px 0; width: 80vw; max-width: 1600px; align-items: center;"
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
          <H3 all={`margin: 0 0 20px 0; maxWidth: 800px;`}>Testimonials</H3>
          <H2 all={"margin: 0 0 60px 0; maxWidth: 800px;"}>
            What our clients say <br /> about us and our work
          </H2>
          <Testimonials />
        </Container>
      </Section>

      <Section
        all={
          "margin: 100px 0; width: 80vw; max-width: 1600px; align-items: center;"
        }
        medium={"width: 90vw; align-items: center;"}
        small={"width: 90vw; flex-direction: column;"}
      >
        <ContactForm color={themes[theme]} />
      </Section>
    </Container>
  );
}
