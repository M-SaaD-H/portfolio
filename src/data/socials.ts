import { IconBrandX, IconMail } from "@tabler/icons-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

export const socials = {
  github: {
    name: "GitHub",
    href: "https://github.com/M-SaaD-H",
    icon: FaGithub
  },
  x: {
    name: "X",
    href: "https://x.com/_MSaaDH",
    icon: IconBrandX
  },
  peerlist: {
    name: "Peerlist",
    href: "https://peerlist.io/m_saad_h",
    icon: SiPeerlist
  },
  linkedin: {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/muhammad-saad-haider-942167317",
    icon: FaLinkedinIn
  },
  email: {
    name: "Email",
    href: "mailto:mohd.saadhaider@gmail.com",
    icon: IconMail
  }
}