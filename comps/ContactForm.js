import styled from "styled-components";
import emailjs from "emailjs-com";
import { H2 } from "./Text/H2";
import { themes } from "../utils/variables";
import { ContactCard } from "./ContactCard/ContactCard";
import { H3 } from "./Text/H3";
import { Text } from "./Text/Text";
import { motion } from "framer-motion";
import { useState } from "react";
import Router, { withRouter } from "next/router";

export const ContactForm = ({
  color,
  contact = false,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [wasSent, setWasSent] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      validateEmail(email) &&
      website.length > 0 &&
      message.length > 0 &&
      name.length > 0
    ) {
      emailjs
        .sendForm(
          "service_5tubv6h",
          "template_wgw1itj",
          e.target,
          "ROr9Pf2vE-Asa3fil"
        )
        .then(
          (result) => {
            console.log(result.text);
            Router.push(
              {
                pathname: "/thankyou",
                query: {
                  name: name,
                  email: email,
                  website: website,
                  message: message,
                },
              },
              "/thankyou"
            );
            /*             setWasSent("Your message was sent!");
            setShowMessage(true);
            setMessage("");
            setName("");
            setEmail("");
            setWebsite("");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setTimeout(() => {
              setShowMessage(false);
            }, 1000); */
          },
          (error) => {
            console.log(error.text);
            setWasSent("Error");
            setShowMessage(true);
            setTimeout(() => {
              setShowMessage(false);
            }, 1000);
          }
        );
    } else {
      setShowMessage(true);
      setWasSent("Enter all fields to send");
      setTimeout(() => {
        setShowMessage(false);
      }, 1000);
    }
  };

  return (
    <>
      {showMessage ? (
        <MessageSentUI>
          <MessageTextUI>{wasSent}</MessageTextUI>
        </MessageSentUI>
      ) : (
        <></>
      )}
      <Cont
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
      >
        <ColumnUI>
          <H2 all={"margin: 0 0 20px 0;"}>Get in touch.</H2>
          <Text all={"max-width: 500px;"}>
            Contact us to get a free audit of your current website. We will get
            back to you as soon as we can!
          </Text>
          {contact && (
            <ContactCard
              all={"grid-template-columns: 2fr; grid-gap: 40px; width: 0vw;"}
              medium={"grid-template-columns: 2fr; grid-gap: 40px; width: 0vw;"}
              small={"grid-template-columns: 2fr; grid-gap: 40px; width: 0vw;"}
            />
          )}
        </ColumnUI>

        <FormUI onSubmit={sendEmail}>
          <H3>Your Name</H3>

          <InputUI
            color={color}
            type="text"
            placeholder="Name"
            name="user_name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <H3>Your Email</H3>

          <InputUI
            color={color}
            type="email"
            name="user_email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <H3>Your Website</H3>

          <InputUI
            color={color}
            type="text"
            name="website"
            placeholder="Website URL or business name"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <H3>Message</H3>

          <InputUI
            color={color}
            type="text"
            name="message"
            placeholder="Let us know what you would like to work on"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <ButtonUI
            all={`background: ${themes.button}; color: #fff; border: none;`}
          >
            Send
          </ButtonUI>
        </FormUI>
      </Cont>
    </>
  );
};

const Cont = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const ColumnUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 60px 0;
`;

const FormUI = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const InputUI = styled.input`
  border-radius: 0;
  -webkit-appearance: none;
  width: 100%;
  padding: 0px 0 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 40px 0 60px 0;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  background: transparent;
  color: ${(props) => props.color.secondary};
  border-bottom: 1px solid ${(props) => props.color.secondary};
  font-weight: 500;

  &::placeholder {
    opacity: 0.5;
  }
`;

const MessageSentUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
`;

const MessageTextUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  max-width: 400px;
  width: 50%;
  background-color: white;
  z-index: 10000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: black;
  color: white;
`;

const ButtonUI = styled(motion.button)`
  width: 200px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  transition: 0.2s ease;
  font-weight: 500;
  font-size 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

  ${(props) => props.all};

  &:hover {
    filter: brightness(110%);
    box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25);
  }
`;
