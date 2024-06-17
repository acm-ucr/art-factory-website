import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";

const style =
  "text-3xl sm:text-4xl lg:text-6xl my-1.0 mb-1.5 sm:mb-2.5 rotate-90";

export const socials = [
  {
    icon: <FaDiscord />,
    name: "Discord",
  },
  {
    icon: <AiFillInstagram />,
    name: "Instagram",
  },
  {
    icon: <MdEmail />,
    name: "Email",
  },
  {
    icon: <FaLink className={style} />,
    name: "Highlander",
  },
];
