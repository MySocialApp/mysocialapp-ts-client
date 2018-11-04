import { Model } from "./model";
export declare class UserStat extends Model {
    private _status;
    friend: number;
    status: UserStatStatus;
}
export declare class UserStatStatus extends Model {
    state: UserState;
    last_connection_date: string;
}
export declare enum UserState {
    Disabled = "DISABLED",
    Riding = "RIDING",
    Unknown = "UNKNOWN",
    Connected = "CONNECTED",
    Away = "AWAY",
    NotConnected = "NOT_CONNECTED"
}
