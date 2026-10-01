FROM node:22 as builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest-11 --activate

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install

# Copy source files
COPY ./ /app

# The ~1800 pages rendered by vuepress exceed Node's default 4 GB heap
ENV NODE_OPTIONS="--openssl-legacy-provider --max-old-space-size=8192"

RUN echo "$(date)" && \
  export $(cat /app/*.env | xargs) && \
  pnpm run build

FROM nginx:alpine-slim

COPY --from=builder /app/dist /app/dist
