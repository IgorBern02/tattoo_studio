import { motion } from "framer-motion";
import XIcon from "../../assets/icons/X.svg";
import TattooMachine from "../../assets/icons/TattooMachine.svg";
import { menuItems } from "./menuItems";
import { useScrollNavigation } from "../../hooks/useScrollNavigation";

interface MenuHamburguerProps {
  onClick: () => void;
}

export const MenuHamburguer = ({ onClick }: MenuHamburguerProps) => {
  const { scrollToSection } = useScrollNavigation();

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

      <ul className="flex flex-col gap-4 w-full mt-20 text-white p-5 items-start">
        {menuItems.map(({ icon, label, section }) => (
          <motion.li
            key={label}
            whileHover={{ x: 8 }}
            className="flex flex-row gap-4 cursor-pointer w-full py-2"
            onClick={() => scrollToSection(section, onClick)}
          >
            <img src={icon} alt={label} className="w-6 h-6" />
            <span className="text-md uppercase">{label}</span>
          </motion.li>
        ))}
      </ul>

      <span className="flex flex-row gap-3 text-white uppercase font-bold absolute bottom-10 text-xl">
        Tattoo Studio
        <img src={TattooMachine} alt="Tattoo Machine" />
      </span>
    </motion.div>
  );
};
