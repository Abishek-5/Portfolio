import Link from "next/link";

import {
  RiDribbbleLine,
  RiLinkedinFill,
  RiBehanceFill,
  RiMailFill,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abishek-a-903457171/",
    Icon: RiLinkedinFill,
  },

  {
    name: "Gmail",
    link: "mailto:abishekup7@gmail.com",
    Icon: RiMailFill,
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/abishek0503",
    Icon: RiDribbbleLine,
  },
  {
    name: "Behance",
    link: "https://www.behance.net/abisheka0503",
    Icon: RiBehanceFill,
  },

  // {
  //   name: "Github",
  //   link: "https://github.com/sanidhyy/modern-portfolio",
  //   Icon: RiGithubLine,
  // },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Behance"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
