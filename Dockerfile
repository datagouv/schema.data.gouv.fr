FROM node:22 AS builder

RUN corepack enable && corepack prepare pnpm@latest-10 --activate

WORKDIR /app

COPY ./ /app

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN pnpm i
RUN echo "$(date)" && \
    export $(cat /app/*.env | xargs) && \
    pnpm run build

FROM nginx:alpine-slim

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /app/dist
