import TattooMachine from "../assets/icons/TattooMachine.svg";
import Address from "../assets/icons/Address.svg";
import Phone from "../assets/icons/Phone.svg";
import Clock from "../assets/icons/Clock.svg";
export const Footer = () => {
  return (
    <div className="w-full text-white bg-[#090909] px-5 py-2">
      <div className="flex gap-2 items-center mb-4 ">
        <h3 className="text-[12px] uppercase font-bold ">Tattoo Studio</h3>
        <img
          src={TattooMachine}
          alt="Tattoo Machine"
          className="flex flex-row w-5 h-5"
        />
      </div>

      <ul className="flex flex-col">
        <li className="flex flex-row justify-start items-center gap-2 mb-2">
          <img src={Address} alt="Endereço" className="w-5 h-5" />
          <span className="text-[12px]">
            Endereço: Rua Exemplo, 123 - Praia Grande/SP
          </span>
        </li>
        <li className="flex flex-row justify-start items-center gap-2 mb-2">
          <img src={Phone} alt="Contato" className="w-5 h-5" />
          <span className="text-[12px]">Contato: (13) 99999-9999</span>
        </li>
        <li className="flex flex-row justify-start items-center gap-2 mb-2">
          <img src={Clock} alt="Horário" className="w-5 h-5" />
          <span className="text-[12px]">
            Horário de funcionamento: Seg a Sáb -- 10h às 20h{" "}
          </span>
        </li>
      </ul>
      <div className="w-full p-2 flex justify-center items-center    mt-10">
        <p className="text-[8px]">
          © 2025 Tattoo Studio. Todos os direitos reservados. Desenvolvido por
          Igor Bern.
        </p>
      </div>
    </div>
  );
};
