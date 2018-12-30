import {Rest} from "./rest";
import {Feed} from "../models/feed";
import {Empty} from "../models/empty";
import {Like} from "../models/like";


export class RestFeedLike extends Rest {

    async get(id: string): Promise<Like[]> {
        return this.conf.getList(new Feed(),Rest.params("feed/{id}/like", {id: id})) as Promise<Like[]>;
    }

    async create(id: string): Promise<Like> {
        return this.conf.post(new Feed(),Rest.params("feed/{id}/like", {id: id}), new Empty()) as Promise<Like>;
    }

    async delete(id: string): Promise<void> {
        return this.conf.deleteVoid(Rest.params("feed/{id}/like", {id: id})) as Promise<void>;
    }
}
