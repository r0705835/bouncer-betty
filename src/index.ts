import { Intents } from "discord.js";
import { connectDatabase } from "./database/connectDatabase";
import { ExtendedClient } from "./model/ExtendedClient";
require("dotenv").config();

connectDatabase();
const client = new ExtendedClient([Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]);

client.start();
