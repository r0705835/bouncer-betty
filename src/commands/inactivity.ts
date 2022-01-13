import { CommandInteraction, MessageEmbed } from "discord.js";
import { getMemberData } from "../database/getMemberData";
import { MemberInt } from "../database/models/MemberModel";
import { CommandInt } from "../model/CommandInt";

export const inactivity: CommandInt = {
    name: "inactivity",
    description: "Returns a list of inactive users",
    run: async (interaction: CommandInteraction) => {
        await interaction.deferReply({
            ephemeral: true
        });
        const members: MemberInt[] = await getMemberData(interaction.guild.id);
        const messageEmbed = createMessage(members);
        await interaction.channel.send({
            embeds: [messageEmbed]
        });
        await interaction.editReply({
            content: "You should have received the activity."
        });
    }
}

function createMessage(members: MemberInt[]): MessageEmbed {
    const messageEmbed = new MessageEmbed()
            .setTitle("Member activity")
            .setColor("#fea5c3");
    let description = "";
    members.forEach(member => {
        description += member.tag + " lastActivity: " + member.lastActivity + "\n";
    });
        messageEmbed.setDescription(description);
        return messageEmbed;
}
