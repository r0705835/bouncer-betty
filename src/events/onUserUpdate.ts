import { PartialUser, User } from "discord.js";
import { updateUser } from "../database/updateUser";

export async function onUserUpdate(oldUser: User | PartialUser, newUser: User) {
    console.log("a user has changed their info new name is" + newUser.username );
    if(oldUser.partial) {
        oldUser = await oldUser.fetch();
    }
    if(oldUser.tag === newUser.tag) {
        return;
    }
    updateUser(newUser.id, newUser.tag);
}
