import React from "react";
import './MDRecommend.css';
import {Link} from 'react-router-dom';
import Recommend from "./Recommend";

function MDRecommend() {
    return(
        <div className="md-recommend">
            <div className="md-recommend-title">
                <div>MD의 추천</div>
            </div>
            <div className="md-recommend-list">
                <ul>
                    <li>
                        <button className="md-recommend-btn">채소</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">과일, 견과, 쌀</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">수산, 해산, 건어물</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">정육, 계란</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">국, 반찬, 메인요리</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">샐러드, 간편식</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">면, 양념, 오일</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">생수, 음료, 우유, 커피</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">간식, 과자, 떡</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">베이커리, 치즈</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">건강식품</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">와인</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">전통주</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">생활용품, 리빙, 캠핑</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">스킨케어, 메이크업</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">헤어, 바디, 구강</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">주방용품</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">가전제품</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">선물하기</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">반려동물</button>
                    </li>
                    <li>
                        <button className="md-recommend-btn">베이비, 키즈, 완구</button>
                    </li>
                </ul>
            </div>
            <div className="md-recommend-product">
                <Recommend></Recommend>
            </div>
            <div className="md-recommend-view-all">
                <Link to={'/'} className='md-recommend-view-all-link'>
                    <button className="md-recommend-view-all-btn">
                        건강식품 전체보기
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MDRecommend;