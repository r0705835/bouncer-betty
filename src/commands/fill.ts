import { CommandInteraction } from "discord.js";
import { manageMassMemberData } from "../database/manageMassMemberData";
import { CommandInt } from "../model/CommandInt";

export const fill: CommandInt = {
    name: "fill",
    description: "Adds missing members to the database.",
    run: async (interaction: CommandInteraction) => {
        await interaction.deferReply({
            ephemeral: true
        });
        const members = await interaction.guild.members.fetch();
        manageMassMemberData(members);

        await interaction.editReply({
            content: "Missing members have been added to the database."
        });
    }
}
