import { Model } from "./model";
export declare class UserStat extends Model {
    private status;
    private friend;
}
export declare enum UserStatus {
    Disabled = "DISABLED",
    Riding = "RIDING",
    Unknown = "UNKNOWN",
    Connected = "CONNECTED",
    Away = "AWAY",
    NotConnected = "NOT_CONNECTED"
}
