import type { FooterHeaderProps } from "../../types/footer";

export const FooterHeader = ({ title, icon }: FooterHeaderProps) => {
  return (
    <div className="flex gap-2 items-center mb-4">
      <h3 className="text-[12px] uppercase font-bold">{title}</h3>
      <img src={icon} alt={title} className="w-5 h-5" />
    </div>
  );
};
