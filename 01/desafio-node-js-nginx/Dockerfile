FROM node:18 as builder
WORKDIR /build
COPY package*.json .

RUN npm install

FROM node:18-slim
WORKDIR /app

RUN apt-get update && \
    apt-get install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.4/wait-for && \
    chmod +x /usr/bin/wait-for

COPY --from=builder /build/node_modules /app/node_modules
COPY . . 
ENTRYPOINT [ "./entrypoint.sh" ]
CMD ["node", "index.js"]