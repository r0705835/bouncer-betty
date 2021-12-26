import { Intents } from "discord.js";
import { ExtendedClient } from "./model/ExtendedClient";
require("dotenv").config();

const client = new ExtendedClient([Intents.FLAGS.GUILDS]);

client.start();
