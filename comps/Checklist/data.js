import { Activity, Calendar, Clock, Mail, Map, Monitor, PenTool, Phone } from "react-feather";

export const links = [
  {
    head: "Hosting Fees Included",
    text: "Hosting fees are built right into the monthly payment.",
    url: "tel: 123-456-7890",
    icon: <Monitor />,
    target: "",
  },
  {
    head: "Web Design & Development",
    text: "Includes continuous design, development, and testing so your website never goes out of date.",
    url: "mailto: info@constructor.com",
    icon: <PenTool />,
    target: "",
  },
  {
    head: "Google Analytics",
    text: "We install Analytics for free to monitor traffic and where it comes from.",
    url: "https://www.google.com/maps/place/149+W+70th+St+%239000,+Los+Angeles,+CA+90003,+USA/@33.9767114,-118.2779139,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c9b55e017afd:0xf4e2eb9d7b541c26!8m2!3d33.976707!4d-118.2757252",
    icon: <Activity />,
    target: "_blank",
  },
  {
    head: "7 Day Support",
    text: "We are available to make updates 7 days of the week.",
    url: "https://www.google.com/maps/place/149+W+70th+St+%239000,+Los+Angeles,+CA+90003,+USA/@33.9767114,-118.2779139,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c9b55e017afd:0xf4e2eb9d7b541c26!8m2!3d33.976707!4d-118.2757252",
    icon: <Calendar />,
    target: "_blank",
  },
];
