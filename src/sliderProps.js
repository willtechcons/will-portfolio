import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

export const doraSlider = {
  serviceSlider: {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    fade: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".service-swiper-button-right",
      prevEl: ".service-swiper-button-left",
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 30 },
      574: { slidesPerView: 2, spaceBetween: 20 },
      860: { slidesPerView: 2, spaceBetween: 25 },
      1000: { slidesPerView: 3, spaceBetween: 25 },
      1240: { slidesPerView: 4, spaceBetween: 30 },
    },
  },
  feedbackSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".feedback-right",
      prevEl: ".feedback-left",
    },
    breakpoints: {
      1400: { slidesPerView: 2, spaceBetween: 30 },
    },
  },
};
