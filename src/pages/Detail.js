import React from "react";
import {Link} from "react-router-dom";

function Detail() {
    return (
        <div className="detail">
            <article className="detail-product-container">
                <div className="detail-product-img"></div>
                <div className="detail-product">
                    <div className="datail-product-title-info">
                        <div className="detail-product-title-delivery">샛별배송</div>
                        <div className="detail-product-title-container">
                            <h2 className="detail-product-title">[서울우유] 비요뜨 요거트 5종</h2>
                            <butto className="detail-product-share"></butto>
                            <p className="detail-product-sub-title">토핑을 곁들인 간편 요거트</p>
                        </div>
                    </div>
                    <div className="detail-product-price-info">
                        <span className="detail-product-price1">1,330</span>
                        <span className="detail-product-price2">원</span>
                    </div>
                    <div className="detail-product-login">로그인 후, 적립 혜택이 제공됩니다.</div>
                    <div className="detail-product-info">
                        <dl>
                            <dt>배송</dt>
                            <dd>
                                <p>샛별배송</p>
                                <p>23시 전 주문 시 내일 아침 7시 전 도착 (대구, 부산, 울산 샛별배송 운영시간 별도 확인)</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>판매자</dt>
                            <dd>
                                <p>컬리</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>포장타입</dt>
                            <dd>
                                <p>냉장 (종이포장)</p>
                                <p>택배배송은 에코 포장이 스티로폼으로 대체됩니다</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>판매단위</dt>
                            <dd>
                                <p>1개</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>중량/용량</dt>
                            <dd>
                                <p>제품별상이(하단참조)</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>원산지</dt>
                            <dd>
                                <p>상세페이지 별도표기</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>알레르기 정보</dt>
                            <dd>
                                <p>- 크런치볼 : 우유, 밀, 대두 함유
* 이 제품은 호두, 땅콩, 돼지고기를 사용한 제품과 같은 제조시설에서 제조하고 있습니다.
- 쿠키앤크림 : 우유, 밀, 대두, 돼지고기 함유
* 이 제품은 호두, 메밀, 땅콩, 계란을 사용한 제품과 같은 제조시설에서 제조하고 있습니다.
- 초코링 : 우유, 밀, 대두 함유
* 이 제품은 계란, 메밀, 호두, 땅콩, 돼지고기를 사용한 제품과 같은 제조시설에서 제조하고 있습니다.
- 링크 : 우유, 밀, 대두 함유
* 이 제품은 계란, 메밀, 호두, 땅콩, 돼지고기, 쇠고기, 잣을 사용한 제품과 같은 제조시설에서 제조하고 있습니다.
- 초코크리스피 : 우유, 대두 함유
* 이 제품은 계란, 메밀, 밀, 호두, 땅콩, 돼지고기, 쇠고기, 잣을 사용한 제품과 같은 제조시설에서 제조하고 있습니다.
- 초코팝 : 우유, 밀 함유
* 이 제품은 계란, 메밀, 대두, 호두, 땅콩, 돼지고기, 쇠고기, 잣을 사용한 제품과 같은 제조시설에서 제조하고 있습니다. </p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>유통기한(또는 소비기한)정보</dt>
                            <dd>
                                <p>수령일 포함 최소 6일 남은 제품을 발송드립니다.</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>안내사항</dt>
                            <dd>
                                <p>-비요뜨의 최소 구매수량은 2개입니다.</p>
                            </dd>
                        </dl>
                    </div>
                    <div className="detail-product-all-price">
                        <div>
                            <dl>
                                <dt>상품 선택</dt>
                                <div>
                                    <div>상품을 선택해주세요</div>
                                    <div></div>
                                </div>
                            </dl>
                        </div>
                        <div>
                            <div>
                                <div>총 상품금액: </div>
                                <div>0</div>
                                <div>원</div>
                            </div>
                            <div>
                                <div></div>
                                <div>로그인 후, 적립 혜택 제공</div>
                            </div>
                        </div>
                        <div>
                            <button></button>
                            <button></button>
                            <div>
                                <button>장바구니 담기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <nav className="detail-nav">
                <div>
                    <Link to={'./'} className="detail-product-content">상품설명</Link>
                </div>
                <div>
                    <Link to={'./'} className="detail-product-information">상세정보</Link>
                </div>
                <div>
                    <Link to={'./'} className="detail-product-review">후기</Link>
                </div>
                <div>
                    <Link to={'./'} className="detail-product-qna">문의</Link>
                </div>
            </nav>
            <div className="detail-product-content-container">
                <div className="product-intro">
                    <div className="product-intro-img">
                        <img src="https://img-cf.kurly.com/shop/data/goodsview/20220317/gv40000290601_1.jpg" alt="product img"></img>
                    </div>
                    <div className="product-intro-content">
                        <h3>
                            <small>토핑을 곁들인 간편 요거트</small>
                            서울우유
                            <br></br>
                            비요뜨 요거트 5종
                        </h3>
                        <p>
                        요거트와 달콤한 토핑의 만남, 서울우유의 비요뜨 요거트를 이제 컬리에서도 만나보세요. 비요뜨 시리즈는 플레인 요거트와 토핑이 함께 구성된 제품으로 워낙 유명하지요. 토핑이 담긴 부분을 요거트 방향으로 꺾은 뒤 토핑과 요거트를 잘 섞어 먹기만 하면 되는데요. 무엇보다 재료를 각각 준비해야 할 번거로움이 없어 더욱 간편하답니다. 크런치볼부터 초코팝까지, 모두 5가지 맛으로 준비했으니 하나씩 골라 가세요. 바쁜 아침 든든한 아침 식사로, 식후에는 달콤한 디저트로 안성맞춤일 거예요. 
                        </p>
                    </div>
                </div>
                <div className="product-point">
                    <h3>Kurly's Check Point</h3>
                    <div className="product-point-img">
                        <img src="https://img-cf.kurly.com/shop/data/goodsview/20200129/gv00000079443_1.jpg" alt="product point img"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;