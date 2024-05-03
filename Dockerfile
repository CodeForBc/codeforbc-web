FROM node:20.12.2-alpine3.19 as base

EXPOSE 3000

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

ENV NODE_ENV production
CMD ["npm", "run", "startProduction"]
