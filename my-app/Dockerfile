# File: my-app/Dockerfile

# --- Giai đoạn 1: Build Code ---
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Lệnh này sẽ tạo ra thư mục 'dist'
RUN npm run build

# --- Giai đoạn 2: Chạy bằng Nginx ---
FROM nginx:alpine as production-stage
# Copy file đã build từ giai đoạn 1 sang thư mục của Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Copy file cấu hình (nếu cần, nhưng mặc định nginx vẫn chạy tốt)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]