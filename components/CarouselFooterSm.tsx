import React from "react";

const CarouselFooterSm = () => {
  return (
    <div className="w-full pl-4 sm:hidden bg-secgrey pt-2">
      <div className="relative flex items-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
        >
          <circle cx="29.2204" cy="28.8964" r="28.4352" fill="#233375" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
          className="absolute"
          style={{
            top: "0.9rem",
            left: "1rem",
          }}
        >
          <path
            d="M21.4202 18.1391L11.4591 24.0209C9.79246 25.005 7.71875 23.7615 7.71875 21.778V10.0144C7.71875 8.03085 9.79246 6.78732 11.4591 7.77144L21.4202 13.6532C23.0997 14.6449 23.0997 17.1474 21.4202 18.1391Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-darkblue text-lg/relaxed font-normal">
          See how it works
        </p>
      </div>
      <div className="mt-10 pl-5 pb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
        >
          <path
            d="M15.7349 14.4154L8.22294 21.9034L0.710938 14.4154L1.79094 13.3354L7.47894 19.0234V0.223389H8.99094V19.0234L14.6789 13.3354L15.7349 14.4154Z"
            fill="#23CE6B"
          />
        </svg>
      </div>
    </div>
  );
};

export default CarouselFooterSm;
