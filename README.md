# Blink Jewelry Store - Trang web bán trang sức bạc

Một ứng dụng web React.js hiện đại cho cửa hàng trang sức bạc cao cấp với giao diện đẹp và trải nghiệm người dùng tuyệt vời.

## ✨ Tính năng

- 🏠 **Trang chủ**: Giới thiệu cửa hàng và sản phẩm nổi bật
- 📱 **Responsive Design**: Tương thích với mọi thiết bị
- 🛍️ **Danh sách sản phẩm**: Hiển thị trang sức bạc với bộ lọc và sắp xếp
- 🔍 **Chi tiết sản phẩm**: Xem thông tin chi tiết, hình ảnh và đánh giá
- 📞 **Trang liên hệ**: Form liên hệ và thông tin cửa hàng
- ℹ️ **Trang giới thiệu**: Thông tin về thương hiệu và đội ngũ
- 🎨 **Giao diện đẹp**: Thiết kế hiện đại với màu sắc hài hòa

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống

- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Các bước cài đặt

1. **Clone hoặc tải về dự án**

   ```bash
   # Nếu bạn có git
   git clone <repository-url>
   cd silver-jewelry-store

   # Hoặc giải nén file zip vào thư mục dự án
   ```

2. **Cài đặt dependencies**

   ```bash
   npm install
   ```

3. **Chạy ứng dụng**

   ```bash
   npm start
   ```

4. **Mở trình duyệt**
   - Truy cập: `http://localhost:3000`
   - Ứng dụng sẽ tự động reload khi bạn thay đổi code

## 📁 Cấu trúc dự án

```
silver-jewelry-store/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.js      # Header với navigation
│   │   ├── Header.css     # Styles cho Header
│   │   ├── Footer.js      # Footer
│   │   └── Footer.css     # Styles cho Footer
│   ├── pages/             # Các trang chính
│   │   ├── Home.js        # Trang chủ
│   │   ├── Home.css       # Styles cho Home
│   │   ├── Products.js    # Trang danh sách sản phẩm
│   │   ├── Products.css   # Styles cho Products
│   │   ├── ProductDetail.js # Trang chi tiết sản phẩm
│   │   ├── ProductDetail.css # Styles cho ProductDetail
│   │   ├── About.js       # Trang giới thiệu
│   │   ├── About.css      # Styles cho About
│   │   ├── Contact.js     # Trang liên hệ
│   │   └── Contact.css    # Styles cho Contact
│   ├── data/
│   │   └── products.js    # Dữ liệu mẫu sản phẩm
│   ├── App.js             # Component chính với routing
│   ├── App.css            # Styles toàn cục
│   ├── index.js           # Entry point
│   └── index.css          # Base styles
├── package.json           # Dependencies và scripts
└── README.md             # Hướng dẫn này
```

## 🛠️ Công nghệ sử dụng

- **React 18**: Framework JavaScript cho UI
- **React Router DOM**: Routing cho SPA
- **CSS3**: Styling với Flexbox và Grid
- **Google Fonts**: Font chữ đẹp (Playfair Display, Inter)
- **Unsplash Images**: Hình ảnh mẫu chất lượng cao

## 📱 Responsive Design

Ứng dụng được thiết kế responsive hoàn toàn:

- **Desktop**: Giao diện đầy đủ với grid layout
- **Tablet**: Tối ưu cho màn hình trung bình
- **Mobile**: Giao diện touch-friendly với menu hamburger

## 🎨 Thiết kế

- **Màu chủ đạo**: Xám đậm (#2c3e50) và vàng cam (#f39c12)
- **Typography**: Playfair Display cho tiêu đề, Inter cho nội dung
- **Layout**: Modern, clean với nhiều khoảng trắng
- **Animations**: Smooth transitions và hover effects

## 📊 Dữ liệu mẫu

Dự án bao gồm 6 sản phẩm trang sức bạc mẫu:

- Nhẫn bạc nữ hoàng hoa hồng
- Dây chuyền bạc mặt trăng
- Bông tai bạc hoa anh đào
- Vòng tay bạc xoắn ốc
- Nhẫn nam bạc cổ điển
- Dây chuyền bạc chuỗi hạt

## 🔧 Tùy chỉnh

### Thêm sản phẩm mới

Chỉnh sửa file `src/data/products.js` để thêm sản phẩm mới:

```javascript
{
  id: 7,
  name: "Tên sản phẩm",
  price: 1000000,
  originalPrice: 1200000,
  image: "URL_hình_ảnh",
  images: ["URL1", "URL2", "URL3"],
  description: "Mô tả sản phẩm",
  features: ["Đặc điểm 1", "Đặc điểm 2"],
  category: "Danh mục",
  inStock: true,
  rating: 4.8,
  reviews: 100
}
```

### Thay đổi màu sắc

Chỉnh sửa CSS variables trong các file CSS để thay đổi màu chủ đạo.

### Thêm trang mới

1. Tạo component trong `src/pages/`
2. Thêm route trong `src/App.js`
3. Thêm link navigation trong `src/components/Header.js`

## 🚀 Build cho production

```bash
npm run build
```

File build sẽ được tạo trong thư mục `build/` và sẵn sàng để deploy lên server.

## 📄 Scripts có sẵn

- `npm start`: Chạy ứng dụng ở chế độ development
- `npm run build`: Build ứng dụng cho production
- `npm test`: Chạy tests (nếu có)
- `npm run eject`: Eject từ Create React App (không khuyến khích)

## 🤝 Đóng góp

Nếu bạn muốn đóng góp vào dự án:

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## 📞 Liên hệ

- **Email**: info@blinkjewelry.com
- **Website**: www.blinkjewelry.com
- **Điện thoại**: 1900 1234

## 📝 License

Dự án này được phát hành dưới MIT License. Xem file LICENSE để biết thêm chi tiết.

---

**Lưu ý**: Đây là dự án demo với dữ liệu mẫu. Để sử dụng trong thực tế, bạn cần:

- Kết nối với database thực
- Implement backend API
- Thêm chức năng thanh toán
- Tích hợp quản lý đơn hàng
- Thêm authentication/authorization
