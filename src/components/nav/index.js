"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LogoImg, LogoDark, HeroImg } from "../../../public";
import { GoSearch } from "react-icons/go";
import { LuUsersRound } from "react-icons/lu";
import { BiCategory, BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const resetCategory = () => {
    setSelectedCategory("");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative min-h-[600px] md:min-h-[600px]">
      <Image
        src={HeroImg}
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="rounded-b-4xl max-h-[600px]"
      />
      <div className="absolute inset-0">
        <nav
          className={`h-[80px] md:h-[100px] flex justify-between items-center px-4 md:px-10 lg:px-40 transition-all duration-300 ${
            isSticky
              ? "fixed top-0 left-0 w-full z-50 bg-white shadow-md"
              : "bg-transparent"
          }`}
        >
          <div className="w-[120px] md:w-[150px] flex items-center h-full">
            <Image
              src={isSticky ? LogoDark : LogoImg}
              alt="logo"
              width={150}
              height={150}
              priority
              className="object-contain"
            />
          </div>

          {/* nav desktop */}
          <div className="hidden md:flex items-center h-full">
            <ul className="flex gap-x-4 lg:gap-x-8">
              <li>
                <a
                  href="#"
                  className={`${
                    isSticky ? "text-slate-800" : "text-white"
                  } font-light text-sm hover:text-[var(--custom-orange)] transition-colors`}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${
                    isSticky ? "text-slate-800" : "text-white"
                  } font-light text-sm hover:text-[var(--custom-orange)] transition-colors`}
                >
                  EXPLORE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${
                    isSticky ? "text-slate-800" : "text-white"
                  } font-light text-sm hover:text-[var(--custom-orange)] transition-colors`}
                >
                  VENDOR
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${
                    isSticky ? "text-slate-800" : "text-white"
                  } font-light text-sm hover:text-[var(--custom-orange)] transition-colors`}
                >
                  MY TICKET
                </a>
              </li>
            </ul>
          </div>

          {/* hamburger menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={`${
                isSticky ? "text-slate-800" : "text-white"
              } text-2xl hover:text-[var(--custom-orange)] transition-colors`}
            >
              {isMobileMenuOpen ? <AiOutlineClose /> : <BiMenu />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-x-4 lg:gap-x-6 h-full">
            <Link
              href="/login"
              className={`${
                isSticky ? "text-slate-800" : "text-white"
              } text-sm hover:text-[var(--custom-orange)] transition-colors`}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={`bg-[var(--custom-orange)] text-white hover:bg-[var(--custom-blue)] hover:text-white px-4 lg:px-6 py-2 rounded text-sm transition-colors`}
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* nav mobile */}
        <div
          className={`fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] z-40 md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          } ${isSticky ? "bg-white" : "bg-black/95"}`}
        >
          <ul className="flex flex-col h-full justify-center items-center gap-y-8">
            <li>
              <a
                href="#"
                className={`${
                  isSticky ? "text-slate-800" : "text-white"
                } font-light text-xl hover:text-[var(--custom-orange)] transition-colors`}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isSticky ? "text-slate-800" : "text-white"
                } font-light text-xl hover:text-[var(--custom-orange)] transition-colors`}
              >
                EXPLORE
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isSticky ? "text-slate-800" : "text-white"
                } font-light text-xl hover:text-[var(--custom-orange)] transition-colors`}
              >
                VENDOR
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isSticky ? "text-slate-800" : "text-white"
                } font-light text-xl hover:text-[var(--custom-orange)] transition-colors`}
              >
                MY TICKET
              </a>
            </li>
            <li className="flex flex-col gap-y-4 mt-8">
              <Link
                href="/login"
                className={`${
                  isSticky ? "text-slate-800" : "text-white"
                } text-sm hover:text-[var(--custom-orange)] transition-colors border ${
                  isSticky ? "border-slate-800/20" : "border-white/20"
                } px-8 py-2 rounded`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className={`bg-[var(--custom-orange)] text-white hover:bg-[var(--custom-blue)] hover:text-white px-8 py-2 rounded text-sm transition-colors`}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        <div className={isSticky ? "h-[80px] md:h-[100px]" : ""}></div>

        <div className="flex flex-col justify-center items-center text-center mt-8 md:mt-15 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            <span className="text-[var(--custom-orange)]">
              Discover & Build
            </span>{" "}
            <span className="text-white">Your</span>
            <br />
            <span className="text-white">Next Experience</span>
          </h1>
          <p className="text-white mt-4 md:mt-6 text-lg md:text-xl">
            <span className="font-bold">Hi,</span>{" "}
            <span className="font-light">
              what event are you looking for today?
            </span>
          </p>

          <div className="mt-6 w-full max-w-md mx-auto md:hidden">
            <div className="bg-white rounded-2xl p-4">
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center gap-x-2">
                  <GoSearch className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search Event"
                    className="w-full border-none focus:outline-none text-gray-600"
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <LuUsersRound className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search Organizer"
                    className="w-full border-none focus:outline-none text-gray-600"
                  />
                </div>
                <div className="flex items-center gap-x-2 relative">
                  <BiCategory className="w-5 h-5 text-gray-400" />
                  <div className="relative w-full">
                    <select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      className="border-none focus:outline-none text-gray-600 bg-gray-100/50 
                      backdrop-blur-sm rounded-lg px-3 py-2 pr-12 cursor-pointer 
                      hover:bg-gray-200/50 transition-all duration-200 
                      text-sm font-medium appearance-none focus:ring-2 focus:ring-blue-300 w-full"
                    >
                      {selectedCategory === "" && (
                        <option value="" disabled hidden>
                          Category
                        </option>
                      )}
                      <option value="music">Music</option>
                      <option value="sport">Sport</option>
                      <option value="workshop">Workshop</option>
                      <option value="film">Film</option>
                      <option value="theater">Theater</option>
                      <option value="exhibition">Exhibition</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                    {selectedCategory && (
                      <button
                        onClick={resetCategory}
                        className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <AiOutlineClose className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
                <button className="bg-[var(--custom-neon)] text-white px-6 py-2 rounded-full hover:bg-[var(--custom-blue)] transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex mt-8 bg-white rounded-full items-center w-full max-w-4xl mx-auto px-6 py-2">
            <div className="flex items-center flex-1 gap-x-4 lg:gap-x-8">
              <div className="flex items-center gap-x-2 flex-1">
                <GoSearch className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Event"
                  className="w-full border-none focus:outline-none text-gray-600"
                />
              </div>
              <div className="flex items-center gap-x-2 flex-1 border-l border-r px-4 lg:px-6">
                <LuUsersRound className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Organizer"
                  className="w-full border-none focus:outline-none text-gray-600"
                />
              </div>
              <div className="flex items-center gap-x-2 relative w-[150px] lg:w-[180px]">
                <BiCategory className="w-5 h-5 text-gray-400" />
                <div className="relative w-full">
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="border-none focus:outline-none text-gray-600 bg-gray-100/50 
                    backdrop-blur-sm rounded-lg px-3 py-2 pr-12 cursor-pointer 
                    hover:bg-gray-200/50 transition-all duration-200 
                    text-sm font-medium appearance-none focus:ring-2 focus:ring-blue-300 w-full truncate"
                  >
                    {selectedCategory === "" && (
                      <option value="" disabled hidden>
                        Category
                      </option>
                    )}
                    <option value="music">Music</option>
                    <option value="sport">Sport</option>
                    <option value="workshop">Workshop</option>
                    <option value="film">Film</option>
                    <option value="theater">Theater</option>
                    <option value="exhibition">Exhibition</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  {selectedCategory && (
                    <button
                      onClick={resetCategory}
                      className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <AiOutlineClose className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <button className="bg-[var(--custom-neon)] text-white px-4 lg:px-6 py-2 rounded-full ml-4 lg:ml-6 my-2 hover:bg-[var(--custom-blue)] transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
