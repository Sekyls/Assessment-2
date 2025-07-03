import React from "react";
import Link from "next/link";

const Footernavs = () => {
  return (
    <div className=" text-secblue text-lg sm:text-2xl font-normal tracking-[-0.03rem] flex gap-5 flex-wrap justify-between sm:gap-30 custommed pl-5 md:w-fit mx-auto">
      <div className="customedded">
        <p className="font-medium text-base tracking-tight leading-[1.125rem] mb-2">
          Company
        </p>
        <Link href={""} className="block">
          About Us
        </Link>
        <Link href={""} className="block">
          Features
        </Link>
        <Link href={""} className="block">
          Blog
        </Link>
        <Link href={""} className="block">
          Careers
        </Link>
        <Link href={""} className="block">
          Legal
        </Link>
      </div>
      <div className="secondcustommed pr-2">
        <p className="font-medium text-base tracking-tight leading-[1.125rem] mb-2">
          Support
        </p>
        <Link href={""} className="block">
          hello@bomba.co
        </Link>
        <Link href={""} className="block">
          WhatsApp ↗
        </Link>
        <Link href={""} className="block">
          Help Center
        </Link>
      </div>
    </div>
  );
};

export default Footernavs;
