import { FaDiscord, FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";

const style = "text-3xl sm:text-4xl md:text-6xl my-0 mb-1.5 sm:mb-3 rotate-90";

export const socials = [
  {
    icon: <FaDiscord />,
    name: "Discord",
    link: "https://discord.gg/QJQ2YH66",
  },
  {
    icon: <AiFillInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/artfactory.ucr/",
  },
  {
    icon: <MdEmail />,
    name: "Email",
    link: "mailto:artfactoryucr@gmail.com",
  },
  {
    icon: <FaLink className={style} />,
    name: "Highlander",
    link: "https://highlanderlink.ucr.edu/organization/artfactoryucr",
  },
];
export const FOOTER = [
  {
    icon: <FaDiscord />,
    link: "https://discord.gg/QJQ2YH66",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/artfactory.ucr/",
  },
  {
    icon: <IoMailOutline />,
    link: "mailto:artfactoryucr@gmail.com",
  },
];
