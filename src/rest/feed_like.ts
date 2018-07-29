import {Rest} from "./rest";
import {Feed} from "../models/feed";
import {Empty} from "../models/empty";
import {Like} from "../models/like";
import {Model} from "../models/model";


export class RestFeedLike extends Rest {

    get(id: string): Promise<Like[]> {
        return this.conf.getList(new Feed(),Rest.params("feed/{id}/like", {id: id})) as Promise<Like[]>;
    }

    addLike(id: string): Promise<Like> {
        return this.conf.post(new Feed(),Rest.params("feed/{id}/like", {id: id}), new Empty()) as Promise<Like>;
    }

    deleteLike(id: string): Promise<void> {
        return this.conf.delete(Rest.params("feed/{id}/like", {id: id})) as Promise<void>;
    }
}
