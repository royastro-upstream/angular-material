FROM node:12.22-alpine3.14 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angularmaterial /usr/share/nginx/html