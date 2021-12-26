FROM node:17.1.0

# Create the bot's directory
RUN mkdir -p /usr/bot
WORKDIR /usr/bot

COPY /src /usr/bot
COPY package.json /usr/bot
COPY package-lock.json /usr/bot
COPY .env /usr/bot
COPY tsconfig.json /usr/bot
RUN npm install
RUN npm run build

# Start the bot.
CMD ["node", "./dist/index.js"]
