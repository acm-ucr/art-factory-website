import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { PiTiktokLogoBold } from "react-icons/pi";

export const socials = [
  // pyNumb used to center the smaller link icon with the other larger ones
  {
    icon: <FaDiscord size="48px" />,
    name: "Discord",
    color: "text-art-pink-100",
    pyNumb: "",
  },
  {
    icon: <AiFillInstagram size="48px" />,
    name: "Instagram",
    color: "text-art-blue-200",
    pyNumb: "",
  },
  {
    icon: <MdEmail size="48px" />,
    name: "Email",
    color: "text-art-pink-100",
    pyNumb: "",
  },
  {
    icon: <PiTiktokLogoBold size="48px" />,
    name: "TikTok",
    color: "text-art-pink-100",
    pyNumb: "",
  },
  {
    icon: <FaLink size="32px" />,
    name: "Highlander",
    color: "text-art-pink-100",
    pyNumb: "py-2",
  },
];
