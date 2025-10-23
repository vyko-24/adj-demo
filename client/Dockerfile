# Etapa 1: Recursos
FROM node:20 AS build

WORKDIR /app

COPY package*json ./

RUN npm install

RUN npm run build

#Etapa 2: Imagen

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

cmd ["nginx", "-g", "daemon off;"]
