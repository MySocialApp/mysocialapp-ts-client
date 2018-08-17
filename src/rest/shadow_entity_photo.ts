import {Rest} from "./rest";
import {Feed} from "../models/feed";
import {Photo} from "../models/photo";
import {TagEntities} from "../models/tag_entities";
import {AccessControl} from "../models/access_control";

class RestShadowEntityPhoto extends Rest {

    async list(id: string, page: number, size: number = 10): Photo[] {
        let path = Rest.params("shadow/entity/{id}/photo?", {id: id}) + Rest.encodeQueryData({
            page: page,
            size: size
        });
        return this.conf.getList(new Feed(), path) as Promise<Photo[]>;
    }

    async create(id: string, photo: File, message?: string, accessControl?: AccessControl, tagEntities?: TagEntities): Feed {
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
        return this.conf.postMultipart(new Feed(), Rest.params("/shadow/entity/{id}/photo", {id: id}), f) as Promise<Feed>;
    }
}