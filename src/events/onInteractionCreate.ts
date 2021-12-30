import { ButtonInteraction, CommandInteraction, GuildMember, Interaction, Role } from "discord.js";
import { ExtendedClient } from "../model/ExtendedClient";

export const onInteractionCreate = async (client: ExtendedClient, interaction: Interaction) => {
    if (interaction.isButton()) {
        handleButtonInteraction(interaction as ButtonInteraction);

    } else if (interaction.isCommand) {
        handleCommandInteraction(client, interaction as CommandInteraction);
    } else {
        return;
    }
}

function handleButtonInteraction(interaction: ButtonInteraction): void {
    const buttonInteraction = interaction as ButtonInteraction;
    if (buttonInteraction.customId == "announcement_toggle") {
        try {
            announcementToggle(buttonInteraction);
        } catch (error) {
            console.log(error);
        }
    }
}

function handleCommandInteraction(client: ExtendedClient, interaction: CommandInteraction): Promise<void> {
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
