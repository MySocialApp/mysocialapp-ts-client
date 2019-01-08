import { Model } from "./model";
import { User } from "./user";
export declare class Users extends Model {
    total?: number;
    _users?: User[];
    getJsonParameters(): {};
    users: User[];
}
