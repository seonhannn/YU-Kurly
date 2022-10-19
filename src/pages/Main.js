import React, {Component} from "react";
import MainBanner from "../components/MainBanner";
import MDRecommend from "../components/MDRecommend";
import Recommend from "../components/Recommend";
import SubBanner from "../components/SubBanner";
import Bottom from "../components/Bottom";

function Main() {
    return (
        <div>
           <MainBanner></MainBanner>
           <Recommend title="이 상품 어때요?"></Recommend>
           <SubBanner></SubBanner>
           <Recommend title="놓치면 후회할 가격 >"></Recommend>
           <Recommend title="지금 가장 핫한 상품"></Recommend>
           <MDRecommend></MDRecommend>
           <Recommend title="마감 세일 >"></Recommend>
           <Bottom></Bottom>
        </div>
    )
}

export default Main;