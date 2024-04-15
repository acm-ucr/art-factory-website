import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { PiTiktokLogoBold } from "react-icons/pi";

const style = "text-6xl my-1.5 rotate-90";

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
    icon: <PiTiktokLogoBold />,
    name: "TikTok",
  },
  {
    icon: <FaLink className={style} />,
    name: "Highlander",
  },
];
