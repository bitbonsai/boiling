FROM docker.io/nginxinc/nginx-unprivileged:1.29-alpine@sha256:0c79d56aee561a1d81c63f00eee5fb5fe29279560cdc55e91425133104c7fbe6

COPY nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx index.html deck.js ocean.js style.css /usr/share/nginx/html/
COPY --chown=nginx:nginx assets /usr/share/nginx/html/assets
COPY --chown=nginx:nginx fonts /usr/share/nginx/html/fonts
COPY --chown=nginx:nginx vendor /usr/share/nginx/html/vendor

ENTRYPOINT []
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
