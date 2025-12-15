// index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Cấu hình CORS để cho phép Frontend (Vercel) gọi vào
app.use(cors()); 
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Dữ liệu giả (Sau này sẽ lấy từ Database)
const newsList = [
    {
      id: 1,
      title: "Đây là tin tức từ API sau lần commit",
      date: "15/12/2025",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
      summary: "Đây là dữ liệu được lấy từ API của bạn chứ không phải code cứng trong React nữa."
    },
    {
      id: 2,
      title: "Render và Vercel là bộ đôi hoàn hảo",
      date: "14/12/2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
      summary: "Kết hợp Frontend Vercel và Backend Render giúp tối ưu chi phí và hiệu năng."
    }
];

// API trang chủ
app.get('/', (req, res) => {
    res.send('Hello! News API is working!');
});

// API lấy danh sách tin tức
app.get('/api/news', (req, res) => {
    res.json(newsList);
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại port ${PORT}`);
});