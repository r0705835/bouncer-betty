import { BitFieldResolvable, Client, Collection, IntentsString } from "discord.js";
import { ping } from "../commands/ping";
import { onceReady } from "../events/onceReady";
import { onInteractionCreate } from "../events/onInteractionCreate";
import { CommandInt } from "./CommandInt";

export class ExtendedClient extends Client {
    commands: Collection<string, CommandInt> = new Collection();

    constructor(intents: BitFieldResolvable<IntentsString, number>) {
        super({
            intents: intents
        })
    }

    async start(): Promise<void> {
        this.addCommands();
        this.eventsListener();
        await this.login(process.env.botToken);
    }

    private addCommands(): void {
        this.commands.set(ping.name, ping);
    }

    private eventsListener(): void {
        this.once("ready", async () => onceReady(this));
        this.on("interactionCreate", async interaction => onInteractionCreate(this, interaction));
    }
}
