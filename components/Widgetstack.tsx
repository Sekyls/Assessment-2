import React from "react";
import { Button } from "./ui/button";
import { Clock4 } from "lucide-react";
import ExchangeWidget from "./ExchangeWidget";
import WidgetJoiner from "./WidgetJoiner";

const Widgetstack = () => {
  return (
    <div className="w-full max-w-[28rem] mx-auto px-4">
      {/* Top: Sender */}
      <ExchangeWidget
        exchangetask="You send"
        currencyinit="GBP"
        sendamount="1,000.00"
        imgalt="GBP"
        currencyimg="/gbp.svg"
      />

      {/* Fee block */}
      <div className="ml-7">
        <WidgetJoiner price="2.99" fee="Fee" currency="GBP" />
      </div>

      {/* Recipient */}
      <ExchangeWidget
        exchangetask="Recipient Gets"
        currencyinit="GH₵"
        sendamount="1,190.00"
        imgalt="GHS"
        currencyimg="/gh.svg"
      />

      {/* Summary Info */}
      <div className="mt-4 flex  gap-6 sm:flex-row sm:justify-between text-sm font-normal text-blkgrey px-3">
        <div>
          <p className="mb-1">Amount we’ll convert</p>
          <p className="text-lg font-normal text-deepblue">1000.00</p>

          <div className="mt-4">
            <p className="mb-1">Total to Pay</p>
            <p className="text-lg font-normal text-deepblue">1,002.99 GBP</p>
          </div>
        </div>

        <div className="text-right">
          <p className="mb-1 flex items-center justify-start sm:justify-end gap-1">
            <Clock4 size={15} color="#23CE6B" />
            <span>Guaranteed rate (1 hrs)</span>
          </p>
          <p className="text-lg font-normal text-deepblue">£1 / GH₵1.19</p>

          <div className="mt-4">
            <p className="mb-1">Average duration</p>
            <p className="text-lg font-normal text-deepblue">Instant</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <Button className="mt-6 w-full h-14 rounded-lg bg-darkblue text-base font-medium tracking-tight">
        Get started for free
      </Button>
    </div>
  );
};

export default Widgetstack;
