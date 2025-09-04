import React from "react";

const ProductDetail = ({product, onClose}) => {
    if (!product) return null;

    return (
        <div className="selectedProductDetail mt-5 p-3 border d-flex flex-row">
            <div>
                <h2>{product.name}</h2>
                <img src={product.image_url} alt={product.name}/>
            </div>
            <div>
                <p>Price: {product.price}€</p>
                <p>Material: {product.material}</p>
                <p>GSM: {product.GSM}</p>
                <p>Description: {product.description}</p>
                <button onClick={onClose} className="btn btn-secondary mt-2">
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
