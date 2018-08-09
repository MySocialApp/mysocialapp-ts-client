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
    list(page: number, limited?: boolean, size?: number, location?: SimpleLocation, params?: {}): Promise<Group[]> {
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

    listByZone(page: number, limited: boolean, size: number, lowerLatitude: number, lowerLongitude: number,
               upperLatitude: number, upperLongitude: number): Promise<Group[]> {
        let params = {
            lower_latitude: lowerLatitude,
            lower_longitude: lowerLongitude,
            upper_latitude: upperLatitude,
            upper_longitude: upperLongitude
        };
        return this.list(page, limited, size, undefined, params);
    }

    get(id: string): Promise<Group> {
        return this.conf.get(new Group(), "/group/" + id) as Promise<Group>;
    }

    create(group: Group): Promise<Group> {
        return this.conf.post(new Group(), "/group", group)as Promise<Group>;
    }

    update(group: Group): Promise<Group> {
        return this.conf.put(new Group(), "/group", group) as Promise<Group>;
    }

    cancel(id: string): Promise<void> {
        return this.conf.delete("/group/" + id);
    }

    getCustomFields(): Promise<CustomField[]> {
        return this.conf.getList(new CustomField(), "/group/customfield") as Promise<CustomField[]>;
    }

    getGroupCustomFields(id: string): Promise<CustomField[]> {
        return this.conf.getList(new CustomField(), Rest.params("/group/{id}/customfield", {id: id})) as Promise<CustomField[]>;
    }

    getMembers(id: string): Promise<GroupMember[]> {
        return this.conf.getList(new GroupMember(), Rest.params("/group/{id}/member", {id: id})) as Promise<GroupMember[]>;
    }

    join(eventId: string): Promise<GroupMember> {
        return this.conf.post(new GroupMember(), Rest.params("/group/{id}/member", {id: eventId}), new Empty()) as Promise<GroupMember>;
    }

    leave(eventId: string): Promise<void> {
        return this.conf.delete(Rest.params("/group/{id}/member", {id: eventId}));
    }

    getPhotos(eventId: string, page?: number): Promise<Photo[]> {
        let params = {page: page !== undefined ? page : 0};
        let path = Rest.params("/group/{id}/photo", {id: eventId}) + Rest.encodeQueryData(params);
        return this.conf.getList(new Photo(), path) as Promise<Photo[]>;
    }

    createPhoto(eventId: string, photo: File, message?: string, accessControl?: AccessControl, tagEntities?: TagEntities): Promise<Feed> {
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

    getProfilePhoto(eventId: string): Promise<Photo> {
        return this.conf.get(new Photo(), Rest.params("/group/{id}/profile/photo", {id: eventId})) as Promise<Photo>;
    }

    updateProfilePhoto(eventId: string, photo: File): Promise<Photo> {
        let f = new FormData();
        f.set("file", photo);
        return this.conf.postMultipart(new Photo(), Rest.params("/group/{id}/profile/photo", {id: eventId}), f) as Promise<Photo>;

    }

    getProfileCoverPhoto(eventId: string): Promise<Photo> {
        return this.conf.get(new Photo(), Rest.params("/group/{id}/profile/cover/photo", {id: eventId})) as Promise<Photo>;
    }

    updateProfileCoverPhoto(eventId: string, photo: File): Promise<Photo> {
        let f = new FormData();
        f.set("file", photo);
        return this.conf.postMultipart(new Photo(), Rest.params("/group/{id}/profile/cover/photo", {id: eventId}), f) as Promise<Photo>;

    }
}