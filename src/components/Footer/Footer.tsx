import TattooMachine from "../assets/icons/TattooMachine.svg";
import Address from "../assets/icons/Address.svg";
import Phone from "../assets/icons/Phone.svg";
import Clock from "../assets/icons/Clock.svg";
import { FooterHeader } from "./FooterHeader";
import { FooterInfoItem } from "./FooterInfoItem";

export const Footer = () => {
  return (
    <footer className="w-full text-white bg-[#090909] px-5 py-2">
      <FooterHeader title="Tattoo Studio" icon={TattooMachine} />

      <ul className="flex flex-col">
        <FooterInfoItem
          icon={Address}
          text="Endereço: Rua Exemplo, 123 - Praia Grande/SP"
        />
        <FooterInfoItem icon={Phone} text="Contato: (13) 99999-9999" />
        <FooterInfoItem
          icon={Clock}
          text="Horário de funcionamento: Seg a Sáb — 10h às 20h"
        />
      </ul>

      <div className="w-full p-2 flex justify-center items-center mt-10">
        <p className="text-[8px] text-center">
          © 2025 Tattoo Studio. Todos os direitos reservados. Desenvolvido por{" "}
          <span className="font-semibold">Igor Bern</span>.
        </p>
      </div>
    </footer>
  );
};
