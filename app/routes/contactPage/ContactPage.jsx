import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import SocialLink from "../../components/btn/SocialLink.jsx";
import Input from "../../components/ui/Input.jsx";
import TextArea from "../../components/ui/TextArea.jsx";

export default function Contact() {
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
    <section
      id="contact"
      className="px-6 py-4 bg-black/80 rounded-lg backdrop-blur-xs"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Contact</h2>

        <p className="mb-6 text-gray-300">
          If you’d like to collaborate or just say hi, feel free to reach out:
        </p>

        {/* Social Links */}
        <div className="mb-6 flex justify-center gap-4">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
              size={50}
              iconSize={24}
              hoverClass={link.hoverClass}
            />
          ))}
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xrbyzqzq"
          method="POST"
          className="space-y-5 text-left"
        >
          <Input name="name" placeholder="Your Name..." required />
          <Input
            name="email"
            type="email"
            placeholder="Your Email..."
            required
          />
          <TextArea name="message" placeholder="Your Message..." required />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 font-medium text-white transition hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
