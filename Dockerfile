FROM node:17 AS development
ENV NODE_ENV development

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm fetch
RUN pnpm install --offline

# add app
COPY . ./

# Expose port
EXPOSE 3000

# start app
CMD ["pnpm", "dev"]