/* import styled from "styled-components";
import emailjs from "emailjs-com";
import { H2 } from "./Text/H2";
import { Button } from "./Button";
import { themes } from "../utils/variables";
import { ContactCard } from "./ContactCard/ContactCard";
import { H3 } from "./Text/H3";

export default function ContactForm({ dark, setDark, color }) {
  const sendEmail = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    emailjs
      .sendForm(
        "service_ws7nj4q",
        "template_4b73yn9",
        e.target,
        "user_rKb8FhbgHefKWYYTkB8q0"
      )
      .then(
        (result) => {},
        (error) => {}
      );
  };

  return (
    <ContainerUI>
      <ColumnUI>
        <H2 all={"margin: 0 0 20px 0;"}>Get in touch.</H2>
        <TextUI>
          Let us know what you would like to work on. We will get back to you as
          soon as we can!
        </TextUI>
        <ContactCard
          all={"grid-template-columns: 2fr; grid-gap: 40px; width: 0vw;"}
          medium={"grid-template-columns: 2fr; grid-gap: 40px; width: 0vw;"}
          small={"grid-template-columns: 2fr; grid-gap: 40px; width: 0vw;"}
        />
      </ColumnUI>

      <FormUI onSubmit={sendEmail}>
        <H3>Your Name</H3>

        <InputUI
          color={color}
          type="text"
          placeholder="Name"
          name="user_name"
        />

        <H3>Your Email</H3>

        <InputUI
          color={color}
          type="text"
          name="user_email"
          placeholder="Email"
        />

        <H3>Your Message</H3>

        <InputUI
          color={color}
          type="text"
          name="message"
          placeholder="Your Message"
        />

        <Button
          all={`background: ${themes.button}; color: #fff;`}
          type="submit"
        >
          Send
        </Button>
      </FormUI>
    </ContainerUI>
  );
}

const ContainerUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const ColumnUI = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 60px 0;
`;

const TextUI = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 0 40px 0;

  @media (max-width: 700px) {
    width: 100%;
  }
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
`;
 */