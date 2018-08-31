import { Group } from "./group";
import { GroupStatus } from "./group_status";
import { Model } from "./model";
import { User } from "./user";
export declare class GroupMember extends Model {
    created_date?: string;
    updated_date?: string;
    status?: GroupStatus;
    private _group?;
    private _user?;
    group: Group;
    user: User;
}
