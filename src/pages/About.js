import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="about" role="main">
      <header className="about__hero">
        <div className="container">
          <h1 className="about__title">Về chúng tôi</h1>
          <p className="about__subtitle">
            Hành trình tạo nên những món trang sức bạc cao cấp và ý nghĩa
          </p>
        </div>
      </header>

      <section className="about__section">
        <div className="container">
          <div className="about__grid">
            <div className="about__text">
              <h2 className="about__heading2">Câu chuyện của chúng tôi</h2>
              <p>
                Blink Jewelry Store được thành lập vào năm 2013 với niềm đam mê
                về nghệ thuật chế tác trang sức bạc. Từ một xưởng nhỏ với vài
                nghệ nhân, chúng tôi đã trở thành thương hiệu uy tín trong lĩnh
                vực trang sức bạc cao cấp.
              </p>
              <p>
                Với triết lý "Tạo nên vẻ đẹp từ những điều đơn giản nhất", mỗi
                sản phẩm đều được chế tác thủ công tỉ mỉ, gửi gắm tình yêu nghề
                và tinh thần sáng tạo.
              </p>
            </div>
            <figure className="about__image">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&h=600&fit=crop&crop=center"
                alt="Trang sức bạc được chụp trên nền lá"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="about__section" aria-labelledby="team-heading">
        <div className="container">
          <h2 id="team-heading" className="about__heading">
            Đội ngũ của chúng tôi
          </h2>
          <div className="about__team">
            <article className="about__member">
              <div className="about__avatar">
                <img
                  src="https://cdn.devnguyen.xyz/images/av1.jpg?w=240&h=240&fit=crop&crop=face"
                  alt="Hoàng Ngọc Minh Thư"
                  loading="lazy"
                />
              </div>
              <h3>Hoàng Ngọc Minh Thư</h3>
              <p className="about__role">Giám đốc sáng tạo</p>
              <p className="about__bio">
                Lãnh đạo định hướng thiết kế, xây dựng ngôn ngữ thẩm mỹ và trải
                nghiệm thương hiệu nhất quán.
              </p>
            </article>

            <article className="about__member">
              <div className="about__avatar">
                <img
                  src="https://cdn.devnguyen.xyz/images/av2.jpg?w=240&h=240&fit=crop&crop=face"
                  alt="Nguyễn Phương Gia Nhi"
                  loading="lazy"
                />
              </div>
              <h3>Nguyễn Phương Gia Nhi</h3>
              <p className="about__role">Nghệ nhân chế tác</p>
              <p className="about__bio">
                Chuyên gia chế tác bạc 925 thủ công, am hiểu kỹ thuật đính đá và
                hoàn thiện bề mặt cao cấp.
              </p>
            </article>

            <article className="about__member">
              <div className="about__avatar">
                <img
                  src="https://cdn.devnguyen.xyz/images/av3.jpg?w=240&h=240&fit=crop&crop=face"
                  alt="Đoàn Thị Thu Trang"
                  loading="lazy"
                />
              </div>
              <h3>Đoàn Thị Thu Trang</h3>
              <p className="about__role">Nghệ nhân chế tác</p>
              <p className="about__bio">
                Tập trung vào chi tiết tinh xảo, tối ưu cấu trúc để đảm bảo độ
                bền và sự thoải mái khi sử dụng.
              </p>
            </article>

            <article className="about__member">
              <div className="about__avatar">
                <img
                  src="https://cdn.devnguyen.xyz/images/av4.jpg?w=240&h=240&fit=crop&crop=face"
                  alt="Trần Cẩm Ly"
                  loading="lazy"
                />
              </div>
              <h3>Trần Cẩm Ly</h3>
              <p className="about__role">Quản lý sản phẩm</p>
              <p className="about__bio">
                Quản trị vòng đời sản phẩm; phối hợp thiết kế, sản xuất và QA
                nhằm duy trì tiêu chuẩn chất lượng nghiêm ngặt.
              </p>
            </article>

            <article className="about__member">
              <div className="about__avatar">
                <img
                  src="https://cdn.devnguyen.xyz/images/av5.jpg?w=240&h=240&fit=crop&crop=face"
                  alt="Phan Ngọc Ánh"
                  loading="lazy"
                />
              </div>
              <h3>Phan Ngọc Ánh</h3>
              <p className="about__role">Quản lý kinh doanh</p>
              <p className="about__bio">
                Phụ trách chiến lược kinh doanh và quan hệ đối tác, thúc đẩy
                tăng trưởng doanh thu bền vững.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about__section about__section--muted">
        <div className="container">
          <h2 className="about__heading">Giá trị cốt lõi</h2>
          <div className="about__values">
            <article className="about__card">
              <div className="about__icon" aria-hidden>
                ✨
              </div>
              <h3>Chất lượng cao cấp</h3>
              <p>
                Bạc 925 chuẩn, kiểm định nghiêm ngặt, bền đẹp theo thời gian.
              </p>
            </article>
            <article className="about__card">
              <div className="about__icon" aria-hidden>
                🎨
              </div>
              <h3>Thiết kế độc đáo</h3>
              <p>
                Kết hợp tinh tế giữa truyền thống và hiện đại, mang dấu ấn
                riêng.
              </p>
            </article>
            <article className="about__card">
              <div className="about__icon" aria-hidden>
                🛡️
              </div>
              <h3>Cam kết bảo hành</h3>
              <p>
                Bảo hành 12–24 tháng, hỗ trợ làm sạch và bảo dưỡng miễn phí.
              </p>
            </article>
            <article className="about__card">
              <div className="about__icon" aria-hidden>
                💝
              </div>
              <h3>Dịch vụ tận tâm</h3>
              <p>Đồng hành cùng khách hàng với trải nghiệm chuyên nghiệp.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about__section">
        <div className="container">
          <h2 className="about__heading">Sứ mệnh của chúng tôi</h2>
          <div className="about__grid">
            <div className="about__text">
              <p>
                Chúng tôi mang đến những món trang sức vừa đẹp vừa có ý nghĩa,
                là biểu tượng của tình yêu và kỷ niệm đặc biệt.
              </p>
              <p>
                Mỗi thiết kế được tạo nên bằng niềm đam mê, sự tỉ mỉ và sự tôn
                trọng dành cho nghệ thuật thủ công.
              </p>
            </div>
            <figure className="about__image">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&h=600&fit=crop&crop=center"
                alt="Dây chuyền bạc trong hộp quà"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
