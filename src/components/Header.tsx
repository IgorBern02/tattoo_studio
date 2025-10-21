export const Header = () => {
  return (
    <header className="w-full p-4 flex justify-center items-center relative uppercase text-[12px] bg-black/70 text-white">
      <h1 className="text-2xl font-bold absolute left-10 text-primary">
        Tattoo Studio
      </h1>
      <ul className="flex gap-4">
        <li className="hover:text-secondary cursor-pointer hover:text-yellow-500">
          Artistas
        </li>
        <li className="hover:text-secondary cursor-pointer">Galeria</li>
        <li className="hover:text-secondary cursor-pointer">Início</li>
        <li className="hover:text-secondary cursor-pointer">Sobre</li>
        <li className="hover:text-secondary cursor-pointer">FAQ</li>
      </ul>
    </header>
  );
};
