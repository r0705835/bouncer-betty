import { CommandInteraction } from "discord.js";
import { IntegerOptions } from "./IntegerOption";

export interface CommandInt {
    name: string;
    description: string;
    integerOptions?: IntegerOptions[];
    run: (interaction: CommandInteraction) => Promise<void>;
}
