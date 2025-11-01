import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  // Array of phrases for the typing animation
  typewriterPhrases: [
    "MOHAMMED NOUHI",
    "Frontend-First Specialist",
    "Let's build something unforgettable.",
  ],
  glowText: "Full-Stack Specialist",
  subTitle: "Crafting modern web experiences with a Moroccan soul.",
  highlight: ["unforgettable"],
};

export const profileCard = {
  title: "Mohammed NOUHI",
  subTitle: "Frontend Software Developer",
  body: `Passionate about building scalable, user-friendly web applications. Always exploring new technologies and best practices to improve development processes. And I like anime.`,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/mohammednouhi/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      url: "https://github.com/Mh-NOUHICoder",
      icon: <IoLogoGithub size={20} />,
    },
  ],
  tooltip: {
    imagePath: "/images/profile.jpg",
    title: "Hey...",
    subTitle: "That's me!",
  },
};
