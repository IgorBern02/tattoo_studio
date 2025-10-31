import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";
import { useState } from "react";
import type { FaqProps } from "../../types/faq";

export const CardFaq = ({ ask, response }: FaqProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ul className="w-fullflex flex-col gap-4 p-4 bg-[#1D1D1D] rounded-xl ">
      <li className="flex flex-col items-center gap-2">
        <div className="flex flex-row items-center justify-between w-full">
          {" "}
          <p className="text-sm md:text-lg">{ask}</p>
          {open ? (
            <img
              className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
              src={MinusIcon}
              alt="MinusIcon"
              onClick={() => setOpen(false)}
            />
          ) : (
            <img
              className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
              src={PlusIcon}
              alt="PlusIcon"
              onClick={() => setOpen(true)}
            />
          )}
        </div>

        {open ? (
          <div className="flex flex-row w-full">
            <p className="text-[11px] md:text-[14px]">{response}</p>
          </div>
        ) : null}
      </li>
    </ul>
  );
};
