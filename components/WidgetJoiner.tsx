import React, { ReactNode } from "react";
import { Minus } from "lucide-react";

export interface joiner {
  price: string | ReactNode;
  currency: string | ReactNode;
  fee: string | ReactNode;
}
const WidgetJoiner = ({ price, currency, fee }: joiner) => {
  return (
    <div
      className="relative border-l-exgrey border-l flex pl-9 pt-6 gap-2 text-sm font-normal text-blkgrey"
      style={{ height: "4.65rem" }}
    >
      <div
        className="size-4 rounded-full bg-black border-exgrey flex justify-center items-center absolute -left-2 "
        style={{ borderWidth: "1px", top: "34%" }}
      >
        <Minus size={20} color="#23CE6B" className="" />
      </div>
      <p>{price}</p>
      <p>{currency}</p>
      <p>{fee}</p>
    </div>
  );
};

export default WidgetJoiner;
