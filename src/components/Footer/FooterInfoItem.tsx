import type { FooterInfoItemProps } from "../../types/footer";
export const FooterInfoItem = ({ icon, text }: FooterInfoItemProps) => {
  return (
    <li className="flex flex-row justify-start items-center gap-2 mb-2">
      <img src={icon} alt="Ícone" className="w-5 h-5 md:w-7 md:h-7" />
      <span className="text-[12px] md:text-[15px]">{text}</span>
    </li>
  );
};
