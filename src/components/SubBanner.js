import React from "react";
import {Link} from "react-router-dom";
import './SubBanner.css';

function SubBanner() {
    return (
        <div className="sub-banner">
            <Link to={'/'} className="sub-banner-link">
                <img src="https://product-image.kurly.com/banner/random-band/pc/img/33406d96-ce28-4973-a597-77f1ab30c2d2.jpg" alt="sub banner img"></img>
            </Link>
        </div>
    )
}

export default SubBanner;