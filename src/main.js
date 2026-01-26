import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "swiper/css";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

new Swiper(".swiper", {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    delay: 3000,
  },
});

new Swiper(".testimoni", {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".testi-next",
    prevEl: ".testi-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
  },
});
