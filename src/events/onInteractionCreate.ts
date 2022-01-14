import { CommandInteraction, GuildMember, Interaction } from "discord.js";
import { manageMemberData } from "../database/manageMemberData";
import { ExtendedClient } from "../model/ExtendedClient";

export const onInteractionCreate = async (client: ExtendedClient, interaction: Interaction) => {
    if (interaction.member instanceof GuildMember) {
        manageMemberData(interaction.member);
    }
    try {
        if (interaction.isCommand) {
            handleCommandInteraction(client, interaction as CommandInteraction);
        } else {
            return;
        }
    } catch (error) {
        console.error(error);
    }
}

function handleCommandInteraction(client: ExtendedClient, interaction: CommandInteraction): void {
    const { commandName } = interaction;
    client.commands.get(commandName).run(interaction);
}
