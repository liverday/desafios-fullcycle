FROM node:18 as builder
WORKDIR /build
COPY package*.json .

RUN npm install

FROM node:18
WORKDIR /app
COPY --from=builder /build/node_modules /app/node_modules

COPY . . 

CMD ["node", "index.js"]