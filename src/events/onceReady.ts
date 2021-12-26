import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { ExtendedClient } from "../model/ExtendedClient";
import { CommandBuilderAdapter } from "../util/CommandBuilderAdapter";

export const onceReady = async (client: ExtendedClient) => {
    console.log("Ready!");
    registerCommands(client);
}

function registerCommands(client: ExtendedClient): void {
    const commandBuilder = new CommandBuilderAdapter();
    const commands = client.commands.map(command => commandBuilder.buildCommand(command));
    const rest = new REST({ version: "9" }).setToken(process.env.botToken);
    rest.put(Routes.applicationGuildCommands(process.env.clientId, process.env.guildId), {
        body: commands
    });
}
