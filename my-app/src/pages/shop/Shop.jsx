// pages/shop/Shop.js

import React from "react";
import { PRODUCTS } from "../../products";
import "./shop.css";
import {Product} from "../../components/shop/Product";

export const Shop = () => {
    return (
        <div className="shop">
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
};
