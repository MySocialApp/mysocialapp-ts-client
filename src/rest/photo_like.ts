import {Rest} from "./rest";
import {Like} from "../models/like";
import {Empty} from "../models/empty";

export class RestPhotoLike extends Rest {
    async list(id: string): Promise<Like[]> {
        return this.conf.getList(new Like(), Rest.params("/photo/{id}/like", {id: id})) as Promise<Like[]>;
    }

    async create(id: string): Promise<Like> {
        return this.conf.post(new Like(), Rest.params("/photo/{id}/like", {id: id}), new Empty()) as Promise<Like>;
    }

    async delete(id: string): Promise<void> {
        return this.conf.deleteVoid(Rest.params("/photo/{id}/like", {id: id}));
    }
}
