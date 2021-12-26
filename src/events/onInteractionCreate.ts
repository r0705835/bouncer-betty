import { Interaction } from "discord.js";
import { ExtendedClient } from "../model/ExtendedClient";

export const onInteractionCreate = async (client: ExtendedClient, interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    try {
        const { commandName } = interaction;
        client.commands.get(commandName).run(interaction);
    } catch (error) {
        console.log(error);
        return interaction.reply({
            content: "There was an error while executing this command!",
            ephemeral: true
        });
    }
}
