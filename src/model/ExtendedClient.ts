import { BitFieldResolvable, Client, Collection, IntentsString } from "discord.js";
import { fill } from "../commands/fill";
import { inactivity } from "../commands/inactivity";
import { ping } from "../commands/ping";
import { onceReady } from "../events/onceReady";
import { onGuildCreate } from "../events/onGuildCreate";
import { onGuildMemberAdd } from "../events/onGuildMemberAdd";
import { onInteractionCreate } from "../events/onInteractionCreate";
import { onMessageCreate } from "../events/onMessageCreate";
import { onUserUpdate } from "../events/onUserUpdate";
import { onVoiceStateUpdate } from "../events/onVoiceStateUpdate";
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
        this.commands.set(inactivity.name, inactivity);
        this.commands.set(fill.name, fill);
    }

    private eventsListener(): void {
        this.once("ready", async () => onceReady(this));
        this.on("interactionCreate", async interaction => onInteractionCreate(this, interaction));
        this.on("messageCreate", async message => onMessageCreate(message));
        this.on("voiceStateUpdate", async (oldState, newState) => onVoiceStateUpdate(oldState, newState));
        this.on("guildCreate", async (guild) => onGuildCreate(guild));
        this.on("guildMemberAdd", async (guildMember) => onGuildMemberAdd(guildMember));
        this.on("userUpdate", async (oldUser, newUser) => onUserUpdate(oldUser, newUser));
    }
}
