import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { DiResponsive } from "react-icons/di";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" }, // Orange
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" }, // Blue
  { name: "SCSS", icon: FaSass, color: "#CC6699" }, // Pink
  { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" }, // Yellow
  { name: "React", icon: FaReact, color: "#61DAFB" }, // Sky Blue
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }, // Cyan
  { name: "Git", icon: FaGitAlt, color: "#F05032" }, // Red-Orange
  { name: "Responsive Design", icon: DiResponsive, color: "#4CAF50" }, // Green
];

const AboutPage = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-10 flex items-center justify-center"
    >
      <div className="max-w-4xl text-center text-white">
        {/* description */}
        <div
          className="bg-black/50 backdrop-blur-md p-8 mb-6 rounded-2xl 
        border border-white/10"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>

          <p className="text-lg leading-8 text-white/85 mb-6">
            Hello! I’m{" "}
            <strong className="text-white font-semibold">
              Amirmohammad Ghofrani
            </strong>
            , a junior front‑end developer passionate about creating clean,
            modern, and user‑friendly web interfaces.
          </p>

          <p className="text-lg leading-8 text-white/85">
            My main focus is working with{" "}
            <span className="font-semibold text-white">
              HTML, CSS/SCSS, JavaScript, and React
            </span>
            . I enjoy building responsive websites and constantly improving my
            development skills.
          </p>
        </div>

        {/* skills */}

        <div
          className="bg-black/60 backdrop-blur-md p-8 rounded-2xl border 
        border-white/10"
        >
          <h3 className="text-2xl font-semibold mb-8">Skills</h3>

          <div className="flex flex-wrap justify-center gap-5">
            {skills.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl 
                bg-white/5 border border-white/10 backdrop-blur-sm transition-all 
                duration-300 hover:bg-white/10 hover:scale-105 
                hover:border-white/20"
              >
                {/* icon colors */}
                
                <Icon
                  className="text-2xl transition-transform group-hover:rotate-12"
                  style={{ color: color }}
                />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
