// Swiper to create slide
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Components
import { Technology } from "./Technology";

// Types
import { technology } from "@/data";

// Styles
import "../slider.css";

interface Props {
  items: technology[];
}

const Slider = ({ items }: Props) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={false}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      pagination={{
        clickable: true,
      }}
      // className="productSlider mx-auto max-w-[360px] md:max-w-[650px] lg:max-w-[920px] xl:max-w-[1200px] 2xl:max-w-[1440px]"
      className="productSlider mx-auto max-w-[80%] md:max-w-[100%]"
    >
      <>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Technology technology={item} />
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export { Slider };
