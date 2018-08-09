import {Rest} from "./rest";
import {Feed} from "../models/feed";

export class RestUserWall extends Rest {
    list(userId: string, page: number, size?: number): Promise<Feed[]> {
        let params = {page: page, size: size !== undefined ? size : 20};
        let path = Rest.params("/user/{id}/wall?", {id: userId}) + Rest.encodeQueryData(params)
        return this.conf.getList(new Feed(), path) as Promise<Feed[]>;
    }
}