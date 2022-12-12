import { Button } from "../comps/Button";
import { Container } from "../comps/Container";
import { Section } from "../comps/Section";
import { H1 } from "../comps/Text/H1";
import { Text } from "../comps/Text/Text";
import { Img } from "../comps/Img";
import { H2 } from "../comps/Text/H2";
import { themes } from "../utils/variables";
import { H3 } from "../comps/Text/H3";
import { Services } from "../comps/Services/Services";
import { ContactForm } from "../comps/ContactForm";
import { Checklist } from "../comps/Checklist/Checklist";
import { Templates } from "../comps/Templates/Templates";
import { Plans } from "../comps/Plans/Plans";
import { Scene } from "../comps/Scene";
import useScrollTop from "../hooks/useScrollTop";
import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "../utils/provider";
import { useState } from "react";

export default function Home({}) {
  const { theme } = useTheme();
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position] = useState({ x: 0, y: 0 });

  return (
    <Container all={"align-items: center"}>
      <Scene
        windowSize={windowSize}
        scrollTop={scrollTop}
        position={position}
      />
      <Section
        all={"margin: 180px 0 80px 0;"}
        small={"margin: 180px 0 40px 0;"}
        xsmall={"align-items: flex-start;"}
      >
        <Container
          all={"margin:0 40px 0 0;"}
          small={"margin:0 0 60px 0; align-items: center; text-align: center; "}
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H1
            initial={{ opacity: 0 }}
            all="max-width: 1000px;"
            large="max-width: 700px;"
            xsmall="max-width: 400px;"
          >
            Web Design and Development for your small business.
          </H1>
          <Text
            all={"margin: 0 0 40px 0; max-width: 350px;"}
            initial={{ opacity: 0 }}
          >
            We build, host and manage your custom website starting at $250 a
            month.
          </Text>
          <Container
            all={"flex-direction: row"}
            xsmall={"flex-direction: column"}
          >
            <Button
              href={"/contact"}
              all={`background: ${themes.button}; color: #fff; border: none`}
              initial={{ opacity: 0 }}
            >
              Get a Free Quote
            </Button>
          </Container>
        </Container>
      </Section>

      <Section>
        <Container
          all={"align-items: center; text-align: center; "}
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H2 initial={{ opacity: 0 }}>
            We take care of all your website needs, so you can focus on your
            business.
          </H2>
          <Text
            all={"margin: 0 0 60px 0; max-width: 600px;"}
            initial={{ opacity: 0 }}
          >
            We design and develop custom websites for small businesses. Our code
            is hand-written to ensure the best performance possible, bringing
            more customers to your website and more revenue to your business.
          </Text>
          <Services initial={{ opacity: 0 }} />
        </Container>
      </Section>

      <Section>
        <Container
          all={"margin:0 40px 0 0; width: 50%;"}
          small={
            "margin:0 0 60px 0; align-items: center; text-align: center; width: 100%;"
          }
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H2 initial={{ opacity: 0 }}>
            No sign up costs.
            <br />
            Just $250 a month.
          </H2>
          <Text
            all={"margin: 0 0 60px 0; max-width: 500px;"}
            initial={{ opacity: 0 }}
          >
            $0 down for a standard 5 page small business website. Everything you
            need to grow your online presence. Cancel anytime with no fees or
            hassle.
          </Text>

          <Checklist
            all={
              "margin: 0 0 60px 0; flex-direction: column; align-items: flex-start;"
            }
            medium={"align-items: flex-start;"}
            initial={{ opacity: 0 }}
          />
          <Button
            href={"/contact"}
            all={`background: ${themes.button}; color: #fff; border: none;`}
            initial={{ opacity: 0 }}
          >
            Get a Free Quote
          </Button>
        </Container>
        <Img
          src="/images/town.svg"
          alt="western town illustration"
          initial={{ opacity: 0 }}
        />
      </Section>

      <Section
        all={"width: 60vw; flex-direction: column;"}
        medium={"width: 90vw;"}
        small={"width: 60vw;"}
        xsmall={"width: 90vw; align-items: flex-start;"}
      >
        <Container
          all={"align-items: center; text-align: center;"}
          small={"align-items: center; text-align: center;"}
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H2
            all={"margin: 0 0 60px 0; max-width: 450px;"}
            initial={{ opacity: 0 }}
          >
            Choose a plan that fits your business needs
          </H2>
        </Container>
        <Plans />
        <Button
          href={"/contact"}
          all={`background: ${themes.button}; color: #fff; border: none`}
          initial={{ opacity: 0 }}
        >
          Get a Free Quote
        </Button>
      </Section>

      <Section>
        <Container
          all={"align-items: space-between; "}
          small={"align-items: center; text-align: center;"}
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H3
            all={`margin: 0 0 20px 0; maxWidth: 800px;`}
            initial={{ opacity: 0 }}
          >
            Project Templates
          </H3>
          <H2
            all={"margin: 0 0 60px 0; max-width: 500px;"}
            initial={{ opacity: 0 }}
          >
            Choose a starting point for your custom website.
          </H2>
          <Templates />
        </Container>
      </Section>

      <Section>
        <ContactForm color={themes[theme]} />
      </Section>
    </Container>
  );
}
