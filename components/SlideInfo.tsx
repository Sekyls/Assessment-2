import React, { ReactNode } from "react";

export interface info {
  maintext: string;
  supportingtext: string | ReactNode;
}

const SlideInfo = ({ maintext, supportingtext }: info) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:items-end gap-6 md:gap-x-32 px-4 sm:px-8 mt-10 w-full">
      <div className="md:self-end w-full md:w-1/2">
        <h1 className="font-medium text-deepblue text-pretty leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[4rem]">
          {maintext}
        </h1>
      </div>
      <div className="md:self-end w-full md:w-1/2 max-w-xl">
        <p className="font-normal text-primaryblue text-pretty text-base sm:text-lg leading-relaxed">
          {supportingtext}
        </p>
      </div>
    </div>
  );
};

export default SlideInfo;
