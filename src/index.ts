import { Intents } from "discord.js";
import { ExtendedClient } from "./model/ExtendedClient";
require("dotenv").config();

const client = new ExtendedClient([Intents.FLAGS.GUILDS]);

client.start();

client.once("ready", () => {
    console.log("Ready!");
});

client.login(process.env.botToken);
