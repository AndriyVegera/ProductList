import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import {Cart} from "../../pages/cart/Cart";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cartItemCount = cartItems[id];

    const handleAddToCart = () => {
        addToCart(id);
        setIsModalOpen(true);
    };

    return (
        <div className="product">
            <img src={productImage} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price}</p>
            </div>
            <button className="addToCartBttn" onClick={handleAddToCart}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>

            {isModalOpen && <Cart onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};
