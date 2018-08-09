import {Rest} from "./rest";
import {Like} from "../models/like";
import {Empty} from "../models/empty";

export class RestPhotoLike extends Rest {
    list(id: string): Promise<Like[]> {
        return this.conf.getList(new Like(), Rest.params("/photo/{id}/like", {id: id})) as Promise<Like[]>;
    }

    create(id: string): Promise<Like> {
        return this.conf.post(new Like(), Rest.params("/photo/{id}/like", {id: id}), new Empty()) as Promise<Like>;
    }

    delete(id: string): Promise<void> {
        return this.conf.delete(Rest.params("/photo/{id}/like", {id: id}));
    }
}