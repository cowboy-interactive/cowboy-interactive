import { Button } from "../comps/Button";
import { Container } from "../comps/Container";
import { Section } from "../comps/Section";
import { H1 } from "../comps/Text/H1";
import { Text } from "../comps/Text/Text";
import { Img } from "../comps/Img";
import { H2 } from "../comps/Text/H2";
import { themes } from "../utils/variables";
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
            Web Design and Development for Your Small{"\u00A0"}Business
          </H1>
          <Text
            all={"margin: 0 0 40px 0; max-width: 550px;"}
            initial={{ opacity: 0 }}
          >
            We offer custom web design and development services for small
            businesses, starting at $250 per month. Our hand-written code
            ensures the best performance for your website, bringing more
            customers and revenue to{"\u00A0"}your{"\u00A0"}business.
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
          <H2 initial={{ opacity: 0 }}>Full-Service Website{"\u00A0"}Care</H2>
          <Text
            all={"margin: 0 0 60px 0; max-width: 500px;"}
            initial={{ opacity: 0 }}
          >
            Leave the design, development, and maintenance of your
            website to us. We ensure that your site meets accessibility,
            performance, and search engine standards, and we offer continuous
            design updates to keep your{"\u00A0"}site{"\u00A0"}fresh.
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
          <H2 all={"max-width: 400px;"} initial={{ opacity: 0 }}>
            $250 per Month with No{"\u00A0"}Upfront{"\u00A0"}Costs
          </H2>
          <Text
            all={"margin: 0 0 60px 0; max-width: 500px;"}
            initial={{ opacity: 0 }}
          >
            Sign up for our standard package for just $250 per month, with no
            upfront costs. This includes hosting fees, design and development,
            Google Analytics, and 7-day support. Need a custom plan? Contact us
            for{"\u00A0"}more{"\u00A0"}information.
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
            Choose a Plan that fits your{"\u00A0"}Business{"\u00A0"}needs
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
          <H2 initial={{ opacity: 0 }}>Custom Website Templates</H2>
          <Text
            all={"margin: 0 0 60px 0; max-width: 400px;"}
            initial={{ opacity: 0 }}
          >
            Need a starting point for your custom website? Check out our
            pre-designed{"\u00A0"}templates.
          </Text>
          <Templates />
        </Container>
      </Section>

      <Section>
        <ContactForm color={themes[theme]} />
      </Section>
    </Container>
  );
}
