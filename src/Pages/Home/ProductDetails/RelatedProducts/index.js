import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import React from "react";
import ProductItem from '../../../../Components/ProductItem';

const RelatedProducts = (props) => {
  return (
    <>
      <div className="d-flex align-items-center mt-3">
                <div className="info w-75">
                  <h3 className="mb-0 hd">{props.title}</h3><br/>
                </div>
                
              </div>

              <div className="product_row w-100 mt-0">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={10}
                  pagination={{ clickable: true, }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                 
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                    <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                   
                   <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                    <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                    <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                    <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                   <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                    <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                    <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide> 
                  
                </Swiper>
              </div>
    </>
  );
}

export default RelatedProducts;
