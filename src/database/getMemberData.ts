import MemberModel from "./models/MemberModel";

export async function getMemberData(guildId: string){
    return await MemberModel.find({'guildId': guildId});
}
