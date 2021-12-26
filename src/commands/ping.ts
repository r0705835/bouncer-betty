import { CommandInteraction } from "discord.js";
import { CommandInt } from "../model/CommandInt";

export const ping: CommandInt = {
    name: "ping",
    description: "description",
    run: async (interaction: CommandInteraction) => {
        interaction.reply({
            content: "pong!",
            ephemeral: true
        })
    }
}
