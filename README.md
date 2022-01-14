# bouncer-betty

## Introduction

Bouncer Betty is a discord bot that keeps track of the activity of members in a server. it will deliver this information to the mod team and can kick inactive users.

## Usage guide

 Bouncing Betty isn't publicly available just yet.

## Running your own version of this bot

### Requirements

This application uses specific versions of certain modules and software. Unexpected behaviour can occur when using a different version.

- Node@17.1.0
- npm@8.1.2
- discord.js@13.3.1
- ts-node@10.4.0 installed globally

### Set-up instructions

You can run your own instance of Bouncer betty by following these steps.

1. Clone the repository: ``` git clone <https://github.com/r0705835/mimi.git> ```
2. Install the necessary dependencies ```npm install```
3. Build the application ```npm run build```
4. Set up your own bot application <https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot>
5. Create a .env file based on the .env_template and fill in the variables
6. Run the application ```npm start```
**.env value for local database:** mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000

### Docker

Docker containers can be created by executing the following commands.

- ```docker build -t bouncer-betty .```
- ```docker run -d bouncer-betty```

#### Using Dockerhub with server linux/arm/v7 as server platform

- ```docker buildx build --platform linux/arm/v7 -t bouncer-betty .```
- ```docker push [username]/bouncer-betty```
**env value for docker database:** mongodb://mongo:27017/bouncer-betty_mongodb

#### Move docker container by file

- On the host: ```docker save bouncer_betty -o bouncer_betty.tar```
- On the server after file transfer: ```docker load -i file.tar```

## Support

one day you'll be able to buy me a coffee!
