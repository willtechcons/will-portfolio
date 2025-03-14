import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade, Grid } from "swiper/modules";

export const doraSlider = {
  serviceSlider: {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centerSlider: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".service-swiper-button-right",
      prevEl: ".service-swiper-button-left",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade",
    modules: [Navigation, Pagination, Autoplay, EffectFade, Grid],
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 30 },
      574: { slidesPerView: 2, spaceBetween: 20 },
      860: { slidesPerView: 2, spaceBetween: 25 },
      1000: { slidesPerView: 3, spaceBetween: 25 },
      1240: { slidesPerView: 4, spaceBetween: 30 },
    },
  },
};
