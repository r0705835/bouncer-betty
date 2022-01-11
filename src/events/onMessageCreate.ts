import { Message } from "discord.js";
import { manageMemberData } from "../database/manageMemberData";

export const onMessageCreate = async (message: Message) => {
    manageMemberData(message.member);
}
