import {Rest} from "./rest";
import {Like} from "../models/like";
import {Empty} from "../models/empty";

export class RestStatusLike extends Rest {
    async list(statusId: string): Like[] {
        return this.conf.getList(new Like(), Rest.params("status/{id}/like", {id: statusId})) as Promise<Like[]>;
    }

    async create(statusId: string): Like {
        return this.conf.post(new Like(), Rest.params("status/{id}/like", {id: statusId}), new Empty()) as Promise<Like>;
    }

    async delete(statusId: string): void {
        return this.conf.delete(Rest.params("status/{id}/like", {id: statusId}));
    }
}