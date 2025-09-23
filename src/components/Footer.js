import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">💍</span>
              <span className="logo-text">Silver Jewelry</span>
            </div>
            <p className="footer-description">
              Chuyên cung cấp trang sức bạc cao cấp, được chế tác thủ công 
              với chất liệu nguyên chất và thiết kế độc đáo.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                📘
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                📺
              </a>
              <a href="#" className="social-link" aria-label="TikTok">
                🎵
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Liên kết nhanh</h3>
            <ul className="footer-links">
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/products">Sản phẩm</Link></li>
              <li><Link to="/about">Giới thiệu</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3>Danh mục sản phẩm</h3>
            <ul className="footer-links">
              <li><Link to="/products?category=Nhẫn">Nhẫn</Link></li>
              <li><Link to="/products?category=Dây chuyền">Dây chuyền</Link></li>
              <li><Link to="/products?category=Bông tai">Bông tai</Link></li>
              <li><Link to="/products?category=Vòng tay">Vòng tay</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Thông tin liên hệ</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Đường Trần Hưng Đạo, Q1, TP.HCM</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>1900 1234</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@silverjewelry.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Thứ 2 - Thứ 6: 8:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Đăng ký nhận tin tức</h3>
              <p>Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Nhập địa chỉ email của bạn"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Silver Jewelry Store. Tất cả quyền được bảo lưu.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Chính sách bảo mật</Link>
              <Link to="/terms">Điều khoản sử dụng</Link>
              <Link to="/shipping">Chính sách giao hàng</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
