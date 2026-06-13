const SocialLink = ({
  href,
  icon: Icon,
  label,
  size = 40,
  iconSize = 18,
  hoverClass = "hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
}) => {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={isExternal ? `${label} (opens in new tab)` : label}
      className={`flex items-center justify-center transform rounded-full border border-white/10 bg-white/5 text-white/60 hover:-translate-y-1 hover:bg-white/10 transition duration-300 ${hoverClass}`}
      style={{ width: size, height: size }}
    >
      <Icon size={iconSize} />
    </a>
  );
};

export default SocialLink;
