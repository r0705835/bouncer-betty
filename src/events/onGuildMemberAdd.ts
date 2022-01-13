import { GuildMember } from "discord.js";
import { manageMemberData } from "../database/manageMemberData";

export async function onGuildMemberAdd(guildMember: GuildMember) {
    await manageMemberData(guildMember);
}
