# File: back/Dockerfile

# 1. Dùng môi trường Node.js nhẹ
FROM node:18-alpine

# 2. Tạo thư mục làm việc trong container
WORKDIR /app

# 3. Copy file package để cài thư viện trước (Tối ưu cache)
COPY package*.json ./

# 4. Cài đặt thư viện
RUN npm install

# 5. Copy toàn bộ code backend vào
COPY . .

# 6. Mở cổng 3000 (hoặc cổng bạn đang dùng trong index.js)
EXPOSE 3000

# 7. Lệnh chạy server
CMD ["node", "index.js"]