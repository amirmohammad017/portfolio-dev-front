import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

const MobileMenu = ({ isOpen, onClose, menuItems }) => {
  // انیمیشن پنل اصلی (از سمت راست به داخل)
  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    opened: {
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  // انیمیشن آیتم‌ها (Slide Left با تاخیر 0.1 ثانیه نسبت به هم)
  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    opened: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // تاخیر پله‌ای
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (لایه سیاه پشت منو) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
          />

          {/* Sidebar Panel */}
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed top-0 right-0 h-full w-60 bg-[#0a0a0a]/95 
            border-l border-white/10 p-8 pt-24 z-70 shadow-2xl"
          >
            {/* دکمه بستن داخل خود منو (اختیاری) */}
            <button
              onClick={onClose}
              className="absolute top-10 right-10 text-white/50 hover:text-white 
              transition-colors"
            >
              <HiX size={30} />
            </button>

            <ul className="flex flex-col space-y-6">
              {menuItems.map((item, i) => (
                <motion.li key={item.to} custom={i} variants={itemVariants}>
                  <NavLink
                    to={item.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `text-2xl font-semibold tracking-wide transition-all ${
                        isActive
                          ? "text-blue-500"
                          : "text-white/70 hover:text-white"
                      } inline-block`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
