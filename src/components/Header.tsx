import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IconeMenu from "../assets/icons/Menu.svg";
import { MenuHamburguer } from "./MenuHamburguer";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="w-full h-16 backdrop-blur-sm flex items-center justify-between px-4 md:px-8 relative z-10">
      <h1 className="text-white text-xl uppercase font-bold p-2">
        Tattoo Studio
      </h1>

      <img
        src={IconeMenu}
        alt="Menu"
        onClick={handleMenuToggle}
        className="cursor-pointer md:hidden"
      />

      <AnimatePresence>
        {isMenuOpen && <MenuHamburguer onClick={handleMenuToggle} />}
      </AnimatePresence>
    </header>
  );
};
