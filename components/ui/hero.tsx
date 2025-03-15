"use client";

import { heroVideo, smallHeroVideo } from "@/utils/video";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    // Chỉ chạy trên client-side, tránh lỗi window is not defined
    const updateVideoSrc = () => {
      setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    };

    // Gán giá trị ban đầu khi component mount
    updateVideoSrc();

    // Lắng nghe sự kiện resize để cập nhật videoSrc
    window.addEventListener("resize", updateVideoSrc);
    
    return () => {
      window.removeEventListener("resize", updateVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y: -70,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-white">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="md:w-full w-full">
          {videoSrc && (
            <video className="pointer-events-none" autoPlay muted playsInline key={videoSrc}>
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
          <p className="p-3 mt- bg-red-600 rounded-3xl font-normal text-xl">
            From $50/day or $100/day
          </p>
        </div>
      </div>
    </section>
  );
}
