import { Message } from "discord.js";
import { manageMemberData } from "../database/manageMemberData";

export const onMessageCreate = async (message: Message) => {
    if(message.author.bot) { return; }
    manageMemberData(message.member);
}
