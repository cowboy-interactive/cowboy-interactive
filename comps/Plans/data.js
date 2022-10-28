import {
  Activity,
  Calendar,
  Mail,
  Map,
  Monitor,
  Paperclip,
  PenTool,
  Phone,
  Tool,
} from "react-feather";

export const links = [
  /*   {
    head: "Standard + Content",
    price: "$1250 CAD",
    text: "Regularly posting content can grow your audience and organic reach. We got you covered.",
    style: "outline",
    url: "/",
    icon: <Calendar />,
    list: [
      {
        head: "Google Ad Campaign",
        icon: <Monitor />,
      },
      {
        head: "Social Media Marketing",
        icon: <PenTool />,
      },
      {
        head: "Search Engine Optimization",
        icon: <Activity />,
      },
      {
        head: "Brand Strategy",
        icon: <Calendar />,
      },
    ],
    image: "/planning.jpg",
  }, */
  {
    head: "Standard",
    price: "$250 CAD",
    text: (
      <span>
        Our standard 5 page website. <br /> Let us take care of your website,
        <br />while you focus on the rest.
      </span>
    ),
    style: "fill",
    url: "/",
    icon: <Paperclip />,
    list: [
      {
        head: "Hosting Fees Included",
        icon: <Monitor />,
      },
      {
        head: "Web Design & Development",
        icon: <PenTool />,
      },
      {
        head: "Google Analytics",
        icon: <Activity />,
      },
      {
        head: "7 Day Support",
        icon: <Calendar />,
      },
    ],
    image: "/management.jpg",
  },
  {
    head: "Custom",
    price: "Inquire",
    text: (
      <span>
        Need a custom plan that fits <br />
        your needs? Contact us to see what <br />
        we can do for your website.
      </span>
    ),
    style: "standard",
    url: "/",
    icon: <Tool />,
    list: [
      {
        head: "Content Managment",
        icon: <Monitor />,
      },
      {
        head: "Logo Design",
        icon: <PenTool />,
      },
      {
        head: "Custom Graphics",
        icon: <Activity />,
      },
      {
        head: "Eccomerce",
        icon: <Calendar />,
      },
    ],
    image: "/contracting.jpg",
  },
];
