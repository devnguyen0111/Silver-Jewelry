import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic gửi form sẽ được implement sau
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="page-title">Liên hệ với chúng tôi</h1>
          <p className="page-subtitle">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Thông tin liên hệ</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Địa chỉ</h3>
                  <p>
                    123 Đường Trần Hưng Đạo<br />
                    Quận 1, TP. Hồ Chí Minh<br />
                    Việt Nam
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Điện thoại</h3>
                  <p>
                    Hotline: 1900 1234<br />
                    Di động: 0987 654 321<br />
                    Fax: (028) 1234 5678
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>
                    info@silverjewelry.com<br />
                    sales@silverjewelry.com<br />
                    support@silverjewelry.com
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-details">
                  <h3>Giờ làm việc</h3>
                  <p>
                    Thứ 2 - Thứ 6: 8:00 - 18:00<br />
                    Thứ 7: 8:00 - 12:00<br />
                    Chủ nhật: Nghỉ
                  </p>
                </div>
              </div>

              <div className="social-links">
                <h3>Theo dõi chúng tôi</h3>
                <div className="social-buttons">
                  <a href="#" className="social-btn facebook">
                    📘 Facebook
                  </a>
                  <a href="#" className="social-btn instagram">
                    📷 Instagram
                  </a>
                  <a href="#" className="social-btn youtube">
                    📺 YouTube
                  </a>
                  <a href="#" className="social-btn tiktok">
                    🎵 TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Gửi tin nhắn cho chúng tôi</h2>
              <p className="form-description">
                Hãy điền thông tin vào form bên dưới và chúng tôi sẽ liên hệ lại với bạn 
                trong thời gian sớm nhất.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Họ và tên *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Số điện thoại</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Chủ đề</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="inquiry">Tư vấn sản phẩm</option>
                      <option value="order">Đặt hàng</option>
                      <option value="warranty">Bảo hành</option>
                      <option value="complaint">Khiếu nại</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tin nhắn *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Nhập tin nhắn của bạn..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h2>Vị trí cửa hàng</h2>
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <h3>Bản đồ cửa hàng</h3>
                <p>
                  123 Đường Trần Hưng Đạo, Quận 1, TP. Hồ Chí Minh<br />
                  <strong>Chỉ đường:</strong> Từ Bến Thành đi thẳng 500m, rẽ trái vào đường Trần Hưng Đạo
                </p>
                <button className="btn btn-outline">
                  Xem trên Google Maps
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2>Câu hỏi thường gặp</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Làm thế nào để đặt hàng?</h3>
                <p>
                  Bạn có thể đặt hàng trực tiếp tại cửa hàng, qua website hoặc gọi hotline. 
                  Chúng tôi hỗ trợ thanh toán bằng tiền mặt, chuyển khoản và thẻ tín dụng.
                </p>
              </div>
              <div className="faq-item">
                <h3>Thời gian giao hàng là bao lâu?</h3>
                <p>
                  Đối với sản phẩm có sẵn: 1-2 ngày làm việc.<br />
                  Đối với sản phẩm đặt làm: 7-14 ngày làm việc.
                </p>
              </div>
              <div className="faq-item">
                <h3>Chính sách bảo hành như thế nào?</h3>
                <p>
                  Chúng tôi bảo hành 12-24 tháng cho mọi sản phẩm. Hỗ trợ bảo dưỡng và 
                  sửa chữa miễn phí trong thời gian bảo hành.
                </p>
              </div>
              <div className="faq-item">
                <h3>Có thể đổi trả sản phẩm không?</h3>
                <p>
                  Chúng tôi hỗ trợ đổi trả trong vòng 7 ngày kể từ ngày mua hàng, 
                  với điều kiện sản phẩm còn nguyên vẹn và có hóa đơn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
