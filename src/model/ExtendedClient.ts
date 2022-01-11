import { BitFieldResolvable, Client, Collection, IntentsString } from "discord.js";
import { announcement } from "../commands/announcement";
import { ping } from "../commands/ping";
import { onceReady } from "../events/onceReady";
import { onInteractionCreate } from "../events/onInteractionCreate";
import { onMessageCreate } from "../events/onMessageCreate";
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
        this.commands.set(announcement.name, announcement);
    }

    private eventsListener(): void {
        this.once("ready", async () => onceReady(this));
        this.on("interactionCreate", async interaction => onInteractionCreate(this, interaction));
        this.on("messageCreate", async message => onMessageCreate(message));
    }
}
