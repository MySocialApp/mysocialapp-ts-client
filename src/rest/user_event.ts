import {Rest} from "./rest";
import {Event} from "../models/event";

export class RestUserEvent extends Rest {
    async list(userId: string, page: number, size: number, params?: {}): Promise<Event[]> {
        params = params !== undefined ? params : {};
        params['page'] = page;
        params['size'] = size;
        let path = Rest.params("/user/{id}/event?", {id: userId}) + Rest.encodeQueryData(params);
        return this.conf.getList(new Event(), path) as Promise<Event[]>;
    }
}
