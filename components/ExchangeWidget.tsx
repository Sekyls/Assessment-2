import React from "react";

export interface exchangeprop {
  exchangetask: string;
  sendamount: string;
  currencyimg: string;
  imgalt: string;
  currencyinit: string;
}

const ExchangeWidget = ({
  exchangetask,
  sendamount,
  currencyimg,
  imgalt,
  currencyinit,
}: exchangeprop) => {
  return (
    <div className="flex items-center rounded-sm h-20 max-w-[28rem] w-full mx-auto px-2">
      {/* Left section */}
      <div className="relative h-full w-2/3 flex items-center border border-exgrey rounded-l-md bg-white">
        {/* Top label */}
        <p
          className="absolute left-4 bg-white px-2 text-xs text-gray-800"
          style={{
            top: "-0.625rem", // ~-10px
            lineHeight: "1.125rem",
          }}
        >
          {exchangetask}
        </p>

        {/* Amount */}
        <p className="pl-8 text-deepblue font-medium text-lg leading-relaxed md:text-2xl md:leading-loose truncate">
          {sendamount}
        </p>
      </div>

      {/* Right section */}
      <div className="flex items-center justify-center h-full w-1/3 bg-darkblue rounded-r-md">
        <img className="h-5 w-auto" src={currencyimg} alt={imgalt} />
        <p className="pl-1.5 text-white text-xs font-normal md:text-sm">
          {currencyinit}
        </p>
      </div>
    </div>
  );
};

export default ExchangeWidget;
