import { ButtonInteraction, Interaction } from "discord.js";
import { ExtendedClient } from "../model/ExtendedClient";

export const onInteractionCreate = async (client: ExtendedClient, interaction: Interaction) => {
    if (interaction.isButton) {
        const buttonInteraction = interaction as ButtonInteraction;
        if (buttonInteraction.customId == "announcement_toggle") {
            announcementToggle(buttonInteraction)
        }
    }

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

function announcementToggle(interaction: ButtonInteraction): void {
    interaction
    interaction.reply({
        content: "You've done it!",
        ephemeral: true
    });
}
