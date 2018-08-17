import { Rest } from "./rest";
import { SimpleLocation } from "../models/simple_location";
import { Group } from "../models/group";
import { CustomField } from "../models/custom_field";
import { Feed } from "../models/feed";
import { Photo } from "../models/photo";
import { TagEntities } from "../models/tag_entities";
import { AccessControl } from "../models/access_control";
import { GroupMember } from "../models/group_member";
export declare class RestGroup extends Rest {
    list(page: number, limited?: boolean, size?: number, location?: SimpleLocation, params?: {}): Promise<Group[]>;
    listByZone(page: number, limited: boolean, size: number, lowerLatitude: number, lowerLongitude: number, upperLatitude: number, upperLongitude: number): Promise<Group[]>;
    get(id: string): Promise<Group>;
    create(group: Group): Promise<Group>;
    update(group: Group): Promise<Group>;
    cancel(id: string): Promise<void>;
    getCustomFields(): Promise<CustomField[]>;
    getGroupCustomFields(id: string): Promise<CustomField[]>;
    getMembers(id: string): Promise<GroupMember[]>;
    join(eventId: string): Promise<GroupMember>;
    leave(eventId: string): Promise<void>;
    getPhotos(eventId: string, page?: number): Promise<Photo[]>;
    createPhoto(eventId: string, photo: File, message?: string, accessControl?: AccessControl, tagEntities?: TagEntities): Promise<Feed>;
    getProfilePhoto(eventId: string): Promise<Photo>;
    updateProfilePhoto(eventId: string, photo: File): Promise<Photo>;
    getProfileCoverPhoto(eventId: string): Promise<Photo>;
    updateProfileCoverPhoto(eventId: string, photo: File): Promise<Photo>;
}
