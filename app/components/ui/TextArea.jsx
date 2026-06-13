const TextArea = ({
  name,
  placeholder,
  rows = 5,
  className = "",
  ...props
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      className={`w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition
      focus:border-white/20 focus:bg-white/10 ${className}`}
      {...props}
    />
  );
};

export default TextArea;
