import { ArrowDown } from "lucide-react";
import React from "react";

const CarouselFooter = () => {
  return (
    <div className="hidden sm:flex flex-col md:flex-row px-15 justify-between gap-10 bg-secgrey mx-auto">
      <div className="flex gap-x-4 flex-col md:flex-row">
        <div className="text-sm/normal text-secblue pt-1">
          News & Release update
        </div>
        <div>
          <p className="text-lg/relaxed text-secblue ">
            June 20, 2022 —{" "}
            <span className="text-brigtblue">
              {" "}
              Bomba now has a dollar wallet, activate your account
            </span>
          </p>
          <p className="text-lg/relaxed text-secblue">
            June 01, 2022 —{" "}
            <span className="text-brigtblue">
              Top 10 Summer Vacation Places In 2022
            </span>
          </p>
        </div>
      </div>
      <div
        className="text-2xl/loose flex items-center"
        style={{ letterSpacing: "-2%" }}
      >
        <p>Scroll Down </p>
        <ArrowDown color="#23CE6B" className="inline" />
      </div>
    </div>
  );
};

export default CarouselFooter;
