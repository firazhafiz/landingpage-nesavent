import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card1, Card2, Card3, Card4 } from "../../../public";
import { FaShareAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const eventNow = () => {
  return (
    <section className="mt-7 px-4 md:px-12 lg:px-50">
      <div className="text-xl font-bold text-[var(--custom-blue)] mb-3">
        <h1>Choose your event now!</h1>
      </div>
      <div>
        <ul className="flex flex-wrap gap-x-2 gap-y-2 mb-8 md:gap-x-5 md:justify-start">
          <li>
            <h1 className="px-2 py-1 text-xs md:px-4 md:py-2 md:text-base border-slate-500 border-1 rounded-full cursor-pointer hover:border-[var(--custom-neon)] hover:bg-[var(--custom-neon)]/25 transition-all whitespace-nowrap">
              Music
            </h1>
          </li>
          <li>
            <h1 className="px-2 py-1 text-xs md:px-4 md:py-2 md:text-base border-slate-500 border-1 rounded-full cursor-pointer hover:border-[var(--custom-neon)] hover:bg-[var(--custom-neon)]/25 transition-all whitespace-nowrap">
              Sport
            </h1>
          </li>
          <li>
            <h1 className="px-2 py-1 text-xs md:px-4 md:py-2 md:text-base border-slate-500 border-1 rounded-full cursor-pointer hover:border-[var(--custom-neon)] hover:bg-[var(--custom-neon)]/25 transition-all whitespace-nowrap">
              Theater
            </h1>
          </li>
          <li>
            <h1 className="px-2 py-1 text-xs md:px-4 md:py-2 md:text-base border-slate-500 border-1 rounded-full cursor-pointer hover:border-[var(--custom-neon)] hover:bg-[var(--custom-neon)]/25 transition-all whitespace-nowrap">
              Film
            </h1>
          </li>
          <li>
            <h1 className="px-2 py-1 text-xs md:px-4 md:py-2 md:text-base border-slate-500 border-1 rounded-full cursor-pointer hover:border-[var(--custom-neon)] hover:bg-[var(--custom-neon)]/25 transition-all whitespace-nowrap">
              Workshop
            </h1>
          </li>
          <li>
            <h1 className="px-2 py-1 text-xs md:px-4 md:py-2 md:text-base border-slate-500 border-1 rounded-full cursor-pointer hover:border-[var(--custom-neon)] hover:bg-[var(--custom-neon)]/25 transition-all whitespace-nowrap">
              Exhibition
            </h1>
          </li>
        </ul>
      </div>
      <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 md:justify-items-center">
        <Link
          href="/event-detail"
          className="rounded-md w-[150px] flex-shrink-0 md:w-full md:max-w-[250px] overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
          style={{ height: "fit-content" }}
        >
          <div className="w-full h-[80px] md:h-[150px] overflow-hidden">
            <Image
              src={Card3}
              alt="hero"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-3 py-3">
            <h1 className="text-sm font-regular">Cinta Kala Senja Concert</h1>
            <p className="mt-1 text-xs text-gray-400">Wed, 12 Des 2024</p>
            <h1 className="text-sm font-bold mt-1">Rp175.000</h1>
            <h2 className="text-xs mt-6">Organized By</h2>
            <div className="mt-1 flex justify-between items-center">
              <h1 className="text-sm font-semibold">Bengkelive</h1>
              <div className="flex gap-x-1">
                <FaShareAlt className="w-3 h-3 text-gray-400" />
                <FaBookmark className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/event-detail"
          className="rounded-md w-[150px] flex-shrink-0 md:w-full md:max-w-[250px] overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
          style={{ height: "fit-content" }}
        >
          <div className="w-full h-[80px] md:h-[150px] overflow-hidden">
            <Image
              src={Card2}
              alt="hero"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-3 py-3">
            <h1 className="text-sm font-regular">Cinta Kala Senja Concert</h1>
            <p className="mt-1 text-xs text-gray-400">Wed, 12 Des 2024</p>
            <h1 className="text-sm font-bold mt-1">Rp175.000</h1>
            <h2 className="text-xs mt-6">Organized By</h2>
            <div className="mt-1 flex justify-between items-center">
              <h1 className="text-sm font-semibold">Bengkelive</h1>
              <div className="flex gap-x-1">
                <FaShareAlt className="w-3 h-3 text-gray-400" />
                <FaBookmark className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/event-detail"
          className="rounded-md w-[150px] flex-shrink-0 md:w-full md:max-w-[250px] overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
          style={{ height: "fit-content" }}
        >
          <div className="w-full h-[80px] md:h-[150px] overflow-hidden">
            <Image
              src={Card1}
              alt="hero"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-3 py-3">
            <h1 className="text-sm font-regular">Cinta Kala Senja Concert</h1>
            <p className="mt-1 text-xs text-gray-400">Wed, 12 Des 2024</p>
            <h1 className="text-sm font-bold mt-1">Rp175.000</h1>
            <h2 className="text-xs mt-6">Organized By</h2>
            <div className="mt-1 flex justify-between items-center">
              <h1 className="text-sm font-semibold">Bengkelive</h1>
              <div className="flex gap-x-1">
                <FaShareAlt className="w-3 h-3 text-gray-400" />
                <FaBookmark className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/event-detail"
          className="rounded-md w-[150px] flex-shrink-0 md:w-full md:max-w-[250px] overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
          style={{ height: "fit-content" }}
        >
          <div className="w-full h-[80px] md:h-[150px] overflow-hidden">
            <Image
              src={Card4}
              alt="hero"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-3 py-3">
            <h1 className="text-sm font-regular">Cinta Kala Senja Concert</h1>
            <p className="mt-1 text-xs text-gray-400">Wed, 12 Des 2024</p>
            <h1 className="text-sm font-bold mt-1">Rp175.000</h1>
            <h2 className="text-xs mt-6">Organized By</h2>
            <div className="mt-1 flex justify-between items-center">
              <h1 className="text-sm font-semibold">Bengkelive</h1>
              <div className="flex gap-x-1">
                <FaShareAlt className="w-3 h-3 text-gray-400" />
                <FaBookmark className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default eventNow;
