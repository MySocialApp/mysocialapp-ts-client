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

export class RestGroup extends Rest {
    async list(page: number, limited?: boolean, size?: number, location?: SimpleLocation, params?: {}): Group[] {
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
               upperLatitude: number, upperLongitude: number): Group[] {
        let params = {
            lower_latitude: lowerLatitude,
            lower_longitude: lowerLongitude,
            upper_latitude: upperLatitude,
            upper_longitude: upperLongitude
        };
        return this.list(page, limited, size, undefined, params);
    }

    async get(id: string): Group {
        return this.conf.get(new Group(), "/group/" + id) as Promise<Group>;
    }

    async create(group: Group): Group {
        return this.conf.post(new Group(), "/group", group)as Promise<Group>;
    }

    async update(group: Group): Group {
        return this.conf.put(new Group(), "/group", group) as Promise<Group>;
    }

    async cancel(id: string): void {
        return this.conf.delete("/group/" + id);
    }

    async getCustomFields(): CustomField[] {
        return this.conf.getList(new CustomField(), "/group/customfield") as Promise<CustomField[]>;
    }

    async getGroupCustomFields(id: string): CustomField[] {
        return this.conf.getList(new CustomField(), Rest.params("/group/{id}/customfield", {id: id})) as Promise<CustomField[]>;
    }

    async getMembers(id: string): GroupMember[] {
        return this.conf.getList(new GroupMember(), Rest.params("/group/{id}/member", {id: id})) as Promise<GroupMember[]>;
    }

    async join(eventId: string): GroupMember {
        return this.conf.post(new GroupMember(), Rest.params("/group/{id}/member", {id: eventId}), new Empty()) as Promise<GroupMember>;
    }

    async leave(eventId: string): void {
        return this.conf.delete(Rest.params("/group/{id}/member", {id: eventId}));
    }

    async getPhotos(eventId: string, page?: number): Photo[] {
        let params = {page: page !== undefined ? page : 0};
        let path = Rest.params("/group/{id}/photo", {id: eventId}) + Rest.encodeQueryData(params);
        return this.conf.getList(new Photo(), path) as Promise<Photo[]>;
    }

    async createPhoto(eventId: string, photo: File, message?: string, accessControl?: AccessControl, tagEntities?: TagEntities): Feed {
        let f = new FormData();
        f.set("file", photo);
        if (message !== undefined) {
            f.set("message", message);
        }
        if (accessControl !== undefined) {
            f.set("access_control", accessControl)
        }
        if (tagEntities !== undefined) {
            f.set("tag_entities", tagEntities.toJson());
        }
        return this.conf.postMultipart(new Feed(), Rest.params("/group/{id}/photo", {id: eventId}), f) as Promise<Feed>;
    }

    async getProfilePhoto(eventId: string): Photo {
        return this.conf.get(new Photo(), Rest.params("/group/{id}/profile/photo", {id: eventId})) as Promise<Photo>;
    }

    async updateProfilePhoto(eventId: string, photo: File): Photo {
        let f = new FormData();
        f.set("file", photo);
        return this.conf.postMultipart(new Photo(), Rest.params("/group/{id}/profile/photo", {id: eventId}), f) as Promise<Photo>;

    }

    async getProfileCoverPhoto(eventId: string): Photo {
        return this.conf.get(new Photo(), Rest.params("/group/{id}/profile/cover/photo", {id: eventId})) as Promise<Photo>;
    }

    async updateProfileCoverPhoto(eventId: string, photo: File): Photo {
        let f = new FormData();
        f.set("file", photo);
        return this.conf.postMultipart(new Photo(), Rest.params("/group/{id}/profile/cover/photo", {id: eventId}), f) as Promise<Photo>;

    }
}