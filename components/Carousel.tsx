"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MobilePhone from "./MobilePhone";
import SlideInfo from "./SlideInfo";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel";
const SlideCarousel = () => {
  const SLIDE_COUNT = 6;
  const [currentSlide, setCurrentSlide] = useState(0);
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  );

  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | undefined>();
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="bg-secgrey py-6 overflow-hidden">
      <Carousel
        setApi={setEmblaApi}
        plugins={[plugin.current]}
        className="mx-auto w-full"
      >
        <CarouselContent>
          {/* Slide 1 */}
          <CarouselItem className="flex flex-col items-center justify-center px-4 gap-10 md:gap-16">
            <MobilePhone />
            <SlideInfo
              maintext="Multi-currency accounts for Africans"
              supportingtext="Transact at home and abroad - create, send, hold and receive money in African and foreign currencies. Send money to and from Africa, seamlessly."
            />
          </CarouselItem>

          {/* Slide 2 */}
          <CarouselItem className="flex flex-col items-center justify-center px-4 gap-10 md:gap-16">
            <MobilePhone />
            <SlideInfo
              maintext="Choose from several payment methods"
              supportingtext={
                <span>
                  With Bomba, you get to choose how you send and receive money;
                  send at your own rate with{" "}
                  <span className="text-secgreen">'Swap'</span>, send and
                  receive instantly with{" "}
                  <span className="text-secgreen">'Express'</span>, or make free
                  local transfers with{" "}
                  <span className="text-secgreen">'Withdraw Money'</span>
                </span>
              }
            />
          </CarouselItem>

          {/* Slide 3 */}
          <CarouselItem className="flex flex-col items-center justify-center px-4 gap-10 md:gap-16">
            <MobilePhone />
            <SlideInfo
              maintext="Accept and create offers with Swap"
              supportingtext={
                <span>
                  You can send money internationally at your preferred rate on
                  our
                  <span className="text-secgreen">
                    {" "}
                    Peer-to-peer Marketplace{" "}
                  </span>
                  by choosing or accepting an offer. Created offers get accepted
                  within an average time of 30 minutes
                </span>
              }
            />
          </CarouselItem>

          {/* Slide 4 */}
          <CarouselItem className="flex flex-col items-center justify-center px-4 gap-10 md:gap-16">
            <MobilePhone />
            <SlideInfo
              maintext="Make instant transfers via Express"
              supportingtext={
                <span>
                  When you send money using
                  <span className="text-secgreen"> 'Express'</span> – it’s sent
                  at Bomba exchange rate and your transaction is completed
                  instantly
                </span>
              }
            />
          </CarouselItem>

          {/* Slide 5 */}
          <CarouselItem className="flex flex-col items-center justify-center px-4 gap-10 md:gap-16">
            <MobilePhone />
            <SlideInfo
              maintext="Review and confirm your transaction"
              supportingtext="Review your transaction, ensure that the provided details are correct, then click the send button!"
            />
          </CarouselItem>

          {/* Slide 6 */}
          <CarouselItem className="flex flex-col items-center justify-center px-4 gap-10 md:gap-16">
            <MobilePhone />
            <SlideInfo
              maintext="Completed! Fast, easy and secure"
              supportingtext={
                <span>
                  Money on its way! Send money today to your friends, family or
                  make payment to a business. Get started{" "}
                  <ArrowRight
                    size={16}
                    color="#23CE6B"
                    className="inline ml-1"
                  />
                </span>
              }
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* Clickable Animated Progress Bar */}
      <div className="mt-6 flex justify-center gap-2 px-4">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1 flex-1 rounded-full transition-all duration-300 focus:outline-none ${
              i <= currentSlide ? "bg-brigtblue" : "bg-navblue/20"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideCarousel;
