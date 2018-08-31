import {Rest} from "./rest";
import {Photo} from "../models/photo";
import {FileData} from "../models/file";
import {GenericFormData} from "../models/generic_form_data";

export class RestShadowEntityProfileCoverPhoto extends Rest {
    async get(id: string): Promise<Photo> {
        let path = Rest.params("shadow/entity/{id}/profile/cover/photo", {id:id});
        return this.conf.get(new Photo(), path) as Promise<Photo>;
    }

    async set(id: string, photo: FileData): Promise<Photo> {
        let f = new GenericFormData();
        f.set("file", photo.blob, 'image/png', "image.png");
        return this.conf.postMultipart(new Photo(), Rest.params("/shadow/entity/{id}/profile/cover/photo", {id: id}), f) as Promise<Photo>;
    }
}