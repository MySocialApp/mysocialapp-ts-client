import {Rest} from "./rest";
import {Feed} from "../models/feed";

export class RestShadowEntityFeed extends Rest {
    async list(id: string, page: number, size: number = 10): Promise<Feed[]> {
        let path = Rest.params("shadow/entity/{id}/wall?", {id: id}) + Rest.encodeQueryData({page: page, size: size});
        return this.conf.getList(new Feed(), path) as Promise<Feed[]>;
    }

    async get(id: string): Promise<Feed> {
        return this.conf.get(new Feed(), "shadow/entity/" + id) as Promise<Feed>;
    }

    async delete(id: string): Promise<void> {
        return this.conf.delete("shadow/entity/" + id);
    }
}