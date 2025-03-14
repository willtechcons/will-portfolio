import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

export const doraSlider = {
  serviceSlider: {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    grabCursor: true, // Giúp dễ vuốt hơn
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // Đảm bảo không bị đứng khi click
    },
    navigation: {
      nextEl: ".service-swiper-button-right",
      prevEl: ".service-swiper-button-left",
      clickable: true, // Cho phép click vào nút điều hướng
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 30 },
      574: { slidesPerView: 2, spaceBetween: 20 },
      860: { slidesPerView: 2, spaceBetween: 25 },
      1000: { slidesPerView: 3, spaceBetween: 25 },
      1240: { slidesPerView: 4, spaceBetween: 30 },
    },
  },
};
