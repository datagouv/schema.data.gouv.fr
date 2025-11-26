FROM node:21 as builder

WORKDIR /app

COPY ./ /app

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm ci
RUN echo "$(date)" && \
    export $(cat /app/*.env | xargs) && \
    npm run build

FROM nginx:alpine-slim

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /app/dist
