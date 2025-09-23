import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1 className="page-title">Về chúng tôi</h1>
          <p className="page-subtitle">
            Hành trình tạo nên những món trang sức bạc cao cấp và ý nghĩa
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          {/* Story Section */}
          <section className="story-section">
            <div className="story-content">
              <div className="story-text">
                <h2>Câu chuyện của chúng tôi</h2>
                <p>
                  Silver Jewelry Store được thành lập vào năm 2013 với niềm đam mê sâu sắc 
                  về nghệ thuật chế tác trang sức bạc. Từ một xưởng nhỏ với chỉ vài nghệ nhân, 
                  chúng tôi đã phát triển thành một thương hiệu uy tín trong lĩnh vực trang sức bạc cao cấp.
                </p>
                <p>
                  Với triết lý "Tạo nên vẻ đẹp từ những điều đơn giản nhất", chúng tôi tập trung 
                  vào việc chế tác những món trang sức tinh xảo, mang đậm tính nghệ thuật và ý nghĩa 
                  sâu sắc. Mỗi sản phẩm của chúng tôi đều được chế tác thủ công với sự tỉ mỉ và 
                  tình yêu nghề.
                </p>
              </div>
              <div className="story-image">
                <img 
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=400&fit=crop&crop=center" 
                  alt="Xưởng chế tác trang sức"
                />
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="values-section">
            <h2>Giá trị cốt lõi</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">✨</div>
                <h3>Chất lượng cao cấp</h3>
                <p>
                  Chúng tôi chỉ sử dụng bạc 925 nguyên chất, được kiểm định chất lượng 
                  nghiêm ngặt để đảm bảo độ bền và vẻ đẹp lâu dài.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎨</div>
                <h3>Thiết kế độc đáo</h3>
                <p>
                  Mỗi thiết kế đều được tạo ra bởi các nghệ nhân giàu kinh nghiệm, 
                  kết hợp giữa truyền thống và hiện đại.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🛡️</div>
                <h3>Cam kết bảo hành</h3>
                <p>
                  Chúng tôi cam kết bảo hành 12-24 tháng cho mọi sản phẩm và hỗ trợ 
                  bảo dưỡng miễn phí.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">💝</div>
                <h3>Dịch vụ tận tâm</h3>
                <p>
                  Đội ngũ nhân viên chuyên nghiệp, sẵn sàng tư vấn và hỗ trợ khách hàng 
                  trong mọi tình huống.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="team-section">
            <h2>Đội ngũ của chúng tôi</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                    alt="Nguyễn Văn Minh"
                  />
                </div>
                <h3>Nguyễn Văn Minh</h3>
                <p className="member-role">Giám đốc sáng tạo</p>
                <p className="member-bio">
                  Với 15 năm kinh nghiệm trong ngành trang sức, anh Minh là người 
                  dẫn dắt tầm nhìn nghệ thuật của thương hiệu.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" 
                    alt="Trần Thị Lan"
                  />
                </div>
                <h3>Trần Thị Lan</h3>
                <p className="member-role">Nghệ nhân chế tác</p>
                <p className="member-bio">
                  Chuyên gia chế tác với đôi tay vàng, chị Lan tạo nên những tác phẩm 
                  trang sức tinh xảo nhất.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                    alt="Lê Hoàng Nam"
                  />
                </div>
                <h3>Lê Hoàng Nam</h3>
                <p className="member-role">Quản lý chất lượng</p>
                <p className="member-bio">
                  Anh Nam đảm bảo mọi sản phẩm đều đạt tiêu chuẩn chất lượng cao nhất 
                  trước khi đến tay khách hàng.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Năm kinh nghiệm</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Khách hàng hài lòng</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2000+</div>
                <div className="stat-label">Sản phẩm đã chế tác</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Tỷ lệ hài lòng</div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mission-section">
            <div className="mission-content">
              <div className="mission-text">
                <h2>Sứ mệnh của chúng tôi</h2>
                <p>
                  Chúng tôi cam kết mang đến cho khách hàng những món trang sức bạc cao cấp, 
                  không chỉ đẹp về hình thức mà còn có ý nghĩa sâu sắc. Mỗi sản phẩm của chúng tôi 
                  đều được chế tác với tình yêu và sự tôn trọng dành cho nghệ thuật trang sức.
                </p>
                <p>
                  Chúng tôi tin rằng trang sức không chỉ là món đồ trang trí mà còn là biểu tượng 
                  của tình yêu, kỷ niệm và những khoảnh khắc đặc biệt trong cuộc sống.
                </p>
              </div>
              <div className="mission-image">
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=400&fit=crop&crop=center" 
                  alt="Sứ mệnh của chúng tôi"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
