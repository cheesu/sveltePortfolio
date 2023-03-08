# Node.js 18 버전을 사용합니다.
FROM node:18 AS build

# 앱 디렉터리를 만듭니다.
WORKDIR /app

# 앱 소스 코드를 복사합니다.
COPY package*.json ./

# 앱 종속성 설치를 실행합니다.
RUN npm install

# 앱 소스 코드를 복사합니다.
COPY . .

# 앱을 빌드합니다.
RUN npm run build

# Nginx 이미지를 사용합니다.
FROM nginx:latest

# Nginx 설정 파일을 복사합니다.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 빌드된 앱을 Nginx에 복사합니다.
COPY --from=build /app/build /usr/share/nginx/html

# 컨테이너 시작 시 Nginx를 실행합니다.
CMD ["nginx", "-g", "daemon off;"]