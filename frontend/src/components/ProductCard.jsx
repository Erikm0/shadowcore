import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="d-flex flex-column align-items-center product">
            <img className="termekKep" alt="termekKep" src={product.image} />
            <div className="d-flex flex-column align-items-start w-100">
                <p className="termekSzov">{product.name}</p>
                <p className="termekSzov termekAr">{product.price}</p>
                <div className="d-flex flex-row productDesc">
                    <div>
                        <img className="productIconMat" alt="material" />
                        <p className="termekSzov">{product.material}</p>
                    </div>
                    <div>
                        <img className="productIconGsm" alt="gsm" />
                        <p className="termekSzov">{product.gsm}</p>
                    </div>
                </div>
            </div>
            <button className="productButton">BUY NOW</button>
        </div>
    );
};

export default ProductCard;