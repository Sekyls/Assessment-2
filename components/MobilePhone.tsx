import Image from "next/image";
import React from "react";

const MobilePhone = () => {
  return (
    <div className=" mx-auto my-6 drop-shadow-lg w-[16rem] sm:w-[18rem] md:w-[19rem] relative">
      <Image
        src="/Wc.svg"
        alt="Wallet Cards"
        className="hidden sm:block absolute top-[4rem] w-[14.66975rem] -left-[10.2rem] h-[4.13856rem] transform origin-top-left scale-[200%]"
      />
      <div className="bg-secgreen flex items-center rounded-[2.25rem] h-[32rem] sm:h-[36rem] md:h-[38rem] w-full">
        {/* <div className="bg-primaryblue mx-auto rounded-[2.25rem] w-[95%] h-[97%]" /> */}
        <Image
          src="/phone.jpg"
          alt="About US"
          className="rounded-[2.25rem] w-[95%] mx-auto h-[97%] "
        />
      </div>
    </div>
  );
};

export default MobilePhone;
