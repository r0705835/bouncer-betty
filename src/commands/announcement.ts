import { CommandInteraction } from "discord.js";
import { CommandInt } from "../model/CommandInt";

export const announcement: CommandInt = {
    name: "announcement",
    description: "Sends an embed mesage with an interaction button.",
    run: async (interaction: CommandInteraction) => {
        interaction.reply({
            content: "pong!",
            ephemeral: true
        })
    }
}
