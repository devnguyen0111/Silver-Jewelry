import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name, 'vi');
      }
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const formatOriginalPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const getDiscountPercentage = (originalPrice, currentPrice) => {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <h1 className="page-title">Sản phẩm</h1>
          <p className="page-subtitle">Khám phá bộ sưu tập trang sức bạc cao cấp của chúng tôi</p>
        </div>
      </div>

      <div className="products-content">
        <div className="container">
          {/* Filters and Sorting */}
          <div className="products-controls">
            <div className="category-filter">
              <h3>Danh mục</h3>
              <div className="category-buttons">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="sort-filter">
              <h3>Sắp xếp theo</h3>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="name">Tên A-Z</option>
                <option value="price-low">Giá thấp đến cao</option>
                <option value="price-high">Giá cao đến thấp</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`} className="product-link">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {product.originalPrice > product.price && (
                      <div className="discount-badge">
                        -{getDiscountPercentage(product.originalPrice, product.price)}%
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="out-of-stock-badge">
                        Hết hàng
                      </div>
                    )}
                  </div>
                  
                  <div className="product-info">
                    <div className="product-category">{product.category}</div>
                    <h3 className="product-name">{product.name}</h3>
                    
                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="rating-text">
                        {product.rating} ({product.reviews} đánh giá)
                      </span>
                    </div>

                    <div className="product-price">
                      <span className="current-price">{formatPrice(product.price)}</span>
                      {product.originalPrice > product.price && (
                        <span className="original-price">
                          {formatOriginalPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div className="product-features">
                      <div className="feature-item">
                        <span className="feature-icon">🛡️</span>
                        <span>Bảo hành 12-24 tháng</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">✨</span>
                        <span>Bạc 925 cao cấp</span>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="product-actions">
                  <button 
                    className={`btn btn-primary ${!product.inStock ? 'disabled' : ''}`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Thêm vào giỏ' : 'Hết hàng'}
                  </button>
                  <button className="btn btn-secondary">
                    💖
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No products message */}
          {filteredProducts.length === 0 && (
            <div className="no-products">
              <div className="no-products-icon">🔍</div>
              <h3>Không tìm thấy sản phẩm</h3>
              <p>Hãy thử thay đổi bộ lọc để tìm kiếm sản phẩm khác</p>
              <button 
                className="btn btn-primary"
                onClick={() => setSelectedCategory('all')}
              >
                Xem tất cả sản phẩm
              </button>
            </div>
          )}

          {/* Results count */}
          <div className="results-info">
            <p>Hiển thị {filteredProducts.length} sản phẩm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
