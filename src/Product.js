import React from 'react';
import "./Product.css";
import StarRating from "./StarRating";



function Product({ id, title, image, price }) {
    return (
        <div className = "product">
            <div className="product__info">
                <p> {title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <p>
                        <StarRating />
                    </p>
                </div>     

            </div>

            <img 
                src={image}
                
                alt=""
            />

            <button> Add to Basket </button>
        </div>
    )
}

export default Product;
