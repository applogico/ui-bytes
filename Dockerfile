FROM node:21-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apk add --no-cache python3 make g++

FROM base AS deps
WORKDIR /ui-bytes

ADD package.json pnpm-lock.yaml ./
RUN pnpm install

FROM base AS production-deps
WORKDIR /ui-bytes

COPY --from=deps /ui-bytes/node_modules /ui-bytes/node_modules
ADD package.json pnpm-lock.yaml ./
RUN pnpm prune --prod --ignore-scripts

FROM base AS build
ENV NODE_ENV production
WORKDIR /ui-bytes

COPY --from=deps /ui-bytes/node_modules /ui-bytes/node_modules

ADD . .
RUN pnpm run build

FROM base
WORKDIR /ui-bytes

COPY --from=production-deps /ui-bytes/node_modules /ui-bytes/node_modules
COPY --from=build /ui-bytes/build /ui-bytes/build
COPY --from=build /ui-bytes/public /ui-bytes/public
ADD . .

CMD ["npm", "start"]
