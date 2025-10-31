import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IconeMenu from "../../assets/icons/Menu.svg";
import { MenuHamburguer } from "./MenuHamburguer";
import { menuItems } from "./menuItems";
import { useScrollNavigation } from "../../hooks/useScrollNavigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import { Link } from "react-router-dom";

export const Header = ({ Title }: { Title: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useScrollNavigation();

  const sectionIds = menuItems.map((item) => item.section);
  const activeSection = useActiveSection(sectionIds);

  // função para rolar pro topo ou seção "hero"
  const handleTitleClick = () => {
    const heroSection = document.getElementById("hero");

    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 backdrop-blur-sm flex items-center justify-between px-4 md:px-8 z-10">
      <Link to="/">
        {" "}
        <h1
          onClick={handleTitleClick}
          className="text-white text-xl uppercase font-bold p-2 cursor-pointer"
        >
          {Title}
        </h1>
      </Link>

      {/* Botão mobile */}
      <img
        src={IconeMenu}
        alt="Menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer lg:hidden"
      />

      {/* Menu desktop */}
      <ul className="hidden lg:flex h-full items-center justify-center gap-10 text-white">
        {menuItems.map(({ icon, label, section }) => (
          <li
            key={label}
            className="flex items-center cursor-pointer gap-3 h-full"
            onClick={() => scrollToSection(section)}
          >
            <img src={icon} alt={label} className="w-6 h-6 md:hidden" />
            <span
              className={`text-sm uppercase transition-colors ${
                activeSection === section ? "text-secondary" : "text-white"
              }`}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && <MenuHamburguer onClick={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </header>
  );
};
