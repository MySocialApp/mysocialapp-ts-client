import {Rest} from "./rest";
import {Photo} from "../models/photo";

export class RestShadowEntityProfileCoverPhoto extends Rest {
    async get(id: string): Photo {
        let path = Rest.params("shadow/entity/{id}/profile/cover/photo", {id:id});
        return this.conf.get(new Photo(), path) as Promise<Photo>;
    }

    async set(id: string, photo: File): Photo {
        let f = new FormData();
        f.set("file", photo);
        return this.conf.postMultipart(new Photo(), Rest.params("/shadow/entity/{id}/profile/cover/photo", {id: id}), f) as Promise<Photo>;
    }
}