import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(0);
    } else {
      navigate("/products");
    }
  }, [id, navigate]);

  if (!product) {
    return <div className="loading">Đang tải...</div>;
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const getDiscountPercentage = (originalPrice, currentPrice) => {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Logic thêm vào giỏ hàng sẽ được implement sau
    alert(`Đã thêm ${quantity} sản phẩm "${product.name}" vào giỏ hàng!`);
  };

  const handleBuyNow = () => {
    // Logic mua ngay sẽ được implement sau
    alert(
      `Chuyển đến trang thanh toán cho ${quantity} sản phẩm "${product.name}"!`
    );
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Trang chủ</Link>
          <span> / </span>
          <Link to="/products">Sản phẩm</Link>
          <span> / </span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-content">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
              {product.originalPrice > product.price && (
                <div className="discount-badge">
                  -{getDiscountPercentage(product.originalPrice, product.price)}
                  %
                </div>
              )}
            </div>

            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${
                    selectedImage === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-category">{product.category}</div>

            <h1 className="product-name">{product.name}</h1>

            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`star ${
                      i < Math.floor(product.rating) ? "filled" : ""
                    }`}
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
              <span className="current-price">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="original-price">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <div className="product-status">
              {product.inStock ? (
                <span className="in-stock">✅ Còn hàng</span>
              ) : (
                <span className="out-of-stock">❌ Hết hàng</span>
              )}
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="quantity-selector">
              <label>Số lượng:</label>
              <div className="quantity-controls">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>

            <div className="product-actions">
              <button
                className="btn btn-primary"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                🛒 Thêm vào giỏ hàng
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleBuyNow}
                disabled={!product.inStock}
              >
                Mua ngay
              </button>
              <button className="btn btn-outline">Yêu thích</button>
            </div>

            <div className="product-features">
              <h3>Đặc điểm nổi bật</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-icon">✨</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="product-tabs">
          <div className="tab-headers">
            <button
              className={`tab-header ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Mô tả sản phẩm
            </button>
            <button
              className={`tab-header ${
                activeTab === "features" ? "active" : ""
              }`}
              onClick={() => setActiveTab("features")}
            >
              Thông số kỹ thuật
            </button>
            <button
              className={`tab-header ${
                activeTab === "reviews" ? "active" : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Đánh giá ({product.reviews})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "description" && (
              <div className="tab-panel">
                <h3>Chi tiết sản phẩm</h3>
                <p>{product.description}</p>
                <p>
                  Sản phẩm được chế tác từ bạc cao cấp với quy trình kiểm định
                  nghiêm ngặt. Mỗi món trang sức đều được chăm sóc tỉ mỉ để đảm
                  bảo chất lượng tốt nhất cho khách hàng.
                </p>
                <p>
                  Chúng tôi cam kết mang đến những sản phẩm trang sức bạc đẹp
                  nhất, chất lượng cao nhất với giá cả hợp lý nhất thị trường.
                </p>
              </div>
            )}

            {activeTab === "features" && (
              <div className="tab-panel">
                <h3>Thông số kỹ thuật</h3>
                <div className="features-table">
                  {product.features.map((feature, index) => (
                    <div key={index} className="feature-row">
                      <span className="feature-label">
                        {feature.split(":")[0]}:
                      </span>
                      <span className="feature-value">
                        {feature.split(":")[1] || feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="tab-panel">
                <h3>Đánh giá khách hàng</h3>
                <div className="reviews-summary">
                  <div className="rating-overview">
                    <div className="rating-score">
                      <span className="score">{product.rating}</span>
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`star ${
                              i < Math.floor(product.rating) ? "filled" : ""
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p>Dựa trên {product.reviews} đánh giá</p>
                  </div>
                </div>

                <div className="sample-reviews">
                  <div className="review-item">
                    <div className="reviewer-info">
                      <span className="reviewer-name">Nguyễn Thị A</span>
                      <div className="review-rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="star filled">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="review-text">
                      "Sản phẩm rất đẹp, chất lượng tốt. Tôi rất hài lòng với
                      món trang sức này!"
                    </p>
                    <span className="review-date">2 ngày trước</span>
                  </div>

                  <div className="review-item">
                    <div className="reviewer-info">
                      <span className="reviewer-name">Trần Văn B</span>
                      <div className="review-rating">
                        {[...Array(4)].map((_, i) => (
                          <span key={i} className="star filled">
                            ★
                          </span>
                        ))}
                        <span className="star">★</span>
                      </div>
                    </div>
                    <p className="review-text">
                      "Thiết kế đẹp, giá cả hợp lý. Sẽ mua thêm sản phẩm khác."
                    </p>
                    <span className="review-date">1 tuần trước</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products">
          <h2>Sản phẩm liên quan</h2>
          <div className="related-grid">
            {products
              .filter(
                (p) => p.id !== product.id && p.category === product.category
              )
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="related-product"
                >
                  <img src={relatedProduct.image} alt={relatedProduct.name} />
                  <h3>{relatedProduct.name}</h3>
                  <p className="price">{formatPrice(relatedProduct.price)}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
