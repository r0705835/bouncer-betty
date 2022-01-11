import { CommandInteraction } from "discord.js";
import { getMemberData } from "../database/getMemberData";
import { CommandInt } from "../model/CommandInt";

export const inactivity: CommandInt = {
    name: "inactivity",
    description: "Returns a list of inactive users",
    run: async (interaction: CommandInteraction) => {
        await interaction.deferReply({
            ephemeral: true
        });
        const members = await getMemberData(interaction.guild.id);
        console.log(members);
        const names: string = members.map(member => member.tag).toString();
        await interaction.editReply({
            content: names
        });
    }
}

