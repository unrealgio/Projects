// src/components/Marquee.tsx
import React from "react";

const Marquee: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0142FF] to-[#8EA8F5] h-18 w-full">
      <div
        className="flex gap-10 items-center absolute whitespace-nowrap animate-marquee"
        style={{
          animation: "scroll-left 25s linear infinite",
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className=" text-center flex justify-center items-center  gap-20 text-[#000A26] font-semibold text-3xl px-4">
            <p className="text-white font-bold text-3xl" >Dê o boost no Digital!</p>
            <img src="/icons/vote-icon.svg" alt="joinIcon" className="w-12 h-12" />

          </div>
        ))}
      </div>

      {/* Estilo CSS inline global (pode ir num CSS separado também) */}
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
