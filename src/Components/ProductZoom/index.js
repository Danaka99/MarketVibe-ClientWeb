import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useState, useRef } from 'react';

const ProductZoom = () => {

    const [slideIndex, setSlideIndex]= useState(0);
    const zoomSliderBig=useRef();
    const zoomSlider=useRef();

    const goto = (index) =>{
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }


  return (
    <div className="productZoom">
      <div className='productZoom position-relative'>
            <div className='badge badge-primary'>28%</div>
                    <Swiper
                    spaceBetween={0}               // Space between slides
                    slidesPerView={1}                // Show 1 slide at a time
                    navigation={false}                      // Show navigation arrows
                    slidesPerGroup={1}                      // Enable infinite looping
                    modules={[Navigation ]} 
                    className="zoomSliderBig"
                    ref={zoomSliderBig}
                    >

                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom
                            zoomType="hover" zoomScale={1}
                            src={`https://i.ebayimg.com/images/g/jMEAAOSw5-pmtf79/s-l1600.jpg`}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom
                            zoomType="hover" zoomScale={1}
                            src={`https://i.ebayimg.com/images/g/sMcAAOSwmmlmtf73/s-l1600.jpg`}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom
                            zoomType="hover" zoomScale={1}
                            src={`https://i.ebayimg.com/images/g/NKUAAOSwgGZmtf7~/s-l1600.jpg`}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom
                            zoomType="hover" zoomScale={1}
                            src={`https://i.ebayimg.com/images/g/0MwAAOSwu4Rmtf8C/s-l1600.jpg`}/>
                        </div>
                    </SwiperSlide> 
                 </Swiper>
                </div>

                <Swiper
                    spaceBetween={0}               // Space between slides
                    slidesPerView={4}                // Show 1 slide at a time
                    navigation={true}                      // Show navigation arrows
                    slidesPerGroup={1}                      // Enable infinite looping
                    modules={[Navigation ]} 
                    className="zoomSlider"
                    ref={zoomSlider}
                >
                    <SwiperSlide>
                        <div className={`item ${slideIndex===0 && 'item_active'}`}>
                            <img src={`https://i.ebayimg.com/images/g/jMEAAOSw5-pmtf79/s-l1600.jpg`}
                            className="w-100" alt=''/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`item ${slideIndex===1 && 'item_active'}`}>
                            <img src={`https://i.ebayimg.com/images/g/sMcAAOSwmmlmtf73/s-l1600.jpg`}
                            className="w-100" onClick={() => goto(1)} alt='1' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`item ${slideIndex===2 && 'item_active'}`}>
                            <img src={`https://i.ebayimg.com/images/g/NKUAAOSwgGZmtf7~/s-l1600.jpg`}
                            className="w-100" onClick={() => goto(2)} alt='2' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`item ${slideIndex===3 && 'item_active'}`}>
                            <img src={`https://i.ebayimg.com/images/g/0MwAAOSwu4Rmtf8C/s-l1600.jpg`}
                            className="w-100" onClick={() => goto(3)} alt='3' />
                        </div>
                    </SwiperSlide>
                </Swiper>
    </div>
  );
}

export default ProductZoom;
