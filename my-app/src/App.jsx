import { useState, useEffect } from "react";
import "./App.css";


function App() {
 // Khởi tạo danh sách tin tức rỗng
  const [newsList, setNewsList] = useState([]);

  // Gọi API từ Backend khi web vừa tải xong
  useEffect(() => {
    fetch('https://back-front-oss.onrender.com/api/news')
      .then(response => response.json())
      .then(data => {
        console.log("Dữ liệu tải về:", data);
        setNewsList(data); // Cập nhật dữ liệu vào giao diện
      })
      .catch(error => console.error("Lỗi tải dữ liệu:", error));
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">GIẢI TRÍ 365H</div>
          <nav className="nav">
            <a href="#">Sao</a>
            <a href="#">Phim ảnh</a>
            <a href="#">Âm nhạc</a>
            <a href="#">TV Show</a>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* Featured */}
        <section className="featured-section">
          <div className="featured-card">
            <img
              src="https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&q=80&w=1000"
              alt="Featured"
              className="featured-image"
            />
            <div className="featured-content">
              <span className="tag">HOT SHOWBIZ</span>
              <h1>Hé lộ hậu trường liveshow hoành tráng nhất năm</h1>
              <p>
                Sân khấu đầu tư hàng chục tỷ đồng cùng dàn nghệ sĩ đình đám...
              </p>
              <br />
              <a href="#" className="read-more">
                Đọc chi tiết →
              </a>
            </div>
          </div>
        </section>

        {/* News */}
        <h2>Tin giải trí mới nhất</h2>
        <div className="news-grid">
          {newsList.map((news) => (
            <article key={news.id} className="news-card">
              <img
                src={news.image}
                alt={news.title}
                className="card-image"
              />
              <div className="card-content">
                <div className="card-date">{news.date}</div>
                <h3 className="card-title">{news.title}</h3>
                <p>{news.summary}</p>
                <br />
                <a href="#" className="read-more">
                  Xem thêm →
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Giải Trí 24H – Tin tức sao, phim & âm nhạc</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
