import React, {Component} from "react";
import MainBanner from "../components/MainBanner";
import MDRecommend from "../components/MDRecommend";
import Recommend from "../components/Recommend";
import SubBanner from "../components/SubBanner";

function Main() {
    return (
        <div>
           <MainBanner></MainBanner>
           <Recommend title="이 상품 어때요?"></Recommend>
           <SubBanner></SubBanner>
           <Recommend title="놓치면 후회할 가격 >"></Recommend>
           <Recommend title="지금 가장 핫한 상품"></Recommend>
           <MDRecommend></MDRecommend>
        </div>
    )
}

export default Main;