import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Appstores = () => {
  return (
    <div className="w-full px-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full max-w-md items-center">
        <Button
          asChild
          className=" w-48 h-16 border border-secblue rounded-lg bg-white"
        >
          <Link href="">
            <img className="w-full" src="/appstore.svg" alt="appstore" />
          </Link>
        </Button>
        <Button
          asChild
          className="w-48 h-16 border border-secblue rounded-lg bg-white"
        >
          <Link href="">
            <img className="w-full" src="/googleplay.svg" alt="googleplay" />
          </Link>
        </Button>
      </div>

      <div className="font-normal text-sm sm:text-base mt-6 mb-16 leading-normal text-center sm:text-left">
        <p className="text-deepblue mb-1">
          © 2022 Bomba Limited. All rights reserved.
        </p>
        <p className="text-secblue">
          Terms of Service <span className="text-LimeGreen">|</span> Privacy
          Policy <span className="text-LimeGreen">|</span> T&C UK{" "}
          <span className="text-LimeGreen">|</span> Cookie Policy
        </p>
      </div>
    </div>
  );
};

export default Appstores;
