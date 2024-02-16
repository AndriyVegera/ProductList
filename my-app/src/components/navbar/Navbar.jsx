import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { Cart } from "../../pages/cart/Cart"; // Додано імпорт компонента Cart

export const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false); // Стан для відображення/приховування модального вікна

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Shop</Link>
                <div onClick={() => setIsCartOpen(true)}> {/* Додано обробник кліку для відкриття модального вікна */}
                    <ShoppingCart size={32} />
                </div>
            </div>
            {/* Додано перевірку на відображення модального вікна */}
            {isCartOpen && (
                <div className="cart-modal">
                    <Cart onClose={() => setIsCartOpen(false)} /> {/* Додано передачу функції для закриття модального вікна */}
                </div>
            )}
        </div>
    );
};
