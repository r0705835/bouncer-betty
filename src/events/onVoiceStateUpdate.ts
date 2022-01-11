import { VoiceState } from "discord.js";
import { manageMemberData } from "../database/manageMemberData";

export const onVoiceStateUpdate = async(oldState: VoiceState, newState: VoiceState) => {
    manageMemberData(newState.member);
}
