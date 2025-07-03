import React from "react";
import Link from "next/link";

const Footernavs = () => {
  return (
    <div className="w-full max-w-[34rem] text-secblue text-lg sm:text-2xl font-normal tracking-[-0.03rem] flex justify-center items-center gap-10 mx-auto">
      <div>
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
      <div>
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
