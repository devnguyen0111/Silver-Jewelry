import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Trang sức bạc cao cấp
              <span className="highlight"> cho mọi phong cách</span>
            </h1>
            <p className="hero-description">
              Khám phá bộ sưu tập trang sức bạc tinh xảo, được chế tác thủ công
              với chất liệu cao cấp và thiết kế độc đáo. Tạo nên vẻ đẹp riêng
              biệt cho bạn trong mọi dịp đặc biệt.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Khám phá ngay
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&crop=center"
              alt="Trang sức bạc cao cấp"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Tại sao chọn chúng tôi?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Chất lượng cao cấp</h3>
              <p>
                Sử dụng bạc 925 nguyên chất, được kiểm định chất lượng nghiêm
                ngặt
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Thiết kế độc đáo</h3>
              <p>
                Được thiết kế bởi các nghệ nhân giàu kinh nghiệm với phong cách
                hiện đại
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Chế tác thủ công</h3>
              <p>
                Mỗi sản phẩm được chế tác tỉ mỉ bằng tay với độ chính xác cao
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Bảo hành lâu dài</h3>
              <p>Cam kết bảo hành 12-24 tháng cho mọi sản phẩm</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Về chúng tôi</h2>
              <p className="about-description">
                Blink Jewelry Store được thành lập với niềm đam mê tạo ra những
                món trang sức bạc cao cấp, mang đến vẻ đẹp tinh tế và sang trọng
                cho người sử dụng. Với hơn 10 năm kinh nghiệm trong ngành trang
                sức, chúng tôi tự hào là địa chỉ uy tín cho những ai yêu thích
                vẻ đẹp của bạc.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Năm kinh nghiệm</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Khách hàng hài lòng</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Bạc nguyên chất</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                Tìm hiểu thêm về chúng tôi
              </Link>
            </div>
            <div className="about-image">
              <img
                src="https://cdn.devnguyen.xyz/images/nhan3.jpg?w=500&h=600&fit=crop&crop=center"
                alt="Cửa hàng trang sức bạc"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Sản phẩm nổi bật</h2>
          <div className="products-preview">
            <div className="product-preview">
              <img
                src="https://cdn.devnguyen.xyz/images/nhan2.jpg?w=400&h=400&fit=crop&crop=center"
                alt="Nhẫn bạc nữ hoàng hoa hồng"
              />
              <h3>Nhẫn bạc nữ hoàng hoa hồng</h3>
              <p className="price">250.000đ</p>
            </div>
            <div className="product-preview">
              <img
                src="https://cdn.devnguyen.xyz/images/daychuyen1.jpg?w=400&h=400&fit=crop&crop=center"
                alt="Dây chuyền bạc mặt trăng"
              />
              <h3>Dây chuyền bạc mặt trăng</h3>
              <p className="price">500.000đ</p>
            </div>
            <div className="product-preview">
              <img
                src="https://cdn.devnguyen.xyz/images/bongtai1.jpg?w=400&h=400&fit=crop&crop=center"
                alt="Bông tai bạc hoa anh đào"
              />
              <h3>Bông tai bạc hoa anh đào</h3>
              <p className="price">300.000đ</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/products" className="btn btn-primary">
              Xem tất cả sản phẩm
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Sẵn sàng tìm kiếm trang sức hoàn hảo?</h2>
            <p>
              Khám phá bộ sưu tập đa dạng của chúng tôi và tìm ra món trang sức
              phù hợp với phong cách của bạn
            </p>
            <Link to="/products" className="btn btn-white">
              Bắt đầu mua sắm
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
