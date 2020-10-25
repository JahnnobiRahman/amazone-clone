import React from 'react';
import "./Product.css";
import StarRating from "./StarRating";



function Product() {
    return (
        <div className = "product">
            <div className="product__info">
                <p> The Lean Startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>
                        <StarRating />
                    </p>
                </div>     

            </div>

            <img 
                src="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
                
                alt=""
            />

            <button> Add to Basket </button>
        </div>
    )
}

export default Product
