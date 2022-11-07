import {
  Activity,
  Calendar,
  Database,
  Image,
  Layout,
  Mail,
  Map,
  Monitor,
  Paperclip,
  PenTool,
  Phone,
  ShoppingBag,
  Tool,
} from "react-feather";

export const links = [
  {
    head: "Standard",
    price: "$250 CAD",
    text: (
      <span>
        Our standard 5 page website. <br /> Let us take care of your website,
        <br />
        while you focus on the rest.
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
        icon: <Layout />,
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
        head: "Content Management",
        icon: <Database />,
      },
      {
        head: "Logo Design",
        icon: <PenTool />,
      },
      {
        head: "Custom Graphics",
        icon: <Image />,
      },
      {
        head: "Ecommerce",
        icon: <ShoppingBag />,
      },
    ],
    image: "/contracting.jpg",
  },
];
