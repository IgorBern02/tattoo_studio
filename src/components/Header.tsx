export const Header = () => {
  return (
    <header className="w-full p-5 flex justify-center items-center relative uppercase text-[12px] text-white bg-bg backdrop-blur-sm ">
      <h1 className="text-xl p-2 font-bold absolute left-10 text-light text-center w-30 wrap-break-words">
        Tattoo Studio
      </h1>
      <ul className="flex gap-4">
        <li className="hover:text-secondary cursor-pointer hover:text-[#C19A6B] duration-300">
          Artistas
        </li>
        <li className="hover:text-secondary cursor-pointer hover:text-[#C19A6B] duration-300">
          Galeria
        </li>
        <li className="hover:text-secondary cursor-pointer hover:text-[#C19A6B] duration-300">
          Início
        </li>
        <li className="hover:text-secondary cursor-pointer hover:text-[#C19A6B] duration-300">
          Sobre
        </li>
        <li className="hover:text-secondary cursor-pointer hover:text-[#C19A6B] duration-300">
          FAQ
        </li>
      </ul>
    </header>
  );
};
