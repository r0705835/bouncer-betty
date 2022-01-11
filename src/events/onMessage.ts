import { Message } from "discord.js";
import { manageMemberData } from "../database/manageMemberData";

export const onMessage = async (message: Message) => {
    manageMemberData(message.member);
}
