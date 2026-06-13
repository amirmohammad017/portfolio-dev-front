import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Input = ({
  type = "text",
  name,
  placeholder,
  className = "",
  ...props
}) => {
  const [query, setQuery] = useState("");
  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className={`w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-white placeholder:text-white/30 outline-none transition
        focus:border-white/20 focus:bg-white/10 ${className}`}
        {...props}
      />

      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition"
        >
          <IoClose size={18} />
        </button>
      )}
    </div>
  );
};

export default Input;
