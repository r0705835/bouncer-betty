import MemberModel, { MemberInt } from "./models/MemberModel";

export async function getMemberData(guildId: string): Promise<MemberInt[]>{
    return await MemberModel.find({'guildId': guildId});
}
