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
  {
    head: "Standard + Content",
    price: "$500 CAD",
    text: "Regularly posting content can grow your audience and organic reach. We got you covered.",
    style: "outline",
    url: "/",
    icon: <Calendar />,
    list: [
      {
        head: "1000 Word Blog Post",
        icon: <Monitor />,
      },
      {
        head: "3 Social Media Posts",
        icon: <PenTool />,
      },
      {
        head: "SEO Analytics",
        icon: <Activity />,
      },
      {
        head: "7 Day Support",
        icon: <Calendar />,
      },
    ],
    image: "/planning.jpg",
  },
  {
    head: "Standard",
    price: "$250 CAD",
    text: "Our standard 5 page website. Let us take care of your website, while you focus on the rest.",
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
    text: "Need a custom plan that fits your needs? Contact us to see what else we can do for your website.",
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
