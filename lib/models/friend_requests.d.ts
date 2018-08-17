import { Model } from "./model";
import { User } from "./user";
export declare class FriendRequests extends Model {
    _incoming: User[];
    _outgoing: User[];
    incoming: User[];
    outgoing: User[];
}
