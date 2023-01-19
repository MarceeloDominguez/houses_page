import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { slides } from "../data/heroSlider";
import Slides from "./Slides";

import { EffectFade, Autoplay } from "swiper";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="h-[600px] lg:h-[860px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="h-full relative flex justify-center items-center"
        >
          <Slides slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
