import { Guild } from "discord.js";
import { manageMassMemberData } from "../database/manageMassMemberData";

export const onGuildCreate = async (guild: Guild) => {
    if(!guild.available) {
        console.error("The guild isn't available");
        return;
    }
    const members = await guild.members.fetch();
    manageMassMemberData(members);
    console.log("I have joined the guild " + guild.name);
}

