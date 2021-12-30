import { CommandInteraction, MessageActionRow, MessageButton } from "discord.js";
import { CommandInt } from "../model/CommandInt";

export const announcement: CommandInt = {
    name: "announcement",
    description: "Sends an embed mesage with an interaction button.",
    run: async (interaction: CommandInteraction) => {
        const button = new MessageButton()
            .setCustomId("announcement_toggle")
            .setLabel("Toggle announcement role")
            .setStyle("PRIMARY");
        const actionRow = new MessageActionRow();
        actionRow.addComponents(button);
        interaction.channel.send({
            content: "test",
            components: [actionRow]
        });
        interaction.reply({
            content: "pong!",
            ephemeral: true
        });
    }
}
