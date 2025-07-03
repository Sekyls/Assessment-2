import React from "react";
import Footernavs from "./Footernavs";
import Footeraddress from "./Footeraddress";
import Appstores from "./Appstores";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-20 max-w-7xl mx-auto border-t border-t-secblue pt-14 mt-20 mb-10">
      <Footernavs />
      <Footeraddress />
      <Appstores />
      <NewsLetter />
    </div>
  );
};

export default Footer;
