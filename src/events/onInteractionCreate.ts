import { ButtonInteraction, CommandInteraction, GuildMember, Interaction, Role } from "discord.js";
import { ExtendedClient } from "../model/ExtendedClient";

export const onInteractionCreate = async (client: ExtendedClient, interaction: Interaction) => {
    try {
        if (interaction.isButton()) {
            handleButtonInteraction(interaction as ButtonInteraction);

        } else if (interaction.isCommand) {
            handleCommandInteraction(client, interaction as CommandInteraction);
        } else {
            return;
        }
    } catch (error) {
        console.error(error);
    }
}

function handleButtonInteraction(interaction: ButtonInteraction): void {
    const buttonInteraction = interaction as ButtonInteraction;
    if (buttonInteraction.customId == "announcement_toggle") {
        announcementToggle(buttonInteraction);
    }
}

function handleCommandInteraction(client: ExtendedClient, interaction: CommandInteraction): void {
    const { commandName } = interaction;
    client.commands.get(commandName).run(interaction);
}

async function announcementToggle(interaction: ButtonInteraction): Promise<void> {
    const member: GuildMember = interaction.member as GuildMember;
    const announcementRole: Role = member.roles.cache.find(role => role.name == "Announcement")
    if (announcementRole) {
        await member.roles.remove(announcementRole);
        await interaction.reply({
            content: "You will no longer receive announcements!",
            ephemeral: true
        })
    } else {
        const roleToAdd = member.guild.roles.cache.find(role => role.name == "Announcement");
        await member.roles.add(roleToAdd);
        await interaction.reply({
            content: "You will now receive announcements!",
            ephemeral: true
        })
    }
}
