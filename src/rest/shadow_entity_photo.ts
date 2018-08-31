import {Rest} from "./rest";
import {Feed} from "../models/feed";
import {Photo} from "../models/photo";
import {TagEntities} from "../models/tag_entities";
import {AccessControl} from "../models/access_control";
import {FileData} from "../models/file";
import {GenericFormData} from "../models/generic_form_data";

export class RestShadowEntityPhoto extends Rest {

    async list(id: string, page: number, size: number = 10): Promise<Photo[]> {
        let path = Rest.params("shadow/entity/{id}/photo?", {id: id}) + Rest.encodeQueryData({
            page: page,
            size: size
        });
        return this.conf.getList(new Feed(), path) as Promise<Photo[]>;
    }

    async create(id: string, photo: FileData, message?: string, accessControl?: AccessControl, tagEntities?: TagEntities): Promise<Feed> {
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
        return this.conf.postMultipart(new Feed(), Rest.params("/shadow/entity/{id}/photo", {id: id}), f) as Promise<Feed>;
    }
}