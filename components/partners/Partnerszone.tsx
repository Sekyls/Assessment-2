import React from "react";
import TrustedPartners from "./TrustedPartners";
import Logos from "./Logos";

const Partnerszone = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-32 w-full max-w-[75rem] px-4">
      <TrustedPartners />
      <Logos />
    </div>
  );
};

export default Partnerszone;
