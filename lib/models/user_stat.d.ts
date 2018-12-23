import {Model} from "./model";

export declare class UserStat extends Model {
    private _status;
    private _friend;
    private _follow;
    status: UserStatStatus;
    friend: UserStatFriend;
    follow: UserStatFollow;
}
export declare class UserStatStatus extends Model {
    state: UserState;
    last_connection_date: string;
}
export declare class UserStatFriend extends Model {
    total: number;
}
export declare class UserStatFollow extends Model {
    total_following: number;
    total_followers: number;
}
export declare enum UserState {
    Disabled = "DISABLED",
    Riding = "RIDING",
    Unknown = "UNKNOWN",
    Connected = "CONNECTED",
    Away = "AWAY",
    NotConnected = "NOT_CONNECTED"
}
