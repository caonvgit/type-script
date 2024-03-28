type Props = {}
const Index = (props: Props) => {
  return (
    <div className="containerr">
        <div className="slide">
            <div className="slide-left">
                <div className="slide-left-content">
                    <div><a href="">Woman’s Fashion</a></div>
                    <div><a href="">Men’s Fashion</a></div>
                    <div><a href="">Electronics</a></div>
                    <div><a href="">Home & Lifestyle</a></div>
                    <div><a href="">Medicine</a></div>
                    <div><a href="">Sports & Outdoor</a></div>
                    <div><a href="">Baby’s & Toys</a></div>
                    <div><a href="">Groceries & Pets</a></div>
                    <div><a href="">Health & Beauty</a></div>
                </div>
            </div>
            <hr className="vertical-line"/>
            <div className="slide-right">
                
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./asets/img/slide1.jpg"  className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./asets/img/slide2.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./asets/img/slide3.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>
        </div>

        <div className="cate-menu">
            <div className="catagories">
                <div className="box-box"></div>
                <p className="next-box">Categories</p>
            </div>
            <div className="browse">
                <div>
                    <h1>Browse By Category</h1>
                </div>
                <div className="btn-mui">
                    <button><img src="./src/img/muiten1.svg" alt=""/></button>
                    <button><img src="./src/img/muiten2.svg" alt=""/></button>

                </div>
            </div>
            <div className="type-cate">
                <div className="one-type-cate">
                    <img src="./asets/img/Category-CellPhone.svg" alt=""/>
                    <span>Phones</span>
                </div>
                <div className="one-type-cate">
                    <img src="./asets/img/Category-Computer.svg" alt=""/>
                    <span>Phones</span>
                </div>
                <div className="one-type-cate">
                    <img src="./asets/img/Category-Gamepad.svg" alt=""/>
                    <span>Phones</span>
                </div>
                <div className="one-type-cate">
                    <img src="./asets/img/Category-Headphone.svg" alt=""/>
                    <span>Phones</span>
                </div>
                <div className="one-type-cate">
                    <img src="./asets/img/Category-Computer.svg" alt=""/>
                    <span>Phones</span>
                </div>
                <div className="one-type-cate">
                    <img src="./asets/img/Category-SmartWatch.svg" alt=""/>
                    <span>Phones</span>
                </div>
            </div>
            <hr/>
        </div>

        <div className="product">
            <div className="catagories">
                <div className="box-box"></div>
                <p className="next-box">This Month</p>
            </div>
            <div className="browse">
                <div>
                    <h1>Best Selling Products</h1>
                </div>
                <div className="btn-nut">
                    <button className="btn-view">View All</button>
                </div>
            </div>

            <section className="news">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-heading__title"></h2>
                    </div>
                    <div className="section-body">
                        <div className="product-list">
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="./detail.html"><img src="./asets/img/ao.png" alt="" className="product__thumbnail" /></a>
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                        <span className="product-price__old">$300</span>
                                    </div>
                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            <div className="product-item">
                                <div className="product-image">
                                    <a href="./detail.html"><img src="./asets/img/ao.png" alt="" className="product__thumbnail" /></a>
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                        <span className="product-price__old">$300</span>
                                    </div>
                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            <div className="product-item">
                                <div className="product-image">
                                    <img src="./asets/img/ao.png" alt="" className="product__thumbnail" />
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                        <span className="product-price__old">$300</span>
                                    </div>
                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            {/* <!--End .product-item--> */}
                            <div className="product-item">
                                <div className="product-image">
                                    <img src="./asets/img/ao.png" alt="" className="product__thumbnail" />
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                        <span className="product-price__old">$300</span>
                                    </div>
                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            {/* <!--End .product-item--> */}
                        </div>
                    </div>



                </div>

            </section>
        </div>
        <div className="banner">
            <a href="" className="banner1">
                <img src="./asets/img/banner.svg" alt=""/>
            </a>
        </div>



        <div className="product">
            <div className="catagories">
                <div className="box-box"></div>
                <p className="next-box">Our Products</p>
            </div>
            <div className="browse">
                <div>
                    <h1>Explore Our Products</h1>
                </div>
                <div className="btn-nut">
                    <button className="btn-view">View All</button>
                </div>
            </div>

            <section className="news">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-heading__title"></h2>
                    </div>
                    <div className="section-body">
                        <div className="product-list">
                            <div className="product-item">
                                <div className="product-image">
                                    <img src="./asets/img/ao.png" alt="" className="product__thumbnail" />
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                        <span className="product-price__old">$300</span>
                                    </div>
                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            {/* <!--End .product-item--> */}
                            <div className="product-item">
                                <div className="product-image">
                                    <img src="./asets/img/ao.png" alt="" className="product__thumbnail" />
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                        <span className="product-price__old">$300</span>
                                    </div>
                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            {/* <!--End .product-item--> */}
                            <div className="product-item">
                                <div className="product-image">
                                    <img src="./asets/img/ao.png" alt="" className="product__thumbnail" />
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                        <span className="product-price__old">$300</span>
                                    </div>
                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            {/* <!--End .product-item--> */}
                            <div className="product-item">
                                <div className="product-image">
                                    <img src="./asets/img/ao.png" alt="" className="product__thumbnail" />
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                        <span className="product-price__old">$300</span>
                                    </div>
                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            {/* <!--End .product-item--> */}
                        </div>
                    </div>



                </div>

            </section>
            <section className="news">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-heading__title"></h2>
                    </div>
                    <div className="section-body">
                        <div className="product-list">
                            <div className="product-item">
                                <div className="product-image">
                                    <img src="./asets/img/ao.png" alt="" className="product__thumbnail" />
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                    <span className="product-salee">news</span>

                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                    </div>
                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            {/* <!--End .product-item--> */}
                            <div className="product-item">
                                <div className="product-image">
                                    <img src="./asets/img/ao.png" alt="" className="product__thumbnail" />
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                    </div>



                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>

                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            {/* <!--End .product-item--> */}
                            <div className="product-item">
                                <div className="product-image">
                                    <img src="./asets/img/ao.png" alt="" className="product__thumbnail" />
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                    <span className="product-salee">news</span>

                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                    </div>
                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            {/* <!--End .product-item--> */}
                            <div className="product-item">
                                <div className="product-image">
                                    <img src="./asets/img/ao.png" alt="" className="product__thumbnail" />
                                    <span className="product-sale"><img src="./asets/img/tym.svg" alt=""/></span>
                                </div>
                                <div className="product-info">
                                    <h3 className="product__name">
                                        <a href="" className="product__link">The north coat</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="product-price__new">$200</span>
                                    </div>
                                    <div className="product__star">
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>
                                        <img src="./asets/img/star.png" alt=""/>

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <button className="btn product-action__addtocart">Add To Cart</button>

                                </div>
                            </div>
                            {/* <!--End .product-item--> */}
                        </div>

                        <div className="hiha">
                            <button><a href="">View All Products</a></button>
                        </div>
                    </div>



                </div>

            </section>
        </div>

        <div className="feature">
            <div className="catagories">
                <div className="box-box"></div>
                <p className="next-box">Featured</p>
            </div>
            <div className="browse">
                <div>
                    <h1>New Arrival</h1>
                </div>
            </div>
            <div className="img-two">
                <div className="img-big"><img src="./asets/img/anhto.svg" alt=""/></div>
                <div className="img-small">
                    <img src="./asets/img/anhbe.svg" alt=""/>
                    <div className="img-three">
                        <div className="img-three1">
                            <img src="./asets/img/anhbee.svg" alt=""/>
                        </div>
                        <div className="img-three2"><img src="./asets/img/Frame 687.png" alt=""/></div>

                    </div>
                </div>

            </div>
        </div>

        <div className="support">
            <div className="support-item">
                <button className="btn-sup"><img src="./asets/img/oto.svg" alt=""/></button>
                <h3>FREE AND FAST DELIVERY</h3>
                <span>Free delivery for all orders over $140</span>
            </div>
            <div className="support-item">
                <button className="btn-sup"><img src="./asets/img/tainghe.png" alt=""/></button>
                <h3>FREE AND FAST DELIVERY</h3>
                <span>Free delivery for all orders over $140</span>
            </div>
            <div className="support-item">
                <button className="btn-sup"><img src="./asets/img/baove.png" alt=""/></button>
                <h3>FREE AND FAST DELIVERY</h3>
                <span>Free delivery for all orders over $140</span>
            </div>
        </div>

    </div>
  )
}
export default Index;