import {Rest} from "./rest";
import {SimpleLocation} from "../models/simple_location";
import {Group} from "../models/group";
import {CustomField} from "../models/custom_field";
import {Feed} from "../models/feed";
import {Photo} from "../models/photo";
import {TagEntities} from "../models/tag_entities";
import {AccessControl} from "../models/access_control";
import {Empty} from "../models/empty";
import {GroupMember} from "../models/group_member";
import {FileData} from "../models/file";
import {GenericFormData} from "../models/generic_form_data";

export class RestGroup extends Rest {
    async list(page: number, limited?: boolean, size?: number, location?: SimpleLocation, params?: {}): Promise<Group[]> {
        params = params !== undefined ? params : {};
        params['page'] = page;
        params['limited'] = limited === true;
        params['size'] = size;
        if (location !== undefined) {
            params['latitude'] = location.latitude;
            params['longitude'] = location.longitude;
        }
        return this.conf.getList(new Group(), "/group?" + Rest.encodeQueryData(params)) as Promise<Group[]>;
    }

    async listByZone(page: number, limited: boolean, size: number, lowerLatitude: number, lowerLongitude: number,
                     upperLatitude: number, upperLongitude: number): Promise<Group[]> {
        let params = {
            lower_latitude: lowerLatitude,
            lower_longitude: lowerLongitude,
            upper_latitude: upperLatitude,
            upper_longitude: upperLongitude
        };
        return this.list(page, limited, size, undefined, params);
    }

    async get(id: string): Promise<Group> {
        return this.conf.get(new Group(), "/group/" + id) as Promise<Group>;
    }

    async create(group: Group): Promise<Group> {
        return this.conf.post(new Group(), "/group", group)as Promise<Group>;
    }

    async update(group: Group): Promise<Group> {
        return this.conf.put(new Group(), "/group/" + group.id, group) as Promise<Group>;
    }

    async getCustomFields(): Promise<CustomField[]> {
        return this.conf.getList(new CustomField(), "/group/customfield") as Promise<CustomField[]>;
    }

    async getGroupCustomFields(id: string): Promise<CustomField[]> {
        return this.conf.getList(new CustomField(), Rest.params("/group/{id}/customfield", {id: id})) as Promise<CustomField[]>;
    }

    async getMembers(id: string): Promise<GroupMember[]> {
        return this.conf.getList(new GroupMember(), Rest.params("/group/{id}/member", {id: id})) as Promise<GroupMember[]>;
    }

    async join(groupId: string): Promise<GroupMember> {
        return this.conf.post(new GroupMember(), Rest.params("/group/{id}/member", {id: groupId}), new Empty()) as Promise<GroupMember>;
    }

    async leave(groupId: string): Promise<void> {
        return this.conf.delete(Rest.params("/group/{id}/member", {id: groupId}));
    }

    async delete(groupId: string): Promise<void> {
        return this.conf.delete("/group/" + groupId);
    }

    async changeOwner(newOwnerId: string): Promise<Group> {
        return this.conf.put(new Group(), Rest.params("/group/{id}/owner", {id: newOwnerId}), new Group({owner: {id_str: newOwnerId}})) as Promise<Group>;
    }

    async getPhotos(eventId: string, page?: number): Promise<Photo[]> {
        let params = {page: page !== undefined ? page : 0};
        let path = Rest.params("/group/{id}/photo", {id: eventId}) + Rest.encodeQueryData(params);
        return this.conf.getList(new Photo(), path) as Promise<Photo[]>;
    }

    async createPhoto(eventId: string, photo: FileData, message?: string, accessControl?: AccessControl, tagEntities?: TagEntities, payload?: {}): Promise<Feed> {
        let f = new GenericFormData();
        f.set("file", photo.blob, 'image/png', "image.png");
        if (message !== undefined) {
            f.append("message", message);
        }
        if (accessControl !== undefined) {
            f.append("access_control", accessControl)
        }
        if (tagEntities !== undefined) {
            f.append("tag_entities", tagEntities.toJson());
        }
        if (payload !== undefined) {
            f.append('payload', payload);
        }
        return this.conf.postMultipart(new Feed(), Rest.params("/group/{id}/photo/base64", {id: eventId}), f) as Promise<Feed>;
    }

    async getProfilePhoto(eventId: string): Promise<Photo> {
        return this.conf.get(new Photo(), Rest.params("/group/{id}/profile/photo", {id: eventId})) as Promise<Photo>;
    }

    async updateProfilePhoto(eventId: string, photo: FileData): Promise<Photo> {
        let f = new GenericFormData();
        f.set("file", photo.blob, 'image/png', "image.png");
        return this.conf.postMultipart(new Photo(), Rest.params("/group/{id}/profile/photo/base64", {id: eventId}), f) as Promise<Photo>;

    }

    async getProfileCoverPhoto(eventId: string): Promise<Photo> {
        return this.conf.get(new Photo(), Rest.params("/group/{id}/profile/cover/photo", {id: eventId})) as Promise<Photo>;
    }

    async updateProfileCoverPhoto(eventId: string, photo: FileData): Promise<Photo> {
        let f = new GenericFormData();
        f.set("file", photo.blob, 'image/png', "image.png");
        return this.conf.postMultipart(new Photo(), Rest.params("/group/{id}/profile/cover/photo", {id: eventId}), f) as Promise<Photo>;

    }
}