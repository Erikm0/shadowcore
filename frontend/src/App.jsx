import {useState, useEffect} from 'react';
import './App.css';
import banner from "./assets/test_banner.png";
import dummy from "./assets/ln_s_002_024_2.png";
import upcoming from "./assets/Lart_de_vivre.png";
import Navbar from "./components/Navbar.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner} className="d-block w-100" alt="banner_1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={banner} className="d-block w-100" alt="banner_2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={banner} className="d-block w-100" alt="banner_3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className={"productBody"}>
                {/*BestSellers*/}
                <div className={"bestSellers"}>
                    <p>BEST SELLERS</p>
                    <div className={"row bestSellersProd"}>
                        <div className={"col-6 col-lg-3"}>
                            <div className={"d-flex flex-column align-items-start product w-100"}>
                                <img className={"termekKep"} alt={"termekKep"} src={dummy}></img>
                                <div className={"d-flex flex-column align-items-start"}>
                                    <p className={"termekSzov w-100"}>Purple Fire - tee</p>
                                    <p className={"termekAr w-100"}>19.99€</p>
                                    <div className={"d-flex flex-row productDesc"}>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconMat"}></img>
                                            <p className={"productMat"}>100% cotton</p>
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconGsm"}></img>
                                            <p className={"productMat"}>180 GSM</p>
                                        </div>
                                    </div>
                                </div>
                                <button className={"productButton"}>BUY NOW</button>
                            </div>
                        </div>
                        <div className={"col-6 col-lg-3"}>
                            <div className={"d-flex flex-column align-items-start product w-100"}>
                                <img className={"termekKep"} alt={"termekKep"} src={dummy}></img>
                                <div className={"d-flex flex-column align-items-start"}>
                                    <p className={"termekSzov w-100"}>Purple Fire - tee</p>
                                    <p className={"termekAr w-100"}>19.99€</p>
                                    <div className={"d-flex flex-row productDesc"}>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconMat"}></img>
                                            <p className={"productMat"}>100% cotton</p>
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconGsm"}></img>
                                            <p className={"productMat"}>180 GSM</p>
                                        </div>
                                    </div>
                                </div>
                                <button className={"productButton"}>BUY NOW</button>
                            </div>
                        </div>
                        <div className={"col-6 col-lg-3 mt-4 mt-sm-0"}>
                            <div className={"d-flex flex-column align-items-start product w-100"}>
                                <img className={"termekKep"} alt={"termekKep"} src={dummy}></img>
                                <div className={"d-flex flex-column align-items-start"}>
                                    <p className={"termekSzov w-100"}>Purple Fire - tee</p>
                                    <p className={"termekAr w-100"}>19.99€</p>
                                    <div className={"d-flex flex-row productDesc"}>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconMat"}></img>
                                            <p className={"productMat"}>100% cotton</p>
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconGsm"}></img>
                                            <p className={"productMat"}>180 GSM</p>
                                        </div>
                                    </div>
                                </div>
                                <button className={"productButton"}>BUY NOW</button>
                            </div>
                        </div>
                        <div className={"col-6 col-lg-3 mt-4 mt-sm-0"}>
                            <div className={"d-flex flex-column align-items-start product w-100"}>
                                <img className={"termekKep"} alt={"termekKep"} src={dummy}></img>
                                <div className={"d-flex flex-column align-items-start"}>
                                    <p className={"termekSzov w-100"}>Purple Fire - tee</p>
                                    <p className={"termekAr w-100"}>19.99€</p>
                                    <div className={"d-flex flex-row productDesc"}>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconMat"}></img>
                                            <p className={"productMat"}>100% cotton</p>
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconGsm"}></img>
                                            <p className={"productMat"}>180 GSM</p>
                                        </div>
                                    </div>
                                </div>
                                <button className={"productButton"}>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*NewArrivals*/}
                <div className={"newArrivals"}>
                    <p>NEW ARRIVALS</p>
                    <div className={"row newArrivalsProd"}>
                        <div className={"col-6 col-lg-3"}>
                            <div className={"d-flex flex-column align-items-start product w-100"}>
                                <img className={"termekKep"} alt={"termekKep"} src={dummy}></img>
                                <div className={"d-flex flex-column align-items-start w-100"}>
                                    <p className={"termekSzov"}>Purple Fire - tee</p>
                                    <p className={"termekAr"}>19.99€</p>
                                    <div className={"d-flex flex-row productDesc"}>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconMat"}></img>
                                            <p className={"productMat"}>100% cotton</p>
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconGsm"}></img>
                                            <p className={"productMat"}>180 GSM</p>
                                        </div>
                                    </div>
                                </div>
                                <button className={"productButton"}>BUY NOW</button>
                            </div>
                        </div>
                        <div className={"col-6 col-lg-3"}>
                            <div className={"d-flex flex-column align-items-start product w-100"}>
                                <img className={"termekKep"} alt={"termekKep"} src={dummy}></img>
                                <div className={"d-flex flex-column align-items-start w-100"}>
                                    <p className={"termekSzov"}>Purple Fire - tee</p>
                                    <p className={"termekAr"}>19.99€</p>
                                    <div className={"d-flex flex-row productDesc"}>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconMat"}></img>
                                            <p className={"productMat"}>100% cotton</p>
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconGsm"}></img>
                                            <p className={"productMat"}>180 GSM</p>
                                        </div>
                                    </div>
                                </div>
                                <button className={"productButton"}>BUY NOW</button>
                            </div>
                        </div>
                        <div className={"col-6 col-lg-3 mt-4 mt-sm-0"}>
                            <div className={"d-flex flex-column align-items-start product w-100"}>
                                <img className={"termekKep"} alt={"termekKep"} src={dummy}></img>
                                <div className={"d-flex flex-column align-items-start w-100"}>
                                    <p className={"termekSzov"}>Purple Fire - tee</p>
                                    <p className={"termekAr"}>19.99€</p>
                                    <div className={"d-flex flex-row productDesc"}>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconMat"}></img>
                                            <p className={"productMat"}>100% cotton</p>
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconGsm"}></img>
                                            <p className={"productMat"}>180 GSM</p>
                                        </div>
                                    </div>
                                </div>
                                <button className={"productButton"}>BUY NOW</button>
                            </div>
                        </div>
                        <div className={"col-6 col-lg-3 mt-4 mt-sm-0"}>
                            <div className={"d-flex flex-column align-items-start product w-100"}>
                                <img className={"termekKep"} alt={"termekKep"} src={dummy}></img>
                                <div className={"d-flex flex-column align-items-start w-100"}>
                                    <p className={"termekSzov"}>Purple Fire - tee</p>
                                    <p className={"termekAr"}>19.99€</p>
                                    <div className={"d-flex flex-row productDesc"}>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconMat"}></img>
                                            <p className={"productMat"}>100% cotton</p>
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"productIconGsm"}></img>
                                            <p className={"productMat"}>180 GSM</p>
                                        </div>
                                    </div>
                                </div>
                                <button className={"productButton"}>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*UpcomingDrops*/}
                <div className={"upcomingDrops"}>
                    <p>UPCOMING DROPS</p>
                    <img className="d-block w-100" src={upcoming} alt={"Upcoming Drop Image"}/>
                    <div className={"d-flex flex-row w-100 upcomingMain"}>
                        <div className={"col-3 upcomingImage"}>
                            <img className={"w-100"} src={dummy} alt={"Upcoming Shirt Image"}/>
                        </div>
                        <div className={"col-9"}>
                            <div className={"d-flex flex-column align-items-start justify-content-between upcomingText h-100"}>
                                <p className={"upcomingTextTitle"}>The land of the rising sun</p>
                                <p className={"upcomingTextDesc text-start"}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Pellentesque nec tellus malesuada, mattis neque quis, ullamcorper est. Cras justo
                                    tortor, finibus sit amet ex et, egestas dignissim ipsum. Quisque pulvinar luctus
                                    diam.
                                    Mauris gravida leo ut tortor auctor, luctus pretium velit interdum. Duis eget sapien
                                    sed
                                    metus sollicitudin consequat at vel lacus. Quisque sagittis odio ut posuere
                                    venenatis.
                                    Aenean non gravida nisi, et accumsan turpis.</p>
                                <div className={"upcomingIcons"}>
                                    <div className={"d-flex flex-row gap-5"}>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"upcomingIconMat"}></img>
                                            <p className={"upcomingMat"}>100% cotton</p>
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"upcomingIconFit"}/>
                                            <p className={"upcomingFit"}>Classic Fit</p>
                                        </div>
                                    </div>
                                    <div className={"d-flex flex-row gap-5"}>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"upcomingTTS"}></img>
                                            <p className={"upcomingTTS"}>True to size</p>
                                        </div>
                                        <div className={"d-flex flex-row"}>
                                            <img className={"upcomingIconGsm"}></img>
                                            <p className={"upcomingMat"}>180 GSM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
