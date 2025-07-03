import { ArrowRight } from "lucide-react";
import React from "react";
export interface griditeminfo {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  imgsrc: string;
  imgalt: string;
  grid_h: string;
  grid_bgcolor: string;
  coming_soon?: string;
  imgstyle: object;
}
const GridCard = ({
  p1,
  p2,
  p3,
  p4,
  imgsrc,
  imgalt,
  grid_h,
  grid_bgcolor,
  coming_soon,
  imgstyle,
}: griditeminfo) => {
  return (
    <div
      className="relative rounded-lg w-full px-4 pt-20 md:pt-[6.25rem] md:pl-[3.61rem] overflow-hidden"
      style={{
        height: grid_h,
        backgroundColor: grid_bgcolor,
      }}
    >
      {/* Optional Coming Soon badge */}
      <img
        className="absolute top-4 left-4 md:left-[3.61rem]"
        style={{ display: coming_soon }}
        src="/soon.svg"
        alt="soon.svg"
      />

      {/* Text content */}
      <div className="z-10 relative">
        <h6 className="text-xl md:text-2xl leading-loose font-normal tracking-tight text-secblue">
          {p1}
        </h6>

        <h4 className="text-deepblue text-2xl md:text-[2rem] leading-snug md:leading-[2.625rem] tracking-tight md:tracking-[-0.04rem] mt-1">
          {p2}
        </h4>

        <p className="text-base md:text-lg leading-relaxed font-normal text-secblue text-pretty mt-3 max-w-[26rem] w-full">
          {p3}
        </p>

        <div className="flex gap-3 items-center py-4 border-b-2 border-b-brigtblue max-w-36 mt-4">
          <p className="text-base font-medium tracking-tight">{p4}</p>
          <ArrowRight color="#2668EC" />
        </div>
      </div>

      {/* img section */}
      <img
        className="w-full flex justify-end ml-auto"
        src={imgsrc}
        alt={imgalt}
        style={imgstyle}
      />
    </div>
  );
};

export default GridCard;
