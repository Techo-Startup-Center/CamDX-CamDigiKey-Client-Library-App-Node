FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache git
WORKDIR /usr/src/app

COPY package.json ./
RUN yarn install

FROM base AS runner
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
EXPOSE 8000

CMD ["npm", "start"]
