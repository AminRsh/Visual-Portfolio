/* eslint-disable tailwindcss/classnames-order */

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import  AnimatedTitle  from "./AnimatedTitle";

const Features = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    let swiperInstance;
    if (swiperRef.current) {
      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 500,
        pagination: {
          el: ".slideshow-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".slideshow-navigation-button.next",
          prevEl: ".slideshow-navigation-button.prev",
        },
      });
    }

    return () => {
      if (swiperInstance) swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <section className="w-full h-screen border-solid mb-[256px]" id="showcase">
      <p className="font-general text-center text-sm uppercase md:text-[10px]">
      My design work
      </p>

      <AnimatedTitle
        title="Cr<b>a</b>fted with <br /> Beyond p<b>a</b>ssion"
        containerClass="my-10 !text-black text-center"
      />
      <div className="relative size-full border-solid border-black ">
        <div ref={swiperRef} className="swiper slideshow size-full ">
          <div className="swiper-wrapper">
            {[
              { title: "Exotic places", src: "img/feature-1.jpg" },
              { title: "Meet ocean", src: "img/feature-2.jpg" },
              { title: "Around the world", src: "img/feature-3.jpg" },
              { title: "Around the world", src: "img/feature-4.jpg" },
            ].map((slide, index) => (
              <div key={index} className="swiper-slide flex justify-center items-center relative text-center">
                <div
                  className="absolute top-0 left-0 size-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.src})` }}
                ></div>
                <span className="text-black text-4xl md:text-6xl font-bold z-10 uppercase">
                  {slide.title}
                </span>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="swiper-pagination slideshow-pagination absolute bottom-12 left-0 w-full flex justify-center z-10"></div>

          {/* Navigation */}
          {/* <div className="absolute top-20 left-10 right-10w-full flex justify-between z-10">
            <button className="swiper-button-prev slideshow-navigation-button prev bg-black/50 p-4 text-white">
              &#10094;
            </button>
            <button className="swiper-button-next slideshow-navigation-button next bg-black/50 p-4 text-white">
              &#10095;
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Features;


