import {Rest} from "./rest";
import {Feed} from "../models/feed";


export class RestFeed extends Rest {

    async get(): Promise<Feed[]> {
        return this.GetList(new Feed(),'/feed') as Promise<Feed[]>;
    }
}
