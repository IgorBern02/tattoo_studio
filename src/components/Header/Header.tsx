import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IconeMenu from "../../assets/icons/Menu.svg";
import { MenuHamburguer } from "./MenuHamburguer";
import type { HeaderProps } from "../../types/header";
import { Link } from "react-router-dom";

export const Header = ({ Title }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="fixed top-0 left-0 w-full h-16 backdrop-blur-sm flex items-center justify-between px-4 md:px-8 z-10">
      <Link to="/">
        <h1 className="text-white text-xl uppercase font-bold p-2">{Title}</h1>
      </Link>
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
