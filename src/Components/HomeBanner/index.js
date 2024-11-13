import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const HomeBanner = () => {
  return (
    <div className="container-mt-3">
      <div className="homeBannerSection">
      <Swiper
        spaceBetween={15}               // Space between slides
        slidesPerView={1}                // Show 1 slide at a time
        navigation={true}                      // Show navigation arrows
        loop={false}                      // Enable infinite looping
        autoplay={{ delay: 2500,
                    disableOnInteraction:false }}        // Enable autoplay with a 3-second delay
        modules={{ Navigation,Autoplay }} 
        className="mySwipper"
      >
        <SwiperSlide>
          <img 
            src="https://cmsimages.shoppersstop.com/main_strapi_web_fa797dee45/main_strapi_web_fa797dee45.png" 
            alt="Banner 1" 
            className="w-100" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cmsimages.shoppersstop.com/static_web_Adidas_puma_and_more_5599e04baa/static_web_Adidas_puma_and_more_5599e04baa.png" 
            alt="Banner 2" 
            className="w-100" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cmsimages.shoppersstop.com/static_web_Biba_Global_Desi_and_more_a0e91c950b/static_web_Biba_Global_Desi_and_more_a0e91c950b.png" 
            alt="Banner 3" 
            className="w-100" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cmsimages.shoppersstop.com/static_web_Casio_Fossil_and_more_95591ed809/static_web_Casio_Fossil_and_more_95591ed809.png" 
            alt="Banner 4" 
            className="w-100" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cmsimages.shoppersstop.com/static_web_Forever_New_AND_and_more_2d767d54bb/static_web_Forever_New_AND_and_more_2d767d54bb.png" 
            alt="Banner 5" 
            className="w-100" 
          />
        </SwiperSlide>
      </Swiper>   
    </div>

    </div>
  );
}

export default HomeBanner;
