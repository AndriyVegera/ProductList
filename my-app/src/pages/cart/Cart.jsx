import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { useNavigate } from "react-router-dom";

import "./cart.css";
import {CartItem} from "../../components/cart-item/Cart-item";

export const Cart = ({ onClose }) => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart-modal">
            <div className="cart">
                <button className="close-btn" onClick={onClose}>
                    X
                </button>
                <div>
                    <h1 class="empty-cart-message">Your Cart Items</h1>
                </div>
                <div className="cart-items">
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem key={product.id} data={product} />;
                        }
                    })}
                </div>

                {totalAmount > 0 ? (
                    <div className="checkout">
                        <p> Subtotal: ${totalAmount} </p>
                        <button onClick={() => navigate("/")}> Continue Shopping </button>
                        <button
                            onClick={() => {
                                checkout();
                                onClose(); // Закриття модального вікна при відправленні замовлення
                            }}
                        >
                            {" "}
                            Buy{" "}
                        </button>
                    </div>
                ) : (
                    <h1> Your Shopping Cart is Empty</h1>
                )}
            </div>
        </div>
    );
};
