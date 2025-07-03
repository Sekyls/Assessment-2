import React from "react";

const Bombastack = () => {
  return (
    <div className="w-full max-w-[36rem] mx-auto px-4">
      <p className="text-lg md:text-2xl leading-relaxed font-normal tracking-tight text-greyishblue">
        Why Bomba?
      </p>

      <h1 className="font-medium tracking-tight text-deepblue text-3xl md:text-5xl leading-tight md:leading-[4.7rem] mt-2">
        Send & Receive money on your own terms
      </h1>

      <p className="text-base md:text-lg font-normal text-secblue leading-relaxed mt-4">
        Bomba provides you the luxury of sending money at rates that suit you.
        You can easily send and swap money between GBP, USD, NGN and up to 20
        other African countries using Bomba’s{" "}
        <span className="text-secgreen">'Swap'</span> and{" "}
        <span className="text-secgreen">'Express'</span> services. Beat bank
        rates, save time and gain more.
      </p>
    </div>
  );
};

export default Bombastack;
