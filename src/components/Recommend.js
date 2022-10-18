import React from "react";
import './Recommend.css';
import SwiperCore, {Pagination, Navigation} from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductList from "./ProductList";
SwiperCore.use([Pagination, Navigation]);

function Recommend(props) {
    return (
        <div className='recommend'>
            <div className="recommend-title">
                {props.title}
            </div>
            <ProductList></ProductList>
        </div>
    )
}

export default Recommend;