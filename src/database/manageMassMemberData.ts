import { Collection, GuildMember } from "discord.js";
import { getMemberData } from "./getMemberData";
import MemberModel from "./models/MemberModel";

export async function manageMassMemberData(members: Collection<string, GuildMember>) {
    const membersToAdd = [];
    const lastActivity = Date.now();
    const guildId = members.first().guild.id;
    const presentMembers = (await getMemberData(guildId)).map(presentMember => {
        return presentMember.discordId;
    });
    members.forEach(member => {
        if (!presentMembers.includes(member.id)) {
            const memberToAdd = new MemberModel({
                discordId: member.id,
                guildId: member.guild.id,
                username: member.user.username,
                tag: member.user.tag,
                lastActivity: lastActivity,
            });
            membersToAdd.push(memberToAdd);
        };

    });
    try {
        await MemberModel.insertMany(membersToAdd);
        console.log("Added users from guild " + members.first().guild.name + " to the database.");
    } catch (error) {
        console.log("Something went wrong adding users to the database.");
    }
}
