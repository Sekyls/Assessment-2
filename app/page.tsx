import BombaAppDes from "@/components/BombaAppDes";
import Bombastack from "@/components/Bombastack";
import SlideCarousel from "@/components/Carousel";
import CarouselFooter from "@/components/CarouselFooter";
import CarouselFooterSm from "@/components/CarouselFooterSm";
import Footer from "@/components/footer/Footer";
import Grid_2_by_2 from "@/components/grid/Grid_2_by_2";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Partnerszone from "@/components/partners/Partnerszone";
import Signup_CTA from "@/components/Signup_CTA";
import Widgetstack from "@/components/Widgetstack";
import React from "react";

const Home = () => {
  return (
    <div
      className="w-full mx-auto overflow-hidden"
      style={{ maxWidth: "120rem" }}
    >
      <header>
        <Navbar />
        <SlideCarousel />
        <CarouselFooter />
        <CarouselFooterSm />
      </header>
      <main className="w-10/12 mx-auto">
        <div className="pt-7 mb-15">
          <Mission />
          <div className="flex flex-col lg:flex-row gap-10 md:gap-20 mx-auto mt-12 w-full max-w-[90rem] px-4 justify-between">
            <div>
              <Widgetstack />
            </div>
            <div>
              <Bombastack />
            </div>
          </div>
        </div>
        <BombaAppDes />
        <Grid_2_by_2 />
        <Partnerszone />
        <Signup_CTA />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
