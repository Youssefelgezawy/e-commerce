import React from 'react'
import './Slideproduct.css'
import Product from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';





const Slideproduct = ({ title, data = [] }) => {
    return (
        <>


            <div className="Slideproduct">
                <div className="container">
                    <div className="top-slid">
                        <h2>{title}</h2>

                    </div>


                    <div className="bottm-slide">

                        <Swiper loop={data.length > 1} loopFillGroupWithBlank={true} slidesPerGroup={1} autoplay={{
                            delay: 2500, disableOnInteraction: false,
                        }}
                            slidesPerView={1} spaceBetween={10} breakpoints={{ 576: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 992: { slidesPerView: 4 }, 1200: { slidesPerView: 5 } }}
                            navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                            {data.map((item) => {
                                return (

                                    <SwiperSlide key={item.id}><Product item={item} /></SwiperSlide>
                                )
                            })}

                        </Swiper>

                    </div>
                </div>
            </div>



        </>
    )
}

export default Slideproduct;