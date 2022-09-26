import { Button } from "../comps/Button";
import { Container } from "../comps/Container";
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
import { Navbar } from "../comps/Navbar/Navbar";
import { Scene } from "../comps/Scene";
import useScrollTop from "../hooks/useScrollTop";
import useWindowSize from "../hooks/useWindowSize";
import { useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <Scene
        windowSize={windowSize}
        scrollTop={scrollTop}
        position={position}
      />
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
            small={
              "margin:0 0 60px 0; align-items: center; text-align: center;"
            }
            xsmall={"align-items: flex-start; text-align: left;"}
          >
            <H1 initial={{ opacity: 0 }}>
              We provide effective <br /> contracting services
            </H1>
            <Text
              all={"margin: 0 0 60px 0; max-width: 500px;"}
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
        </Section>

        <Section all={"margin: 50px 0;"}>
          <ContactCard
            all={"width: 60vw; justify-content: space-between;"}
            medium={"width: 80vw"}
            small={"flex-direction: column; align-items: center; "}
            xsmall={"align-items: flex-start;"}
          />
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
            small={
              "margin:0 0 60px 0; align-items: center; text-align: center;"
            }
            xsmall={"align-items: flex-start; text-align: left;"}
          >
            <H3 all={`margin: 0 0 20px 0;`} initial={{ opacity: 0 }}>
              About Us
            </H3>
            <H2
              all={"margin: 0 0 40px 0; maxWidth: 800px;"}
              initial={{ opacity: 0 }}
            >
              A team of reliable and <br /> experienced contractors
            </H2>
            <Text
              all={"margin: 0 0 60px 0; max-width: 530px;"}
              initial={{ opacity: 0 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              feugiat pharetra quis imperdiet cursus tristique tincidunt non
              vitae.
            </Text>
            <Container all={"flex-direction: row"}>
              <Button href={"/about"} initial={{ opacity: 0 }}>
                About Our Company
              </Button>
            </Container>
          </Container>
          <Img src="/home.jpg" alt="home exterior" initial={{ opacity: 0 }} />
        </Section>

        <Section
          all={
            "margin: 80px 0; width: 80vw; max-width: 1600px; align-items: center;"
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
            <H3
              all={`margin: 0 0 20px 0; maxWidth: 800px;`}
              initial={{ opacity: 0 }}
            >
              What We Do
            </H3>
            <H2
              all={"margin: 0 0 40px 0; maxWidth: 800px;"}
              initial={{ opacity: 0 }}
            >
              Our comprehensive <br /> set of services
            </H2>
            <Services initial={{ opacity: 0 }} />
          </Container>
        </Section>

        <Section
          all={
            "margin: 80px 0; width: 80vw; max-width: 1600px; align-items: center;"
          }
          medium={"width: 90vw; align-items: center;"}
          small={"width: 90vw; flex-direction: column-reverse;"}
        >
          <Img
            src="/quality.jpg"
            alt="interior room"
            initial={{ opacity: 0 }}
          />
          <Container
            all={"margin:0 0 0 40px;"}
            small={
              "margin:0 0 60px 0; align-items: center; text-align: center;"
            }
            xsmall={"align-items: flex-start; text-align: left;"}
          >
            <H3
              all={`margin: 0 0 20px 0; maxWidth: 800px;`}
              initial={{ opacity: 0 }}
            >
              Why Us
            </H3>
            <H2
              all={"margin: 0 0 40px 0; maxWidth: 800px;"}
              initial={{ opacity: 0 }}
            >
              An exceptional quality <br /> that cant be beaten
            </H2>
            <Text
              all={"margin: 0 0 60px 0; max-width: 530px;"}
              initial={{ opacity: 0 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              feugiat pharetra quis imperdiet cursus tristique tincidunt non
              vitae.
            </Text>
            <Container all={"flex-direction: row"}>
              <Button
                href={"/contact"}
                all={`background: ${themes.button}; color: #fff;`}
                initial={{ opacity: 0 }}
              >
                Get a Quote
              </Button>
            </Container>
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
            all={"align-items: center; text-align: center;"}
            small={"align-items: center; text-align: center;"}
            xsmall={"align-items: flex-start; text-align: left;"}
          >
            <H3
              all={`margin: 0 0 20px 0; maxWidth: 800px;`}
              initial={{ opacity: 0 }}
            >
              Testimonials
            </H3>
            <H2
              all={"margin: 0 0 60px 0; maxWidth: 800px;"}
              initial={{ opacity: 0 }}
            >
              What our clients say <br /> about us and our work
            </H2>
            <Testimonials />
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
            all={"align-items: space-between; "}
            small={"align-items: center; text-align: center;"}
            xsmall={"align-items: flex-start; text-align: left;"}
          >
            <H3
              all={`margin: 0 0 20px 0; maxWidth: 800px;`}
              initial={{ opacity: 0 }}
            >
              Past Projects
            </H3>
            <H2
              all={"margin: 0 0 60px 0; max-width: 700px;"}
              initial={{ opacity: 0 }}
            >
              Our project results
              <br /> speak for themselves
            </H2>
            <Gallery />
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
    </>
  );
}
