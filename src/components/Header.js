import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon">💍</span>
            <span className="logo-text">Blink Jewelry</span>
          </Link>

          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              to="/products"
              className={`nav-link ${isActive("/products") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sản phẩm
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Giới thiệu
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>
          </nav>

          {/* Action buttons
          <div className="header-actions">
            <button className="search-btn">
              <span>🔍</span>
            </button>
            <button className="cart-btn">
              <span>🛒</span>
              <span className="cart-count">0</span>
            </button>
          </div> */}

          {/* Mobile menu button */}
          <button
            className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
