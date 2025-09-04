import { useState, useEffect } from 'react';
import './App.css';
import banner from "./assets/test_banner.png";
import dummy from "./assets/ln_s_002_024_2.png";
import upcoming from "./assets/Lart_de_vivre.png";
import Navbar from "./components/Navbar.jsx";
import ProductCard from './components/ProductCard.jsx';
import ProductDetail from './components/ProductDetail.jsx';

function App() {
    const [bestSellers, setBestSellers] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/products')
            .then(res => res.json())
            .then(data => setBestSellers(data))
            .catch(err => console.error(err));

        fetch('http://localhost:8000/api/products')
            .then(res => res.json())
            .then(data => setNewArrivals(data))
            .catch(err => console.error(err));
    }, []);

    const handleProductClick = (name) => {
        fetch(`http://localhost:8000/api/product/name/${encodeURIComponent(name)}`)
            .then(res => res.json())
            .then(data => setSelectedProduct(data))
            .catch(err => console.error(err));
    };

    const renderProducts = (products) => (
        products.map((product, index) => {
            const ketto = index >= products.length - 2;
            return (
                <div key={index} className={`col-6 col-lg-3 ${ketto ? "mt-4 mt-sm-0" : ""}`}>
                    <ProductCard product={product} onClick={handleProductClick} />
                </div>
            )
        })
    );

    return (
        <>
            <Navbar/>

            {/* Carousel */}
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
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`carousel-item ${i === 1 ? 'active' : ''}`}>
                            <img src={banner} className="d-block w-100" alt={`banner_${i}`}/>
                        </div>
                    ))}
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

            {/* Products */}
            <div className="productBody">

                {/* Best Sellers */}
                <div className="bestSellers">
                    <p>BEST SELLERS</p>
                    <div className="row bestSellersProd">
                        {bestSellers.length ? renderProducts(bestSellers.slice(0, 4)) : <p>Loading...</p>}
                    </div>
                </div>

                {/* New Arrivals */}
                <div className="newArrivals">
                    <p>NEW ARRIVALS</p>
                    <div className="row newArrivalsProd">
                        {newArrivals.length ? renderProducts(newArrivals.slice(0, 4)) : <p>Loading...</p>}
                    </div>
                </div>

                {/* Részletes termékadatok csak ha rákattintottunk */}
                <ProductDetail
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />

                {/* Upcoming Drops */}
                <div className="upcomingDrops">
                    <p>UPCOMING DROPS</p>
                    <img className="d-block w-100" src={upcoming} alt="Upcoming Drop Image"/>
                    <div className="d-flex flex-row w-100 upcomingMain">
                        <div className="col-3 upcomingImage">
                            <img className="w-100" src={dummy} alt="Upcoming Shirt Image"/>
                        </div>
                        <div className="col-9">
                            <div className="d-flex flex-column align-items-start justify-content-between upcomingText h-100">
                                <p className="upcomingTextTitle">The land of the rising sun</p>
                                <p className="upcomingTextDesc text-start">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec tellus
                                    malesuada, mattis neque quis, ullamcorper est...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default App;
