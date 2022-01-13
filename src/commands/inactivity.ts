import { CommandInteraction, MessageEmbed, Util } from "discord.js";
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
        const messageEmbeds = createMessages(members);
        messageEmbeds.forEach(async embed => {
            await interaction.channel.send({
                embeds: [embed]
            });
        });
        await interaction.channel.send({
            embeds: messageEmbeds,
        });
        await interaction.editReply({
            content: "You should have received the activity."
        });
    }
}

function createMessages(members: MemberInt[]): MessageEmbed[] {
    const messageEmbeds: MessageEmbed[] = []
    let description = "";
    members.forEach(member => {
        description += member.tag + " lastActivity: " + member.lastActivity.toDateString() + "\n";
    });

    if (description.length > 6000) {
        let splitMessage = Util.splitMessage(description, { maxLength: 5000 });
        splitMessage.forEach(split => {
            const messageEmbed = new MessageEmbed()
                .setTitle("Member activity")
                .setColor("#fea5c3")
                .setDescription(split);
            messageEmbeds.push(messageEmbed);
        })
    } else {
        const messageEmbed = new MessageEmbed()
                .setTitle("Member activity")
                .setColor("#fea5c3")
                .setDescription(description);
            messageEmbeds.push(messageEmbed);
    }
    return messageEmbeds;
}
