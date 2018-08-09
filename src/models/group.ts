import {BaseWall} from "./base_wall";
import {Photo} from "./photo";
import {CustomField} from "./custom_field";
import {GroupMember} from "./group_member";
import {GroupMemberAccessControl} from "./group_member_access_control";

export class Group extends BaseWall {
    private _location: Location;
    private _profile_photo: Photo;
    private _profile_cover_photo: Photo;
    private _members: GroupMember[];


    name: string;
    description: string;
    open: boolean;
    member: boolean;
    approvable: boolean;
    distance_in_meters: number;
    total_members: number;
    group_member_access_control: GroupMemberAccessControl;
    custom_fields: CustomField[];
}