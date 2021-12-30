import { CommandInteraction, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { CommandInt } from "../model/CommandInt";

export const announcement: CommandInt = {
    name: "announcement",
    description: "Sends an embed mesage with an interaction button.",
    run: async (interaction: CommandInteraction) => {
        const button = new MessageButton()
            .setCustomId("announcement_toggle")
            .setLabel("Toggle announcements")
            .setStyle("PRIMARY");

        const actionRow = new MessageActionRow();
        actionRow.addComponents(button);
        const messageEmbed = new MessageEmbed()
            .setTitle("Receive announcements!")
            .setColor("#fea5c3");
        messageEmbed.setDescription("@everyone this will be the last time we will tag everyone. From now on you can easily opt-in (or out) of notifications. Simply click the button below if you wish to receive them.")
        interaction.channel.send({
            embeds: [messageEmbed],
            components: [actionRow]
        });
        interaction.reply({
            content: "The message has been delivered!",
            ephemeral: true
        });
    }
}
