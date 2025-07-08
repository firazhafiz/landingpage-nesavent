import React from "react";
import Image from "next/image";
import { CeklistIcon, CartIcon, TicketIcon } from "../../../public";

const Layanan = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-45 mt-10 flex flex-col items-center lg:mt-20">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--custom-blue)] text-center">
          How It Works
        </h1>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <div className="flex flex-col items-center w-full sm:w-1/3 max-w-xs">
          <Image
            src={CeklistIcon}
            alt="ceklist"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
          />
          <div className="flex flex-col items-center text-center mt-4">
            <h1 className="text-base sm:text-md md:text-lg font-bold text-slate-800">
              CHOOSE EVENTS AND TICKETS
            </h1>
            <p className="text-slate-500 text-sm sm:text-base">
              With only a few clicks
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/3 max-w-xs">
          <Image
            src={CartIcon}
            alt="cart"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
          />
          <div className="flex flex-col items-center text-center mt-4">
            <h1 className="text-base sm:text-md md:text-lg font-bold text-slate-800">
              BUY DIRECTLY FROM ORGANIZERS
            </h1>
            <p className="text-slate-500 text-sm sm:text-base">
              Pay online or cash delivery
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/3 max-w-xs">
          <Image
            src={TicketIcon}
            alt="ticket"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
          />
          <div className="flex flex-col items-center text-center mt-4">
            <h1 className="text-base sm:text-md md:text-lg font-bold text-slate-800">
              RECEIVE TICKETS
            </h1>
            <p className="text-slate-500 text-sm sm:text-base">
              Via email or right at your door
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
