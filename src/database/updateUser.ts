import MemberModel from "./models/MemberModel";

export async function updateUser(discordId: string, updatedTag: string) {
    await MemberModel.updateMany({ 'discordId': discordId }, {tag: updatedTag});
}
