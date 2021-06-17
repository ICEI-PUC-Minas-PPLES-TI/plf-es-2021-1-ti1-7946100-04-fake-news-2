FROM nginx:1.19
WORKDIR /usr/share/nginx/html/
COPY ./Codigo/src/ /usr/share/nginx/html/