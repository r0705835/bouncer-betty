import { GuildMember } from "discord.js"
import MemberModel from "./models/MemberModel";

export const manageMemberData = async (member: GuildMember) => {
    try {
        let targetMemberData = await MemberModel.findOne({ 'discordId': member.id, 'guildId': member.guild.id});
        if (!targetMemberData) {
            targetMemberData = await MemberModel.create({
                discordId: member.id,
                guildId: member.guild.id,
                username: member.user.username,
            });
            console.log("Added user " + member.user.username + " to the database.")
        }
    } catch (error) {
        console.error('Something went wrong with managing the activity of the user: ', error);
    }
}
