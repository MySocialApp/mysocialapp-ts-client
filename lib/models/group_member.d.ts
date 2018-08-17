import { Group } from "./group";
import { GroupStatus } from "./group_status";
import { Model } from "./model";
export declare class GroupMember extends Model {
    created_string?: string;
    updated_date?: string;
    group?: Group;
    user?: Group;
    status?: GroupStatus;
}
