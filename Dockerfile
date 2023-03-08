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
CMD ["npm", "run", "start", "--", "--host"]
