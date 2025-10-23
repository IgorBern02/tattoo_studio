import { motion, AnimatePresence } from "framer-motion";
import XIcon from "../assets/icons/X.svg";
import Inicio from "../assets/icons/Inicio.svg";
import Sobre from "../assets/icons/Sobre.svg";
import Galeria from "../assets/icons/Galeria.svg";
import Artistas from "../assets/icons/Artistas.svg";
import FAQ from "../assets/icons/FAQ.svg";
import TattooMachine from "../assets/icons/TattooMachine.svg";

interface MenuHamburguerProps {
  onClick: () => void;
}

export const MenuHamburguer = ({ onClick }: MenuHamburguerProps) => {
  return (
    <motion.div
      initial={{ x: "100%" }} // começa fora da tela (direita)
      animate={{ x: 0 }} // entra deslizando
      exit={{ x: "100%" }} // sai deslizando
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-primary p-3 absolute right-0 top-0 h-screen z-10 w-4/5 flex flex-col items-center rounded-l-2xl shadow-lg"
    >
      <div className="mb-10 mt-4 absolute right-10 top-0 p-3 cursor-pointer">
        <img src={XIcon} alt="Close" onClick={onClick} />
      </div>

      <div className="w-full h-full flex flex-col items-center">
        <ul className="flex flex-col gap-4 w-full mt-20 text-white p-5 items-start">
          {[
            { icon: Inicio, label: "Início" },
            { icon: Sobre, label: "Sobre" },
            { icon: Galeria, label: "Galeria" },
            { icon: Artistas, label: "Artistas" },
            { icon: FAQ, label: "FAQ" },
          ].map(({ icon, label }) => (
            <motion.li
              key={label}
              whileHover={{ x: 8 }} // move levemente ao passar o mouse
              className="flex flex-row gap-4 cursor-pointer w-full h-auto py-2 duration-300"
            >
              <img src={icon} alt={label} className="w-6 h-6" />
              <span className="text-md uppercase">
                <a href="">{label}</a>
              </span>
            </motion.li>
          ))}
        </ul>

        <span className="flex flex-row gap-3 text-white uppercase font-bold absolute bottom-10 text-xl">
          Tattoo Studio
          <img src={TattooMachine} alt="Tattoo Machine" />
        </span>
      </div>
    </motion.div>
  );
};
