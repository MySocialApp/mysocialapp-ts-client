import {Rest} from "./rest";
import {Like} from "../models/like";
import {Empty} from "../models/empty";

export class RestStatusLike extends Rest {
    list(statusId: string): Promise<Like[]> {
        return this.conf.getList(new Like(), Rest.params("status/{id}/like", {id: statusId})) as Promise<Like[]>;
    }

    create(statusId: string): Promise<Like> {
        return this.conf.post(new Like(), Rest.params("status/{id}/like", {id: statusId}), new Empty()) as Promise<Like>;
    }

    delete(statusId: string): Promise<void> {
        return this.conf.delete(Rest.params("status/{id}/like", {id: statusId}));
    }
}