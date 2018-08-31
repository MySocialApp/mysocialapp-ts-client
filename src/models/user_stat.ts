import {Model} from "./model";

export class UserStat extends Model {
    private status: UserStatus;
    private friend: number;
}

export enum UserStatus {
    Disabled = 'DISABLED',
    Riding = 'RIDING',
    Unknown = 'UNKNOWN',
    Connected = 'CONNECTED',
    Away = 'AWAY',
    NotConnected = 'NOT_CONNECTED',
}