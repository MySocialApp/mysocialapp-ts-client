import {Model} from "./model";

export class UserStat extends Model {
    private _status: UserStatStatus;
    private _friend: UserStatFriend;
    private _follow: UserStatFollow;

    set status(s: UserStatStatus) {
        this._status = new UserStatStatus(s, this.conf);
    }

    get status(): UserStatStatus {
        return this._status;
    }

    set friend(f: UserStatFriend) {
        this._friend = new UserStatFriend(f, this.conf);
    }

    get friend(): UserStatFriend {
        return this._friend;
    }

    set follow(f: UserStatFollow) {
        this._follow = new UserStatFollow(f, this.conf);
    }

    get follow(): UserStatFollow {
        return this._follow;
    }
}

export class UserStatStatus extends Model {
    state: UserState;
    last_connection_date: string;
}

export class UserStatFriend extends Model {
    total: number;
}

export class UserStatFollow extends Model {
    total_following: number;
    total_followers: number;
}

export enum UserState {
    Disabled = 'DISABLED',
    Riding = 'RIDING',
    Unknown = 'UNKNOWN',
    Connected = 'CONNECTED',
    Away = 'AWAY',
    NotConnected = 'NOT_CONNECTED',
}