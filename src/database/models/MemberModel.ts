import { Document, model, Schema } from "mongoose";

export interface MemberInt extends Document {
    discordId: string;
    guildId: string;
    username: string;
    tag: string;
    lastActivity: Date;
};

export const Member = new Schema({
    discordId: String,
    guildId: String,
    username: String,
    tag: String,
    lastActivity: Date,
});

export default model<MemberInt>("member", Member);
