import React, {Component} from "react";
import './Bottom.css';

function Bottom() {
    return (
        <div>
            <div className="bottom">
                <div className="kurlyInfo">
                    <div className="kurlyCs">
                        <h2>
                            고객행복센터
                            <span> 365일 오전 7시 - 오후 7시</span>
                        </h2>
                        <strong className="strongStr">1644-1107</strong>
                        <div className="csBtn">
                            <button>카카오톡 문의</button>
                            <button>1:1 문의</button>
                            <button>대량주문 문의</button>
                        </div>
                        <div className="noneMemberCs">
                            비회원 문의 :
                            <a href="mailto:help@kurlycorp.com">mailto:help@kurlycorp.com</a>
                            <br/>
                            비회원 대량주문 문의 :
                            <a href="mailto:kurlygift@kurlycorp.com">mailto:kurlygift@kurlycorp.com</a>
                        </div>
                    </div>
                    <div className="aboutKurly">
                        <ul className="aboutKurlyList">
                            <li>
                                <a target="_self" href="https://www.kurly.com/shop/introduce/about_kurly.php">컬리소개</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/embed/WEep7BcboMQ?rel=0&showinfo=0&wmode=opaque&enablejsapi=1">컬리소개영상</a>
                            </li>
                            <li>
                                <a href="https://marketkurly.recruiter.co.kr/appsite/company/index">인재채용</a>
                            </li>
                            <li>
                                <a target="_self" href="/user-terms/agreement">이용약관</a>
                            </li>
                            <li>
                                <a target="_self" href="/user-terms/privacy-policy">개인정보처리방침</a>
                            </li>
                            <li>
                                <a target="_self" href="/user-guide">이용안내</a>
                            </li>
                        </ul>
                        <div className="aboutKurlyInfo">
                            법인명 (상호) : 주식회사 컬리
                            <span className="after"></span>
                            사업자등록번호 : 261-81-23567
                            <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no=" target="_blank">사업자정보 확인</a>
                            <br/>
                            통신판매업 : 제 2018-서울강남-01646 호
                            <span className="after"></span>
                            개인정보보호책인자 : 이원준
                            <br/>
                            주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) 
                            <span className="after"></span>
                            대표이사 : 김슬아
                            <br/>
                            입점문의 :
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ/viewform" target="_blank">입점문의하기</a>
                            <span className="after"></span>
                            제휴문의 :
                            <a href="mailto:business@kurlycorp.com">business@kurlycorp.com</a>
                            <br/>
                            채용문의 :
                            <a href="mailto:recruit@kurlycorp.com">recruit@kurlycorp.com</a>
                            <br/>
                            팩스: 070 - 7500 -6098
                        </div>
                    <ul className="sns">
                        <a href="https://instagram.com/marketkurly" target="_blank">
                            <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt=""/>
                        </a>
                        <a href="https://www.facebook.com/marketkurly" target="_blank">
                            <img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt=""/>
                        </a>
                        <a href="https://blog.naver.com/marketkurly" target="_blank">
                            <img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt=""/>
                        </a>
                        <a href="https://m.post.naver.com/marketkurly" target="_blank">
                            <img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt=""/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg">
                            <img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt=""/>
                        </a>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Bottom;