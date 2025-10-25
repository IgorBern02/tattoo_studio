import { motion } from "framer-motion";
import XIcon from "../../assets/icons/X.svg";
import Inicio from "../../assets/icons/Home.svg";
import Sobre from "../../assets/icons/About.svg";
import Galeria from "../../assets/icons/Gallery.svg";
import Artistas from "../../assets/icons/Artists.svg";
import FAQ from "../../assets/icons/Faq.svg";
import TattooMachine from "../../assets/icons/TattooMachine.svg";

interface MenuHamburguerProps {
  onClick: () => void;
}

export const MenuHamburguer = ({ onClick }: MenuHamburguerProps) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-primary p-3 absolute right-0 top-0 h-screen z-40 w-4/5 flex flex-col items-center rounded-l-2xl shadow-lg"
    >
      <div className="mb-10 mt-4 absolute right-10 top-0 p-3 cursor-pointer">
        <img src={XIcon} alt="Close" onClick={onClick} />
      </div>

      <div className="w-full h-full flex flex-col items-center">
        <ul className="flex flex-col gap-4 w-full mt-20 text-white p-5 items-start">
          {[
            { icon: Inicio, label: "Início", link: "#hero" },
            { icon: Sobre, label: "Sobre", link: "#about" },
            { icon: Galeria, label: "Galeria", link: "#gallery" },
            { icon: Artistas, label: "Artistas", link: "#artists" },
            { icon: FAQ, label: "FAQ", link: "#faq" },
          ].map(({ icon, label, link }) => (
            <motion.li
              key={label}
              whileHover={{ x: 8 }}
              className="flex flex-row gap-4 cursor-pointer w-full h-auto py-2 duration-300"
            >
              <img src={icon} alt={label} className="w-6 h-6" />
              <span className="text-md uppercase">
                <a href={link} onClick={onClick}>
                  {label}
                </a>
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
