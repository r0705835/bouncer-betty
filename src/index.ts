import { Intents } from "discord.js";
import { connectDatabase } from "./database/connectDatabase";
import { ExtendedClient } from "./model/ExtendedClient";
require("dotenv").config();

connectDatabase();
const client = new ExtendedClient([Intents.FLAGS.GUILDS]);

client.start();
