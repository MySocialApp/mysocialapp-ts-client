import {Model} from "./model";

export class UserStat extends Model {
    private _status: UserStatStatus;
    friend: number;

    set status(s: UserStatStatus) {
        this._status = new UserStatStatus(s, this.conf);
    }

    get status(): UserStatStatus {
        return this._status;
    }
}

export class UserStatStatus extends Model {
    state: UserState;
    last_connection_date: string;
}

export enum UserState {
    Disabled = 'DISABLED',
    Riding = 'RIDING',
    Unknown = 'UNKNOWN',
    Connected = 'CONNECTED',
    Away = 'AWAY',
    NotConnected = 'NOT_CONNECTED',
}