import { CommandInteraction } from "discord.js";

export interface CommandInt {
    name: string;
    description: string; 
    run: (interaction: CommandInteraction) => Promise<void>;
}
