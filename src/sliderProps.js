import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";

// Kích hoạt các module Swiper cần thiết
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

export const doraSlider = {
  serviceSlider: {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true, // Cho phép slider lặp lại liên tục
    speed: 600, // Tăng tốc độ slide (mặc định 300)
    grabCursor: true, // Hiển thị trỏ chuột dạng bàn tay khi hover
    mousewheel: true, // Cho phép lướt bằng chuột
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
    mousewheel: true, // Thêm vuốt chuột vào feedback slider
    navigation: {
      nextEl: ".feedback-right",
      prevEl: ".feedback-left",
    },
    breakpoints: {
      1400: { slidesPerView: 2, spaceBetween: 30 },
    },
  },
};
