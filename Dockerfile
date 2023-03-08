# Node.js 18 버전을 사용합니다.
FROM node:18

# 앱 디렉터리를 만듭니다.
WORKDIR /app

# 앱 소스 코드를 복사합니다.
COPY . .

# 앱 종속성 설치를 실행합니다.
RUN npm install

# 앱을 빌드합니다.
RUN npm run build


# Create a new image using Nginx
FROM nginx:latest

# Copy the built app from the first stage to the second stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# 앱 실행을 위한 명령어를 지정합니다.
#CMD ["npm", "run", "start", "--", "--host"]
#CMD [ "npm", "run", "build" ]

