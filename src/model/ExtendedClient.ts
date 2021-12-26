import { BitFieldResolvable, Client, Collection, Intents, IntentsString } from "discord.js";
import { CommandInt } from "./CommandInt";

export class ExtendedClient extends Client {
    commands: Collection<string, CommandInt> = new Collection();

    constructor(intents: BitFieldResolvable<IntentsString, number>) {
        super({
            intents: intents
        })
    }

    async start() {
        await this.login(process.env.botToken);
    }
}
