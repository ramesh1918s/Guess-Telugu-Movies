# =============================================================================
# Cinema Guess — Telugu Movie Quiz Game
# Production image: static assets served by Nginx (Alpine, small footprint).
# =============================================================================

FROM nginx:1.27-alpine

# Remove Nginx's default site content and config
RUN rm -rf /usr/share/nginx/html/* && \
    rm -f /etc/nginx/conf.d/default.conf

# Add a small non-root-friendly health endpoint and keep the container lightweight
RUN apk add --no-cache wget

# Custom Nginx config (gzip, cache headers, SPA-friendly single-page routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Game files
COPY index.html /usr/share/nginx/html/index.html
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY assets/ /usr/share/nginx/html/assets/

# Nginx listens on 80 inside the container; mapped to host 8080 via compose
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:80/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
