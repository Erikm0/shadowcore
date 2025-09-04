import React from 'react';

const ProductCard = ({product, onClick}) => {
    return (<>
            <div className="d-flex flex-column align-items-start product w-100" onClick={() => onClick(product.name)}>
                <img className={"termekKep"} alt={"termekKep"} src={product.image_url}></img>
                <div className={"d-flex flex-column align-items-start"}>
                    <p className={"termekSzov w-100"}>{product.name}</p>
                    <p className={"termekAr w-100"}>{product.price}€</p>
                    <div className={"d-flex flex-row productDesc"}>
                        <div className={"d-flex flex-row"}>
                            <img className={"productIconMat"}></img>
                            <p className={"productMat"}>{product.material}</p>
                        </div>
                        <div className={"d-flex flex-row"}>
                            <img className={"productIconGsm"}></img>
                            <p className={"productMat"}>{product.GSM} GSM</p>
                        </div>
                    </div>
                </div>
                <button className={"productButton"}>BUY NOW</button>
            </div>
        </>
    );
};

export default ProductCard;