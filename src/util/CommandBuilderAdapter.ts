import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInt } from "../model/CommandInt";

export class CommandBuilderAdapter {
    buildCommand(command: CommandInt): SlashCommandBuilder {
        const slashCommand = new SlashCommandBuilder();
        slashCommand.setName(command.name);
        slashCommand.setDescription(command.description);
        return slashCommand;
    }
}