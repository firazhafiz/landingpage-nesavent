"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaMusic,
  FaRunning,
  FaTheaterMasks,
  FaFilm,
  FaTools,
  FaPalette,
} from "react-icons/fa";

const AvailEvents = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const eventCategories = [
    { title: "Music", events: 1, icon: <FaMusic />, link: "/explore/music" },
    { title: "Sport", events: 1, icon: <FaRunning />, link: "/explore/sport" },
    {
      title: "Theater",
      events: 1,
      icon: <FaTheaterMasks />,
      link: "/explore/theater",
    },
    { title: "Film", events: 1, icon: <FaFilm />, link: "/explore/film" },
    {
      title: "Workshop",
      events: 1,
      icon: <FaTools />,
      link: "/explore/workshop",
    },
    {
      title: "Exhibition",
      events: 1,
      icon: <FaPalette />,
      link: "/explore/exhibition",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-50 py-6">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4">
        {eventCategories.map((event, index) => (
          <Link
            key={index}
            href={event.link}
            className="group"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`relative h-full flex flex-col items-center justify-center 
                rounded-lg border border-[var(--custom-neon)] p-2 sm:p-3 transition-colors
                duration-200
                ${
                  hoveredCard === index
                    ? "bg-gradient-to-t from-orange-400/20 to-white"
                    : "bg-gradient-to-t from-blue-600/20 to-white"
                }`}
            >
              <div
                className={`p-2 mb-1 rounded-full ${
                  hoveredCard === index ? "bg-orange-100" : "bg-gray-100"
                }`}
              >
                <div
                  className={`text-sm sm:text-base ${
                    hoveredCard === index ? "text-orange-500" : "text-gray-700"
                  }`}
                >
                  {event.icon}
                </div>
              </div>

              <h3 className="text-xs sm:text-sm font-medium text-gray-800 text-center">
                {event.title}
              </h3>

              <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                {event.events} Event{event.events !== 1 ? "s" : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AvailEvents;
