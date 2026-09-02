import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Slice() {
  return (
    <Swiper
     modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
       <div>
        <img
          src="https://png.pngtree.com/background/20230419/original/pngtree-red-car-light-interior-background-picture-image_2448014.jpg" alt="car is very high_price"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",

          }}
        />
      </div>
      </SwiperSlide>
      <SwiperSlide>
         <div>
        <img
          src="https://4kwallpapers.com/images/wallpapers/lamborghini-2560x1440-19888.jpg"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
          }}
        />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <img
          src="https://wallpapercave.com/wp/wp7355092.jpg"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
          }}
        />
      </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slice;