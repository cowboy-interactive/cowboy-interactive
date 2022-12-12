import { Container } from "../comps/Container";
import { Navbar } from "../comps/Navbar/Navbar";
import { Section } from "../comps/Section";
import { themes } from "../utils/variables";
import { ContactForm } from "../comps/ContactForm";
import { useTheme } from "../utils/provider";
import { H1 } from "../comps/Text/H1";
import { Text } from "../comps/Text/Text";
import { Button } from "../comps/Button";
import { H3 } from "../comps/Text/H3";
import { H2 } from "../comps/Text/H2";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ThankYou(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    setName(router.query.name);
    setEmail(router.query.email);
    setWebsite(router.query.website);
    setMessage(router.query.message);
  }, [router.query]);

  return (
    <Container all={"align-items: center"}>
      <Section
        all={
          "margin: 180px 0 80px 0; min-height: calc(100vh - 550px); align-items: flex-start;"
        }
        small={"margin: 180px 0 40px 0; align-items: center;"}
      >
        <Container
          small={"align-items: center; text-align: center; "}
          xsmall={"align-items: flex-start; text-align: left;"}
        >
          <H2
            initial={{ opacity: 0 }}
            all="max-width: 1000px;"
            large="max-width: 700px;"
            xsmall="max-width: 400px;"
          >
            Thanks for getting in touch{name && ", " + name}.
          </H2>
          <Text
            all={"margin: 0 0 40px 0; max-width: 5000px;"}
            initial={{ opacity: 0 }}
          >
            We will get back to you as soon as we can{email && " at " + email}!
          </Text>
          <Container
            all={"flex-direction: row"}
            xsmall={"flex-direction: column"}
          >
            <Button
              href={"/"}
              all={`background: ${themes.button}; color: #fff; border: none`}
              initial={{ opacity: 0 }}
            >
              Back to Home
            </Button>
          </Container>
        </Container>
      </Section>
    </Container>
  );
}
