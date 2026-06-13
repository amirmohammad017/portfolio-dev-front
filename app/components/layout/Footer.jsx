import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import SocialLink from "../btn/SocialLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/yourusername",
      icon: FaGithub,
      label: "GitHub",
      iconSize: 18,
      hoverClass:
        "hover:text-red-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: FaLinkedinIn,
      label: "LinkedIn",
      iconSize: 18,
      hoverClass:
        "hover:text-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.25)]",
    },
    {
      href: "mailto:amirm.1774@email.com",
      icon: HiOutlineMail,
      label: "Email",
      iconSize: 20,
      hoverClass:
        "hover:text-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.25)]",
    },
  ];

  return (
    <footer className="w-full px-6 py-5 bg-black/90 backdrop-blur-md border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="text-sm text-white/40 tracking-wide text-center">
          © {currentYear} All rights reserved.
        </p>

        <nav className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
              size={40}
              iconSize={link.iconSize}
              hoverClass={link.hoverClass}
            />
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
