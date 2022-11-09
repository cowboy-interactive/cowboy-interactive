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
import { Navbar } from "../comps/Navbar/Navbar";
import { Scene } from "../comps/Scene";
import useScrollTop from "../hooks/useScrollTop";
import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "../utils/provider";
import { useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position] = useState({ x: 0, y: 0 });

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
            "margin: 180px 0 100px 0; width: 80vw; max-width: 1600px; align-items: center;"
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
              Web Design and Development <br /> for your small business.
            </H1>
            <Text
              all={"margin: 0 0 60px 0; max-width: 400px;"}
              initial={{ opacity: 0 }}
            >
              We build, host and manage your custom website starting at $250 CAD a month.
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

        <Section
          all={
            "margin: 100px 0; width: 80vw; max-width: 1600px; justify-content: center; "
          }
          medium={"width: 90vw; align-items: center;"}
          small={"width: 90vw; flex-direction: column;"}
        >
          <Container
            all={"align-items: center; text-align: center; "}
            small={
              "margin-bottom: 60px; align-items: center; text-align: center;"
            }
            xsmall={"align-items: flex-start; text-align: left;"}
          >
            <H2
              all={"margin: 0 0 40px 0; max-width: 700px;"}
              initial={{ opacity: 0 }}
            >
              We take care of all your website needs, so you can focus on your
              business.
            </H2>
            <Text
              all={"margin: 0 0 60px 0; max-width: 500px;"}
              initial={{ opacity: 0 }}
            >
              We design and develop custom websites for small businesses
              anywhere in Canada. Our code is hand-written to ensure the best
              performance possible, bringing more customers to your website and
              more revenue to your business.
            </Text>
            <Services initial={{ opacity: 0 }} />
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
            all={"margin:0 40px 0 0; width: 50%;"}
            small={
              "margin:0 0 60px 0; align-items: center; text-align: center; width: 100%;"
            }
            xsmall={"align-items: flex-start; text-align: left;"}
          >
            <H2 all={"margin: 0 0 40px 0;"} initial={{ opacity: 0 }}>
              No sign up costs.
              <br />
              Just $250 CAD a month.
            </H2>
            <Text
              all={"margin: 0 0 60px 0; max-width: 500px;"}
              initial={{ opacity: 0 }}
            >
              $0 down for a standard 5 page small business website. Everything
              you need to grow your online presence. Cancel anytime with no fees
              or hassle.
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
          <Img src="/town.svg" alt="interior room" initial={{ opacity: 0 }} />
        </Section>

        <Section
          all={
            "margin: 100px 0; width: 60vw; align-items: center; flex-direction: column;"
          }
          medium={"width: 90vw; align-items: center;"}
          small={"width: 60vw; flex-direction: column;"}
          xsmall={"width: 90vw; align-items: flex-start;"}
        >
          <Container
            all={"align-items: center; text-align: center;"}
            small={"align-items: center; text-align: center;"}
            xsmall={"align-items: flex-start; text-align: left;"}
          >
            <H2
              all={"margin: 0 0 60px 0; max-width: 500px;"}
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

        <Section
          all={
            "margin: 100px 0; width: 80vw; max-width: 1600px; align-items: center;"
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
    </>
  );
}
