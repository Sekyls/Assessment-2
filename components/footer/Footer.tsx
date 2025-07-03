import React from "react";
import Footernavs from "./Footernavs";
import Footeraddress from "./Footeraddress";
import Appstores from "./Appstores";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20 justify-items-center max-w-7xl mx-auto border-t border-t-secblue pt-14 mt-20 px-4 mb-10">
      <Footernavs />
      <Footeraddress />
      <Appstores />
      <NewsLetter />
    </div>
  );
};

export default Footer;
