import { useState } from "react";
import image1 from "../assets/images/eco-1.jpg"
import image7 from "../assets/images/eco-7.jpg"
import image5 from "../assets/images/eco-5.jpg"
import image4 from "../assets/images/eco-4.jpg"
export default function WhatWedo() {
  const [stopScroll, setStopScroll] = useState(false);
  const cardData = [
    {
      title: "Tree Planting Programs",
      image: `${image1}`,
    },
    {
      title: "Distribution of fruit tree seedlings to students",
      image: `${image7}`,
    },
    {
      title: "Street and Beach Clean-Up Initiatives",
      image: `${image5}`,
    },
    {
      title: "Education and Student Mentorship",
      image: `${image4}`,
    },
  ];

  return (
    <>
      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

      <div className="overflow-hidden w-full relative max-w-6xl mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 6000 + "ms" }}>
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div key={index} className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                <img src={card.image} alt="card" className="w-full h-full object-cover" />
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-20 backdrop-blur-md left-0 w-full h-full bg-black/20">
                  <p className="text-white text-lg font-semibold text-center">{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  );
};