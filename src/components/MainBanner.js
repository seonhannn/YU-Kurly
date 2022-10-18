import React from 'react';
import './MainBanner.css';
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Pagination, Navigation]);

function MainBanner() {
    return (
        <div className='main-banner'>
            <Swiper
                style={{
                    height: '370px',
                    width: '100%'
                }}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true
                }}>
                <SwiperSlide className='main-banner-slide'>
                    <Link to={''} className='main-banner-slide1'>
                        <img src='https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/d1b669f1-95ab-44a8-8214-cd069ecdf47b.jpg' alt='main banner img'></img>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='main-banner-slide'>
                    <Link to={''} className='main-banner-slide2'>
                        <img src='https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/b088f8ec-9120-4e17-8223-6aeb0a683824.jpg' alt='main banner img'></img>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='main-banner-slide'>
                    <Link to={''} className='main-banner-slide3'>
                        <img src='https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/cf1fb1c5-e606-41f9-8ade-c4611127abba.jpg' alt='main banner img'></img>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MainBanner;