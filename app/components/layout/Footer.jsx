import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";
import SocialLink from "../btn/SocialLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/amirmohammad017",
      icon: FaGithub,
      label: "GitHub",
      hoverClass:
        "hover:text-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]",
    },
    {
      href: "https://instagram.com/amirmohammad017",
      icon: FaInstagram,
      label: "Instagram",
      hoverClass:
        "hover:text-[#E1306C] hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]",
    },
    {
      href: "https://linkedin.com/in/amirmohammad-dev",
      icon: FaLinkedin,
      label: "LinkedIn",
      hoverClass:
        "hover:text-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.25)]",
    },
    {
      href: "https://t.me/AMiRmohammaD017",
      icon: FaTelegramPlane,
      label: "Telegram",
      hoverClass:
        "hover:text-blue-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]",
    },
    {
      href: "mailto:amirm.1774@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      hoverClass:
        "hover:text-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.25)]",
    },
  ];

  return (
    <footer className="w-full px-6 py-5 bg-black/90 backdrop-blur-md border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
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
              iconSize={18}
              hoverClass={link.hoverClass}
            />
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
