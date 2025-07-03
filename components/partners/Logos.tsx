import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-8 w-full max-w-[37.8rem] mx-auto px-4">
      <Image src="/VFD.svg" alt="VFD" />
      <Image src="/Thunes.svg" alt="Thunes" />
      <Image src="/Truelayer.svg" alt="Truelayer" />
      <Image src="/Access Bank.svg" alt="Access Bank" />
      <Image src="/Rail Bank.svg" alt="Rail Bank" />
      <Image src="/Truenarrative.svg" alt="Truenarrative" />
      <Image src="/Paga.svg" alt="Paga" />
      <Image src="/Solid.svg" alt="Solid" />
      <Image src="/Identity Pass.svg" alt="Identity Pass" />
    </div>
  );
};

export default Logos;
