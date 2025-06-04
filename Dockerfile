# Based on the docker file from https://khromov.se/dockerizing-your-sveltekit-applications-a-practical-guide/
FROM node:24.1.0-alpine3.21 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:24.1.0-alpine3.21
WORKDIR /app
COPY --from=builder /app/build build/
COPY package.json .
ENV NODE_ENV=production
CMD [ "node", "build" ]


