import React from 'react';

import './Home.css';

import Product from "./Product";

function Home() {
    return (
        <div className = "home">
            <div className="home__container">
                <img
                    className = "home__image"
                    src="https://globalnews.ca/wp-content/uploads/2020/04/high-res-tvod-store-ca.png?w=1200"

                    alt=""
                />
              
                <div className="home__row">
                    <Product />

                </div>

                <div className="home__row">
                    
                </div>


                <div className="home__row">
                    
                </div>

            </div>
                
             
        </div>
    )
}

export default Home;
