import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, HashNavigation, Autoplay } from "swiper";
const Slider = () => {
    return (
        <div className="mb-10">
            <h1 className="text-3xl text-center font-bold">Our Services (خدماتنا)</h1>

            <p className="text-center text-purple-500 mb-4">We offer custom, eco-friendly, ergonomic, modular furniture with AR technology.</p>
            <div className="w-[90%] md:w-[60%] lg:w-[40%] mx-auto flex align-middle">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    hashNavigation={{
                        watchState: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation, HashNavigation, Autoplay]}

                    className="mySwiper"
                >

                    <SwiperSlide data-hash="slide1">
                        <img src='https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' className="h-[300px] w-full  rounded-lg" alt="" />
                        <h1 className="text-center">Sofa Making and Repairing</h1>
                        <h1 className="text-center">صنع الأريكة وإصلاحها</h1>
                    </SwiperSlide>

                    <SwiperSlide data-hash="slide2">
                        <img src='https://m.media-amazon.com/images/I/81VGQESWuPL._SY355_.jpg' className="h-[300px] w-full rounded-lg" alt="" />
                        <h1 className="text-center">Wallpaper Selling and Fixing</h1>
                        <h1 className="text-center">بيع وتثبيت ورق الحائط</h1>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide3">
                        <img src='https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FycGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className="h-[300px] w-full rounded-lg" alt="" />
                        <h1 className="text-center">Carpet Selling and Fixing</h1>
                        <h1 className="text-center">بيع وتركيب السجاد</h1>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide4">
                        <img src='/images/curtain.jpg' className="h-[300px] w-full rounded-lg" alt="" />
                        <h1 className="text-center">Curtain Making and Fixing</h1>
                        <h1 className="text-center">صناعة الستائر وتثبيتها</h1>
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide5">
                        <img src='/images/majlish.jpg' className="h-[300px] w-full rounded-lg" alt="" />
                        <h1 className="text-center">Majlish Making and Repairing</h1>
                        <h1 className="text-center">صنع مجليش واصلاحها</h1>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div >
    );
};

export default Slider;