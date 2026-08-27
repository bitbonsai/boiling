FROM busybox:1.37-musl@sha256:fc6dddc4c44b1bfe37f41cae8e67d1693828e8f42a91862816d7953e2c9d3f23 AS busybox

FROM scratch
COPY --from=busybox /bin/busybox /busybox
COPY --chown=65534:65534 index.html mobile.html deck.js ocean.js style.css httpd.conf healthz /www/
COPY --chown=65534:65534 assets /www/assets
COPY --chown=65534:65534 fonts /www/fonts
COPY --chown=65534:65534 vendor /www/vendor
USER 65534:65534
EXPOSE 8080
ENTRYPOINT ["/busybox", "httpd", "-f", "-p", "8080", "-h", "/www", "-c", "/www/httpd.conf"]