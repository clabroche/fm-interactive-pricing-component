FROM alpine:3.11 as builder
RUN apk --no-cache add gcc g++ make python nodejs npm

WORKDIR /fm-interactive-pricing-component
COPY package-lock.json ./package-lock.json
COPY package.json ./package.json
RUN npm ci
COPY . .
RUN npm run build && rm -rf node_modules && npm ci --production

FROM alpine:3.11
RUN apk --no-cache add nodejs
WORKDIR /fm-interactive-pricing-component
RUN mkdir /fm-interactive-pricing-component/dist
COPY --from=builder /fm-interactive-pricing-component/node_modules ./node_modules
COPY --from=builder /fm-interactive-pricing-component/dist ./dist
COPY --from=builder /fm-interactive-pricing-component/server.js .

CMD ["node", "server"]
