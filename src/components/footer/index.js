import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-6 sm:py-8 md:py-12 rounded-t-4xl mt-20">
      <div className="container mx-auto sm:px-8 md:px-16 lg:px-25 flex flex-col items-center px-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-row justify-center items-start gap-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-25 w-full max-w-6xl">
          <div>
            <h3 className="text-md font-bold mb-4 text-[var(--custom-orange)]">
              About Nesavent
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-300 transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-blue-300 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-blue-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-blue-300 transition-colors"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-300 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-blue-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold mb-4 text-[var(--custom-orange)]">
              Celebrate Your Event
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/events"
                  className="hover:text-blue-300 transition-colors"
                >
                  How to Prepare an Event
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-blue-300 transition-colors"
                >
                  How to Create an Event
                </Link>
              </li>
              <li>
                <Link
                  href="/create-event"
                  className="hover:text-blue-300 transition-colors"
                >
                  How to Publish an Event
                </Link>
              </li>
              <li>
                <Link
                  href="/manage-event"
                  className="hover:text-blue-300 transition-colors"
                >
                  How to Manage an Event
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold mb-4 text-[var(--custom-orange)]">
              Event Inspiration
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/events"
                  className="hover:text-blue-300 transition-colors"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-blue-300 transition-colors"
                >
                  Sport
                </Link>
              </li>
              <li>
                <Link
                  href="/create-event"
                  className="hover:text-blue-300 transition-colors"
                >
                  Theater
                </Link>
              </li>
              <li>
                <Link
                  href="/manage-event"
                  className="hover:text-blue-300 transition-colors"
                >
                  Film
                </Link>
              </li>
              <li>
                <Link
                  href="/manage-event"
                  className="hover:text-blue-300 transition-colors"
                >
                  Workshop
                </Link>
              </li>
              <li>
                <Link
                  href="/manage-event"
                  className="hover:text-blue-300 transition-colors"
                >
                  Exhibition
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold mb-4 text-[var(--custom-orange)]">
              Follow Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-x-2 items-center">
                <FaInstagram className="text-slate-300 w-4 h-4" />
                <Link
                  href="/events"
                  className="hover:text-blue-300 transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li className="flex gap-x-2 items-center">
                <FaTiktok className="text-slate-300 w-4 h-4" />
                <Link
                  href="/events"
                  className="hover:text-blue-300 transition-colors"
                >
                  Tiktok
                </Link>
              </li>
              <li className="flex gap-x-2 items-center">
                <FaXTwitter className="text-slate-300 w-4 h-4" />
                <Link
                  href="/create-event"
                  className="hover:text-blue-300 transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li className="flex gap-x-2 items-center">
                <FaFacebook className="text-slate-300 w-4 h-4" />
                <Link
                  href="/manage-event"
                  className="hover:text-blue-300 transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li className="flex gap-x-2 items-center">
                <FaLinkedin className="text-slate-300 w-4 h-4" />
                <Link
                  href="/manage-event"
                  className="hover:text-blue-300 transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="flex gap-x-2 items-center">
                <FaYoutube className="text-slate-300 w-4 h-4" />
                <Link
                  href="/manage-event"
                  className="hover:text-blue-300 transition-colors"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center w-full">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Nesavent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
