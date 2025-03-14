import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper } from "swiper/react";

// Kích hoạt các module của Swiper
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

export const doraSlider = {
  serviceSlider: {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    fade: true,
    autoplay: {
      delay: 3000, // Tự động trượt sau 3s
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".service-swiper-button-right",
      prevEl: ".service-swiper-button-left",
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 30 }, // Điện thoại nhỏ
      574: { slidesPerView: 2, spaceBetween: 20 }, // Điện thoại lớn
      860: { slidesPerView: 2, spaceBetween: 25 }, // Máy tính bảng
      1000: { slidesPerView: 3, spaceBetween: 25 }, // Laptop
      1240: { slidesPerView: 4, spaceBetween: 30 }, // Màn hình lớn
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
      1400: { slidesPerView: 2, spaceBetween: 30 }, // Chỉ thay đổi khi >= 1400px
    },
  },
};
