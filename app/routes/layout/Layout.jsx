import { useState } from "react";
import { Outlet } from "react-router";
import { HiMenuAlt3 } from "react-icons/hi";
import MenuItem from "../../components/layout/MenuItem";
import Footer from "../../components/layout/Footer";
import MobileMenu from "../../components/layout/MobileMenu";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/project", label: "Project" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full text-white z-50">
        <div className="w-full h-full p-6 px-10 bg-black/50 backdrop-blur-md flex justify-between items-center border-b border-white/5">
          <div className="font-bold tracking-tighter text-xl">amirmohammad</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-2">
            {menuItems.map((item) => (
              <MenuItem key={item.to} to={item.to}>
                {item.label}
              </MenuItem>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden cursor-pointer text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        menuItems={menuItems}
      />

      {/* Main Content */}
      <main className="text-white grow p-4 pt-24 min-h-full relative">
        {/* Hero Background */}
        <div className="fixed -z-10 top-0 left-0 right-0 h-full">
          <img
            className="w-full h-full object-cover"
            src="/images/hero-bg.jpg"
            alt="hero-img"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
